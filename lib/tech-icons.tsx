import type { IconType } from 'react-icons'
import {
  SiDocker,
  SiGithub,
  SiJavascript,
  SiN8N,
  SiNextdotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSupabase,
  SiTailwindcss,
} from 'react-icons/si'
import type { SVGProps } from 'react'

export type TechIconKey =
  | 'python'
  | 'n8n'
  | 'java'
  | 'javascript'
  | 'webhooks'
  | 'postgresql'
  | 'docker'
  | 'github'
  | 'nextjs'
  | 'tailwindcss'
  | 'openai'
  | 'supabase'
  | 'react'

type TechIconDef = {
  Icon: IconType | React.FC<SVGProps<SVGSVGElement>>
  color: string
}

function OpenAiIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .742 7.097 5.98 5.98 0 0 0 .511 4.911 6.051 6.051 0 0 0 6.515 2.899A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023-.141-.085-4.773-2.781a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.393.681zm1.097-2.365 2.602-1.499 2.607 1.5v2.998l-2.597 1.497-2.607-1.497z" />
    </svg>
  )
}

function WebhooksIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      <path d="M18 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      <path d="M18 8V5a3 3 0 0 0-3-3h-1" />
      <path d="M6 14v3a3 3 0 0 0 3 3h1" />
      <path d="M6 8h12" />
      <path d="M6 14h12" />
    </svg>
  )
}

export const TECH_ICON_MAP: Record<TechIconKey, TechIconDef> = {
  python: { Icon: SiPython, color: '#3776AB' },
  n8n: { Icon: SiN8N, color: '#EA4B71' },
  java: { Icon: SiOpenjdk, color: '#007396' },
  javascript: { Icon: SiJavascript, color: '#F7DF1E' },
  webhooks: { Icon: WebhooksIcon, color: '#22D3EE' },
  postgresql: { Icon: SiPostgresql, color: '#4169E1' },
  docker: { Icon: SiDocker, color: '#2496ED' },
  github: { Icon: SiGithub, color: '#FFFFFF' },
  nextjs: { Icon: SiNextdotjs, color: '#FFFFFF' },
  tailwindcss: { Icon: SiTailwindcss, color: '#06B6D4' },
  openai: { Icon: OpenAiIcon, color: '#10A37F' },
  supabase: { Icon: SiSupabase, color: '#3ECF8E' },
  react: { Icon: SiReact, color: '#61DAFB' },
}

export function TechBrandIcon({
  iconKey,
  className,
}: {
  iconKey: TechIconKey
  className?: string
}) {
  const { Icon, color } = TECH_ICON_MAP[iconKey]
  return (
    <Icon
      className={className}
      style={{ color }}
      aria-hidden="true"
    />
  )
}
