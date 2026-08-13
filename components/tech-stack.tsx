'use client'

import { TechBrandIcon } from '@/lib/tech-icons'
import type { TechIconKey } from '@/lib/tech-icons'
import { SectionHeading } from '@/components/section-heading'
import { TECH_STACK } from '@/lib/portfolio-data'

function TechCard({
  name,
  iconKey,
}: {
  name: string
  iconKey: TechIconKey
}) {
  return (
    <div className="group/card mx-2 flex w-[168px] shrink-0 flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card px-4 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 sm:w-[184px]">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.04] transition-all duration-300 group-hover/card:scale-110">
        <TechBrandIcon iconKey={iconKey} className="h-7 w-7" />
      </span>
      <span className="text-center text-sm font-medium text-foreground/90">
        {name}
      </span>
    </div>
  )
}

function MarqueeTrack({ reverse = false }: { reverse?: boolean }) {
  const items = [...TECH_STACK, ...TECH_STACK]

  return (
    <div
      className={`flex w-max shrink-0 items-center will-change-transform ${
        reverse ? 'animate-marquee-reverse' : 'animate-marquee'
      }`}
    >
      {items.map((tech, index) => (
        <TechCard
          key={`${tech.name}-${index}`}
          name={tech.name}
          iconKey={tech.iconKey}
        />
      ))}
    </div>
  )
}

export function TechStack() {
  return (
    <section
      id="stack"
      className="relative overflow-hidden border-y border-border bg-white/[0.015] py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 2xl:max-w-7xl">
        <SectionHeading
          eyebrow="Stack técnica"
          title="Ferramentas que uso para construir e automatizar"
          description="Uma combinação de linguagens, frameworks e plataformas low-code para entregar soluções completas, do backend à orquestração de agentes de IA."
        />
      </div>

      <div className="marquee-group relative mt-12 w-full sm:mt-14">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent sm:w-24"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent sm:w-24"
          aria-hidden="true"
        />

        <div className="flex flex-col gap-4 overflow-hidden">
          <div className="overflow-hidden">
            <MarqueeTrack />
          </div>
          <div className="overflow-hidden">
            <MarqueeTrack reverse />
          </div>
        </div>
      </div>
    </section>
  )
}
