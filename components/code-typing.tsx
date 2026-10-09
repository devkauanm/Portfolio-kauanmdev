import { Sparkles } from 'lucide-react'

const CODE_LINES = [
  { number: '01', delay: '0s', content: <><span className="text-sky-300">const</span> <span className="text-white">developer</span> <span className="text-white/50">= {'{'}</span></> },
  { number: '02', delay: '0.35s', content: <>{'  '}<span className="text-white/70">name</span>: <span className="text-violet-300">&quot;Kauan&quot;</span>,</> },
  { number: '03', delay: '0.7s', content: <>{'  '}<span className="text-white/70">focus</span>: <span className="text-violet-300">&quot;Desenvolvedor de Sistemas & Full-Stack&quot;</span>,</> },
  { number: '04', delay: '1.05s', content: <>{'  '}<span className="text-white/70">tools</span>: [<span className="text-violet-300">&quot;Python&quot;</span>, <span className="text-violet-300">&quot;Next.js&quot;</span>],</> },
  { number: '05', delay: '1.4s', content: <>{'  '}<span className="text-white/70">mission</span>: <span className="text-violet-300">&quot;Transformando ideias em realidade&quot;</span></> },
  { number: '06', delay: '1.75s', content: <span className="text-white/50">{'}'}</span> },
]

export function CodeTyping() {
  return (
    <div className="code-editor relative mx-auto w-full max-w-[620px] rounded-[22px] border border-white/[0.12] bg-card/95 shadow-[0_28px_80px_rgba(0,0,0,0.4)]">
      <div className="flex h-12 items-center border-b border-white/[0.09] px-5">
        <div className="flex items-center gap-2" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-lime-300" />
        </div>
        <span className="ml-auto font-mono text-[10px] text-white/35">kauan.ts</span>
      </div>

      <div className="min-h-[252px] px-4 py-7 sm:min-h-[280px] sm:px-7 sm:py-9">
        <pre className="overflow-hidden font-mono text-[clamp(10px,2.5vw,15px)] leading-[2.15] sm:text-sm">
          <code aria-label="Perfil de desenvolvedor em TypeScript">
            {CODE_LINES.map((line) => (
                <span key={line.number} className="flex min-w-0">
                <span className="mr-5 inline-block w-5 shrink-0 select-none text-right text-white/20" aria-hidden="true">
                  {line.number}
                </span>
                <span
                  className="code-typing-line min-w-0 break-words"
                  style={{ animationDelay: line.delay }}
                >
                  {line.content}
                </span>
              </span>
            ))}
            <span className="code-caret ml-[3.25rem] inline-block h-[1em] w-[2px] translate-y-[2px]" aria-hidden="true" />
          </code>
        </pre>
      </div>

      <div className="absolute -bottom-5 right-4 flex items-center gap-2 rounded-full border border-primary-light/50 bg-gradient-to-r from-primary to-accent px-4 py-2.5 font-mono text-[10px] font-semibold text-white shadow-[0_8px_30px_rgba(59,130,246,0.24)] sm:right-7 sm:px-5 sm:text-xs">
        <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
        <span>Transformando ideias em realidade</span>
      </div>
    </div>
  )
}