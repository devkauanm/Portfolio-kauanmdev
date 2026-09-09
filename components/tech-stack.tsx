'use client'

import { TechBrandIcon } from '@/lib/tech-icons'
import { motion } from 'framer-motion'
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
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
      className="group/card mx-2 flex w-[168px] shrink-0 flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card px-4 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 sm:w-[184px]"
      aria-label={`Tecnologia ${name}`}
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.04] transition-all duration-300 group-hover/card:scale-110">
        <TechBrandIcon iconKey={iconKey} className="h-7 w-7" />
      </span>
      <span className="text-center text-sm font-medium text-foreground/90">
        {name}
      </span>
    </motion.div>
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

      <div className="marquee-group relative mt-12 w-full overflow-x-clip py-4 sm:mt-14 sm:py-5">
        <div className="mx-1 overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_7%,black_93%,transparent)] sm:mx-4">
          <div className="flex flex-col gap-4 py-1">
          <div className="overflow-visible">
            <MarqueeTrack />
          </div>
          <div className="overflow-visible">
            <MarqueeTrack reverse />
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
