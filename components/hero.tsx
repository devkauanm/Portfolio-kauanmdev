'use client'

import Link from 'next/link'
import { ArrowRight, MessageSquare, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import { AutomationFlow } from '@/components/automation-flow'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28"
    >
      {/* Fundo */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, var(--background) 0%, var(--background-alt) 50%, var(--background) 100%)',
          backgroundSize: '200% 200%',
          animation: 'gradientShift 8s ease infinite',
        }}
        aria-hidden="true"
      />
      <div className="bg-grid absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 0%, rgba(37,99,235,0.15), transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="site-container relative grid grid-cols-1 items-center gap-14 pb-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-10">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-4 py-[7px] font-mono text-xs uppercase tracking-[0.1em] text-primary-light">
              <span className="relative flex h-2 w-2">
                <span
                  className="absolute inset-0 rounded-full bg-primary-light opacity-75"
                  style={{ animation: 'ping-slow 1.8s cubic-bezier(0,0,.2,1) infinite' }}
                />
                <span className="relative h-2 w-2 rounded-full bg-primary-light" />
              </span>
              Disponível para novos projetos
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 text-[2.1rem] font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Kauan Martins Silva
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="text-gradient mt-4 text-lg font-medium sm:text-xl">
              Desenvolvedor de Automações • Inteligência Artificial • Sistemas
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="mt-[22px] max-w-[540px] text-base leading-relaxed text-muted-foreground sm:text-lg">
              Transformo processos manuais em soluções inteligentes utilizando
              Python, JavaScript, APIs, IA Generativa e automações com n8n.
            </p>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="#projects"
                data-cursor-hover
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-[26px] py-[15px] text-sm font-medium text-white glow-shadow transition-transform hover:scale-105"
              >
                Ver Projetos
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="#contact"
                data-cursor-hover
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.14] bg-transparent px-[26px] py-[15px] text-sm font-medium transition-colors hover:bg-white/5"
              >
                <MessageSquare className="h-4 w-4" />
                Entrar em Contato
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal direction="scale" delay={0.2} className="order-last mx-auto block w-full max-w-[680px] lg:order-none lg:mx-0">
          <AutomationFlow />
        </Reveal>
      </div>

      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground sm:flex">
        <span className="text-[10px] uppercase tracking-[0.15em]">Scroll</span>
        <ChevronDown
          className="h-4 w-4"
          style={{ animation: 'scrollBounce 1.6s ease-in-out infinite' }}
        />
      </div>
    </section>
  )
}
