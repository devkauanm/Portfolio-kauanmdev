'use client'

import { ExternalLink, Code2 } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import type { Project } from '@/lib/portfolio-data'

function ProjectMedia({ media }: { media: Project['media'] }) {
  if (media.type === 'youtube') {
    return (
      <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-black">
        <iframe
          src={`https://www.youtube.com/embed/${media.videoId}`}
          title="Demonstração do projeto"
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  if (media.type === 'vimeo') {
    return (
      <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-black">
        <iframe
          src={`https://player.vimeo.com/video/${media.videoId}`}
          title="Demonstração do projeto"
          className="absolute inset-0 h-full w-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      </div>
    )
  }

  if (media.type === 'video') {
    return (
      <div className="overflow-hidden rounded-xl border border-border bg-black">
        <video
          src={media.src}
          poster={media.poster}
          controls
          className="aspect-video w-full"
        >
          Seu navegador não suporta reprodução de vídeo.
        </video>
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-white/[0.02]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={media.src}
        alt={media.alt}
        className="aspect-video w-full object-cover"
      />
    </div>
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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl">
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
