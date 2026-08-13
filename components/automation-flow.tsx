'use client'

import { motion } from 'framer-motion'
import { Brain, Database, MessageCircle, Webhook, Workflow } from 'lucide-react'

const NODES = [
  { icon: MessageCircle, label: 'WhatsApp', left: '11.5%', top: '19.5%', color: '#6ee7b7', delay: 0 },
  { icon: Brain, label: 'IA', left: '84.5%', top: '16.5%', color: '#c4b5fd', delay: 2 },
  { icon: Database, label: 'Supabase', left: '14.5%', top: '84%', color: '#93c5fd', delay: 4 },
  { icon: Webhook, label: 'API', left: '84%', top: '85%', color: '#67e8f9', delay: 6 },
]

const PATHS = [
  'M46 78 Q123 117.5 200 205',
  'M338 66 Q269 111.5 200 205',
  'M58 336 Q129 294.5 200 205',
  'M336 340 Q268 296.5 200 205',
]

export function AutomationFlow() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]">
      <div
        className="absolute inset-8 rounded-full blur-[38px]"
        style={{
          background:
            'radial-gradient(circle, rgba(37,99,235,0.22), rgba(124,58,237,0.12) 55%, transparent 78%)',
        }}
      />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 400"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2563EB" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.55" />
          </linearGradient>
          <radialGradient id="dotGradient">
            <stop offset="0%" stopColor="#F8FAFC" />
            <stop offset="100%" stopColor="#60A5FA" />
          </radialGradient>
        </defs>

        {PATHS.map((d, i) => (
          <path
            key={i}
            id={`flow-path-${i}`}
            d={d}
            fill="none"
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            strokeDasharray="5 7"
            style={{
              animation: 'flow-dash 3.2s linear infinite',
              animationDelay: `${-0.4 * i}s`,
            }}
          />
        ))}

        {PATHS.map((_, i) => (
          <circle key={`dot-${i}`} r="3.5" fill="url(#dotGradient)">
            <animateMotion dur="2.6s" repeatCount="indefinite" begin={`${0.55 * i}s`}>
              <mpath href={`#flow-path-${i}`} />
            </animateMotion>
          </circle>
        ))}
      </svg>

      <div
        className="absolute left-1/2 flex h-20 w-20 items-center justify-center rounded-[20px] border border-white/10 bg-gradient-to-br from-primary to-accent text-white glow-shadow"
        style={{ top: '51.25%', animation: 'core-scale 4s ease-in-out infinite' }}
      >
        <Workflow className="h-[30px] w-[30px]" strokeWidth={1.75} />
      </div>

      {NODES.map((node) => {
        const Icon = node.icon
        return (
          <motion.div
            key={node.label}
            className="absolute"
            style={{
              left: node.left,
              top: node.top,
              animation: `float-slow 9s ease-in-out infinite`,
              animationDelay: `${-node.delay}s`,
            }}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 + node.delay * 0.05 }}
          >
            <div className="flex flex-col items-center gap-1.5 rounded-xl border border-border bg-[rgba(17,24,39,0.55)] px-3.5 py-3 backdrop-blur-md shadow-[0_10px_24px_rgba(0,0,0,0.25)]">
              <Icon className="h-[19px] w-[19px]" style={{ color: node.color }} strokeWidth={1.75} />
              <span className="font-mono text-[10px] uppercase tracking-[0.06em] text-muted-foreground">
                {node.label}
              </span>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
