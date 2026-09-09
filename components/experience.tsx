import { BadgeCheck, Briefcase, GraduationCap } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const EXP_POINTS = [
  'Desenvolvimento de automações',
  'Integração de APIs',
  'Criação de Agentes de IA',
  'Python & JavaScript',
  'Otimização de processos',
]

const COURSES = [
  'Especialista em Algoritmos e Programação',
  'Introdução à Ciência da Computação (CS50 - Curso de Havard no Brasil)',
]

export function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden border-y border-border bg-white/[0.015] py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 2xl:max-w-7xl">
        <SectionHeading
          eyebrow="Trajetória"
          title="Experiência & formação"
          description="Da sala de aula à operação de clientes reais — construindo automações que funcionam em produção."
        />

        <div className="mt-12 grid grid-cols-1 items-start gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-12">
          {/* Coluna 1: Experiência Profissional */}
          <Reveal className="min-w-0">
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] text-primary-light">
                <Briefcase className="h-5 w-5" />
              </span>
              <h3 className="font-mono text-xs uppercase tracking-[0.1em] text-primary-light">
                Experiência profissional
              </h3>
            </div>

            <div className="relative ml-3 border-l border-border pl-6 sm:ml-4">
              <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-primary to-accent glow-shadow" />

              <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h4 className="text-lg font-semibold">Agência MADA</h4>
                  <span className="shrink-0 font-mono text-xs text-muted-foreground">
                    2025 — Atualmente
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-primary-light">
                  Gestor de Automações
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Liderança na construção de automações, integrações de API e
                  agentes de IA que eliminam trabalho manual e aceleram a
                  operação dos clientes.
                </p>
                <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {EXP_POINTS.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Coluna 2: Formação e Cursos */}
          <Reveal direction="right" className="min-w-0 space-y-8">
            {/* Formação Acadêmica */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] text-primary-light">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <h3 className="font-mono text-xs uppercase tracking-[0.1em] text-primary-light">
                  Formação acadêmica
                </h3>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h4 className="text-base font-semibold">
                    Universidade São Judas Tadeu
                  </h4>
                  <span className="font-mono text-xs text-muted-foreground">
                    2026 — 2029
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  Bacharelado em Ciência da Computação
                </p>
              </div>
            </div>

            {/* Cursos */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] text-primary-light">
                  <BadgeCheck className="h-5 w-5" />
                </span>
                <h3 className="font-mono text-xs uppercase tracking-[0.1em] text-primary-light">
                  Cursos & Certificações
                </h3>
              </div>

              <div className="rounded-2xl border border-border bg-card p-5 sm:p-6">
                <ul className="space-y-3">
                  {COURSES.map((course) => (
                    <li
                      key={course}
                      className="flex items-center gap-2.5 text-sm leading-relaxed text-muted-foreground"
                    >
                      <BadgeCheck className="h-4 w-4 shrink-0 text-accent-light" />
                      <span>{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}