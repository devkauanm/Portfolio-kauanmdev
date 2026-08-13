'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/section-heading'
import { DIFFERENTIALS } from '@/lib/portfolio-data'

// Bento sizing: first and last span wider on large screens for an editorial rhythm.
const SPANS = [
  'lg:col-span-2',
  'lg:col-span-1',
  'lg:col-span-1',
  'lg:col-span-1',
  'lg:col-span-1',
  'lg:col-span-2',
]

export function Differentials() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 2xl:max-w-7xl">
        <SectionHeading
          eyebrow="Diferenciais"
          title="O que trago para cada projeto"
          description="Além do código: uma visão de produto e de processo que faz cada automação gerar resultado de verdade."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
          {DIFFERENTIALS.map((diff, i) => {
            const Icon = diff.icon
            return (
              <motion.div
                key={diff.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                data-cursor-hover
                className={`group relative overflow-hidden rounded-2xl border border-border bg-[rgba(17,24,39,0.55)] p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 ${SPANS[i]}`}
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary-light transition-all duration-300 group-hover:scale-110 group-hover:text-accent-light">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="relative mt-5 text-base font-semibold">
                  {diff.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                  {diff.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
