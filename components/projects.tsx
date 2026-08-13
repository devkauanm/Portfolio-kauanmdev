'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Workflow } from 'lucide-react'
import { ProjectModal } from '@/components/project-modal'
import { SectionHeading } from '@/components/section-heading'
import { COVER_TONES, PROJECTS, type Project } from '@/lib/portfolio-data'

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const openProject = (project: Project) => {
    setSelectedProject(project)
    setModalOpen(true)
  }

  return (
    <section id="projects" className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 2xl:max-w-7xl">
        <SectionHeading
          eyebrow="Projetos"
          title="Soluções que já saíram do papel"
          description="Uma seleção de agentes, automações e integrações construídos para times comerciais e operacionais reais."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-14 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              whileHover={{ y: -8 }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-colors hover:border-primary/30"
            >
              <div
                className={`relative flex h-44 items-center justify-center overflow-hidden border-b border-border bg-gradient-to-br ${
                  COVER_TONES[project.tone]
                }`}
              >
                <div className="bg-grid absolute inset-0 opacity-30" />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-[rgba(11,17,32,0.6)] text-primary-light backdrop-blur-sm glow-shadow">
                  <Workflow className="h-7 w-7" />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card to-transparent to-70%" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.desc}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-white/[0.03] px-3 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => openProject(project)}
                  className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-primary-light transition-colors group-hover:text-accent-light"
                >
                  Ver detalhes
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </section>
  )
}
