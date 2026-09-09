'use client'

import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, ExternalLink, Code2, X } from 'lucide-react'
import { createPortal } from 'react-dom'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import type { Project } from '@/lib/portfolio-data'

function ProjectMedia({ media }: { media: Project['media'] }) {
  const mediaItems = Array.isArray(media) ? media : [media]
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imageState, setImageState] = useState<'loading' | 'loaded' | 'error'>('loading')
  const [expandedImage, setExpandedImage] = useState<string | null>(null)
  const currentMedia = mediaItems[currentIndex]

  useEffect(() => {
    setCurrentIndex(0)
  }, [media])

  useEffect(() => {
    setImageState('loading')
    setExpandedImage(null)
  }, [currentIndex])

  useEffect(() => {
    if (!expandedImage) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setExpandedImage(null)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [expandedImage])

  const goToPrevious = () => {
    setCurrentIndex((index) => (index === 0 ? mediaItems.length - 1 : index - 1))
  }

  const goToNext = () => {
    setCurrentIndex((index) => (index + 1) % mediaItems.length)
  }

  if (!currentMedia) return null

  if (currentMedia.type === 'youtube') {
    return (
      <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-black">
        <iframe
          src={`https://www.youtube.com/embed/${currentMedia.videoId}`}
          title="Demonstração do projeto"
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  if (currentMedia.type === 'vimeo') {
    return (
      <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-black">
        <iframe
          src={`https://player.vimeo.com/video/${currentMedia.videoId}`}
          title="Demonstração do projeto"
          className="absolute inset-0 h-full w-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  if (currentMedia.type === 'video') {
    return (
      <div className="overflow-hidden rounded-xl border border-border bg-black">
        <video
          src={currentMedia.src}
          poster={currentMedia.poster}
          controls
          className="aspect-video w-full"
        >
          Seu navegador não suporta reprodução de vídeo.
        </video>
      </div>
    )
  }

  const expandedImageOverlay = expandedImage && typeof document !== 'undefined'
    ? createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Imagem expandida"
          data-project-lightbox
          onPointerDown={(event) => event.stopPropagation()}
          onClick={() => setExpandedImage(null)}
          className="pointer-events-auto fixed inset-0 z-[100] flex items-center justify-center overflow-auto bg-black/75 p-4 backdrop-blur-md sm:p-8"
        >
          <button
            type="button"
            onPointerDown={(event) => {
              event.stopPropagation()
              setExpandedImage(null)
            }}
            onMouseDown={(event) => {
              event.stopPropagation()
              setExpandedImage(null)
            }}
            onClick={(event) => {
              event.stopPropagation()
              setExpandedImage(null)
            }}
            aria-label="Fechar imagem expandida"
            className="pointer-events-auto fixed right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white transition-colors hover:bg-white/15 sm:right-8 sm:top-8"
          >
            <X className="h-5 w-5" />
          </button>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={expandedImage}
            alt={currentMedia.alt}
            onClick={(event) => event.stopPropagation()}
            className="h-auto w-auto max-h-[calc(100vh-2rem)] max-w-[calc(100vw-2rem)] object-contain sm:max-h-[calc(100vh-4rem)] sm:max-w-[calc(100vw-4rem)]"
          />
        </div>,
        document.body,
      )
    : null

  return (
    <>
      <div className="relative overflow-hidden rounded-xl border border-border bg-white/[0.02]" aria-busy={imageState === 'loading'}>
      {imageState === 'loading' ? (
        <div className="absolute inset-0 min-h-48 animate-pulse bg-white/[0.06]" aria-label="Carregando imagem" />
      ) : null}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <button
        type="button"
        onClick={() => setExpandedImage(currentMedia.src)}
        aria-label={`Expandir imagem: ${currentMedia.alt}`}
        className="flex max-h-[min(65vh,560px)] min-h-48 w-full cursor-zoom-in items-center justify-center"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={currentMedia.src}
          alt={currentMedia.alt}
          loading="lazy"
          onLoad={() => setImageState('loaded')}
          onError={() => setImageState('error')}
          className={`block h-auto max-h-[min(65vh,560px)] max-w-full object-contain transition-opacity duration-300 ${imageState === 'loaded' ? 'opacity-100' : 'opacity-0'}`}
        />
      </button>
      {imageState === 'error' ? (
        <div className="flex min-h-48 items-center justify-center px-6 text-center text-sm text-muted-foreground">
          Não foi possível carregar a imagem deste projeto.
        </div>
      ) : null}
      {mediaItems.length > 1 ? (
        <>
          <button
            type="button"
            onClick={goToPrevious}
            aria-label="Imagem anterior"
            className="absolute left-3 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white transition-colors hover:bg-black/80"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={goToNext}
            aria-label="Próxima imagem"
            className="absolute right-3 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white transition-colors hover:bg-black/80"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-black/60 px-2.5 py-1.5">
            {mediaItems.map((item, index) => (
              <button
                key={item.type === 'image' ? item.src : index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ir para imagem ${index + 1}`}
                aria-current={index === currentIndex}
                className={`h-1.5 rounded-full transition-all ${index === currentIndex ? 'w-5 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/80'}`}
              />
            ))}
          </div>
        </>
      ) : null}
      </div>
      {expandedImageOverlay}
    </>
  )
}

export function ProjectModal({
  project,
  open,
  onOpenChange,
}: {
  project: Project | null
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  if (!project) return null

  const handleModalOpenChange = (nextOpen: boolean) => {
    if (!nextOpen && document.querySelector('[data-project-lightbox]')) return
    onOpenChange(nextOpen)
  }

  return (
    <Dialog open={open} onOpenChange={handleModalOpenChange}>
      <DialogContent
        className="max-w-4xl"
        onPointerDownOutside={(event) => {
          const target = event.target as HTMLElement | null
          if (target?.closest('[data-project-lightbox]')) event.preventDefault()
        }}
      >
        <DialogHeader>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogDescription>{project.desc}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6 px-6 pb-6">
          <ProjectMedia media={project.media} />

          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.1em] text-primary-light">
              Arquitetura
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {project.architecture}
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-[0.1em] text-primary-light">
              Tecnologias
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border bg-white/[0.03] px-3 py-1 font-mono text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.02] glow-shadow"
              >
                <ExternalLink className="h-4 w-4" />
                Ver Demo Live
              </a>
            ) : null}
            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-white/[0.03] px-6 py-3 text-sm font-medium transition-colors hover:border-primary/40 hover:text-foreground"
              >
                <Code2 className="h-4 w-4" />
                Código / Repositório
              </a>
            ) : null}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
