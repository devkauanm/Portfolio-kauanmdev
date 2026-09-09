'use client'

import { motion } from 'framer-motion'
import {
  Bell,
  CalendarClock,
  Check,
  Clock3,
  FileText,
  FormInput,
  Mail,
  MessageCircle,
  MoreHorizontal,
  Play,
  Settings2,
  Sparkles,
  Table2,
  Webhook,
  Workflow,
} from 'lucide-react'
import { useLayoutEffect, useRef, useState } from 'react'
import type { CSSProperties, ComponentType } from 'react'

type NodeKind = 'input' | 'output'

type WorkflowNode = {
  label: string
  detail: string
  icon: ComponentType<{ className?: string; strokeWidth?: number }>
  color: string
  kind: NodeKind
  left: string
  top: string
}

const NODES: WorkflowNode[] = [
  { label: 'Webhook', detail: 'Lead recebido', icon: Webhook, color: '#67e8f9', kind: 'input', left: '7%', top: '20%' },
  { label: 'Formulário', detail: 'Novo cadastro', icon: FormInput, color: '#86efac', kind: 'input', left: '7%', top: '44%' },
  { label: 'Timer', detail: 'A cada 15 min', icon: Clock3, color: '#fbbf24', kind: 'input', left: '7%', top: '68%' },
  { label: 'WhatsApp', detail: 'Mensagem enviada', icon: MessageCircle, color: '#6ee7b7', kind: 'output', left: '75%', top: '20%' },
  { label: 'Supabase', detail: 'Registro atualizado', icon: Table2, color: '#93c5fd', kind: 'output', left: '75%', top: '44%' },
  { label: 'E-mail', detail: 'Relatório disparado', icon: Mail, color: '#c4b5fd', kind: 'output', left: '75%', top: '68%' },
]

type FlowGeometry = { width: number; height: number; paths: string[] }

function NodeCard({ node, cardRef }: { node: WorkflowNode; cardRef: (element: HTMLDivElement | null) => void }) {
  const Icon = node.icon
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 8 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.4 }}
      className="absolute hidden w-[clamp(92px,18.7%,142px)] -translate-y-1/2 md:block"
      ref={cardRef}
      style={{ left: node.left, top: node.top }}
    >
      <div
        className="group relative overflow-hidden rounded-xl border border-white/10 bg-slate-950/70 p-2 shadow-[0_12px_30px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:shadow-[0_0_28px_var(--node-glow)] sm:p-2.5"
        style={{ '--node-glow': `${node.color}44` } as CSSProperties}
      >
        <div className="flex min-w-0 items-center gap-1.5 sm:gap-2">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.05] sm:h-7 sm:w-7" style={{ color: node.color }}>
            <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5" strokeWidth={1.8} />
          </span>
          <span className="min-w-0">
            <strong className="block truncate text-[10px] font-medium text-white/90 sm:text-[11px]">{node.label}</strong>
            <span className="block truncate text-[8px] text-white/40 sm:text-[9px]">{node.detail}</span>
          </span>
          <MoreHorizontal className="ml-auto hidden h-3.5 w-3.5 shrink-0 text-white/30 sm:block" />
        </div>
        <div className="mt-1.5 flex min-w-0 items-center gap-1 overflow-hidden rounded-md bg-white/[0.04] px-1.5 py-1 text-[7px] text-white/35 sm:mt-2 sm:gap-1.5 sm:px-2 sm:py-1.5 sm:text-[8px]">
          {node.kind === 'input' ? <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" /> : <Check className="h-2.5 w-2.5 text-emerald-300" />}
          <span className="truncate whitespace-nowrap">{node.kind === 'input' ? 'Aguardando evento' : 'Executado agora'}</span>
        </div>
        <span
          className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full border border-white/40 bg-slate-950 shadow-[0_0_8px_currentColor]"
          style={{ color: node.color, [node.kind === 'input' ? 'right' : 'left']: '-5px' }}
        />
      </div>
    </motion.div>
  )
}

function MobileNode({
  icon: Icon,
  label,
  detail,
  color,
  active = false,
}: {
  icon: ComponentType<{ className?: string; strokeWidth?: number }>
  label: string
  detail: string
  color: string
  active?: boolean
}) {
  return (
    <div className={`flex w-full max-w-[220px] items-center gap-2.5 overflow-hidden rounded-xl border bg-slate-950/80 px-3 py-2 shadow-lg backdrop-blur-md ${active ? 'border-primary-light/50 shadow-[0_0_24px_rgba(59,130,246,0.3)]' : 'border-white/10'}`}>
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/[0.06]" style={{ color }}><Icon className="h-3.5 w-3.5" /></span>
      <span className="min-w-0"><strong className="block truncate text-[10px] font-medium text-white/90">{label}</strong><span className="block truncate text-[8px] text-white/45">{detail}</span></span>
      <span className="ml-auto h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-emerald-300" />
    </div>
  )
}

export function AutomationFlow() {
  const canvasRef = useRef<HTMLDivElement>(null)
  const centerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<Array<HTMLDivElement | null>>([])
  const [geometry, setGeometry] = useState<FlowGeometry>({ width: 0, height: 0, paths: [] })

  useLayoutEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const updateGeometry = () => {
      const canvasRect = canvas.getBoundingClientRect()
      const centerRect = centerRef.current?.getBoundingClientRect()
      if (!centerRect || canvasRect.width === 0 || canvasRect.height === 0) return

      const centerLeft = centerRect.left - canvasRect.left
      const centerRight = centerRect.right - canvasRect.left
      const centerY = centerRect.top + centerRect.height / 2 - canvasRect.top
      const paths = cardRefs.current.flatMap((card) => {
        if (!card) return []
        const cardRect = card.getBoundingClientRect()
        const cardLeft = cardRect.left - canvasRect.left
        const cardRight = cardRect.right - canvasRect.left
        const cardY = cardRect.top + cardRect.height / 2 - canvasRect.top
        const isInput = cardLeft < centerLeft
        const startX = isInput ? cardRight : centerRight
        const endX = isInput ? centerLeft : cardLeft
        const curve = Math.max(30, Math.abs(endX - startX) * 0.42)
        const controlStart = isInput ? startX + curve : startX + curve
        const controlEnd = isInput ? endX - curve : endX - curve
        return [`M ${startX} ${isInput ? cardY : centerY} C ${controlStart} ${isInput ? cardY : centerY}, ${controlEnd} ${isInput ? centerY : cardY}, ${endX} ${isInput ? centerY : cardY}`]
      })

      setGeometry({ width: canvasRect.width, height: canvasRect.height, paths })
    }

    updateGeometry()
    const observer = new ResizeObserver(updateGeometry)
    observer.observe(canvas)
    window.addEventListener('resize', updateGeometry)
    return () => {
      observer.disconnect()
      window.removeEventListener('resize', updateGeometry)
    }
  }, [])

  return (
    <div className="group/window relative mx-auto w-full max-w-[680px] min-w-0 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/45 p-1.5 shadow-[0_28px_80px_rgba(0,0,0,0.38)] backdrop-blur-md transition-transform duration-500 hover:scale-[1.01] sm:p-2">
      <div className="pointer-events-none absolute -inset-10 -z-10 rounded-[40px] bg-[radial-gradient(circle,rgba(59,130,246,0.22),rgba(124,58,237,0.1)_45%,transparent_72%)] blur-2xl" aria-hidden="true" />
      <div className="flex items-center justify-between border-b border-white/[0.08] px-3 py-2.5 sm:px-4">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-rose-400/80" />
          <span className="h-2 w-2 rounded-full bg-amber-300/80" />
          <span className="h-2 w-2 rounded-full bg-emerald-300/80" />
        </div>
        <div className="flex items-center gap-3 font-mono text-[9px] text-white/40">
          <span className="text-white/80">Editor</span>
          <span className="hidden sm:inline">Execuções</span>
          <span className="flex items-center gap-1 text-emerald-300"><i className="h-1.5 w-1.5 rounded-full bg-current shadow-[0_0_7px_currentColor]" />Ativo</span>
        </div>
        <Settings2 className="h-3.5 w-3.5 text-white/40" aria-label="Configurações do editor" />
      </div>

      <div className="overflow-hidden rounded-b-2xl">
        <div
          ref={canvasRef}
          className="relative h-[300px] overflow-hidden bg-[#0b1220] md:h-[430px]"
          style={{ backgroundImage: 'radial-gradient(rgba(148,163,184,0.22) 1px, transparent 1px)', backgroundSize: '18px 18px' }}
        >
          <div className="absolute bottom-3 left-3 top-3 z-20 hidden w-8 flex-col items-center justify-between rounded-lg border border-white/[0.08] bg-slate-950/70 py-3 text-white/35 backdrop-blur-md md:flex">
            <Workflow className="h-3.5 w-3.5 text-primary-light" />
            <div className="flex flex-col items-center gap-4"><Play className="h-3 w-3" /><Table2 className="h-3 w-3" /><FileText className="h-3 w-3" /></div>
            <MoreHorizontal className="h-3.5 w-3.5" />
          </div>

          <svg className="pointer-events-none absolute inset-0 hidden h-full w-full md:block" viewBox={`0 0 ${geometry.width || 1} ${geometry.height || 1}`} role="img" aria-label="Fluxo visual de automação com entradas, agente de IA e ações">
            <defs>
              <linearGradient id="workflow-line" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#67e8f9" stopOpacity=".45" /><stop offset=".5" stopColor="#8b5cf6" stopOpacity=".7" /><stop offset="1" stopColor="#6ee7b7" stopOpacity=".45" /></linearGradient>
            </defs>
            {geometry.paths.map((path, index) => <path key={path} id={`workflow-path-${index}`} d={path} fill="none" stroke="url(#workflow-line)" strokeDasharray="4 6" strokeWidth="1.4" opacity=".8" />)}
            {geometry.paths.map((_, index) => <circle key={`particle-${index}`} r="2.25" fill="#e0f2fe"><animateMotion dur={`${2.4 + index * 0.12}s`} repeatCount="indefinite" begin={`${index * 0.3}s`}><mpath href={`#workflow-path-${index}`} /></animateMotion></circle>)}
          </svg>

          <div ref={centerRef} className="absolute left-1/2 top-1/2 z-10 hidden h-[92px] w-[150px] -translate-x-1/2 -translate-y-1/2 flex-col justify-between rounded-2xl border border-primary-light/40 bg-gradient-to-br from-blue-950/90 to-violet-950/90 p-3 shadow-[0_0_35px_rgba(59,130,246,0.35)] md:flex">
            <div className="flex items-start justify-between"><span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/30 text-primary-light"><Sparkles className="h-4 w-4" /></span><span className="flex items-center gap-1 font-mono text-[8px] text-emerald-300"><i className="h-1.5 w-1.5 animate-pulse rounded-full bg-current" />RUNNING</span></div>
            <div><strong className="block text-xs text-white">AI Agent</strong><span className="text-[9px] text-white/45">Core Engine · v2.4</span></div>
          </div>

          {NODES.map((node, index) => <NodeCard key={node.label} node={node} cardRef={(element) => { cardRefs.current[index] = element }} />)}

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-12 md:hidden">
            <MobileNode icon={Webhook} label="Webhook" detail="Trigger recebido" color="#67e8f9" />
            <span className="h-4 w-px bg-gradient-to-b from-cyan-300/70 to-violet-400/70" />
            <MobileNode icon={Sparkles} label="AI Agent" detail="Processando com GPT-4o" color="#a78bfa" active />
            <span className="h-4 w-px bg-gradient-to-b from-violet-400/70 to-emerald-300/70" />
            <MobileNode icon={MessageCircle} label="WhatsApp" detail="Ação concluída" color="#6ee7b7" />
          </div>

          <div className="absolute bottom-3 right-3 z-20 hidden w-[132px] rounded-lg border border-white/10 bg-slate-950/80 p-2.5 text-[9px] text-white/45 shadow-xl backdrop-blur-md md:block">
            <div className="mb-2 flex items-center justify-between text-white/70"><span className="font-mono uppercase tracking-wider">Configuração</span><CalendarClock className="h-3 w-3" /></div>
            <div className="flex justify-between border-b border-white/[0.08] pb-1.5"><span>Modelo</span><span className="text-primary-light">GPT-4o</span></div>
            <div className="flex justify-between pt-1.5"><span>Latência</span><span className="text-emerald-300">184ms</span></div>
          </div>

          <div className="absolute right-3 top-3 hidden items-center gap-1.5 rounded-md border border-white/10 bg-slate-950/70 px-2 py-1 text-[8px] text-white/45 backdrop-blur-md md:flex"><Bell className="h-3 w-3 text-amber-300" />12 eventos processados</div>
        </div>
      </div>
    </div>
  )
}
