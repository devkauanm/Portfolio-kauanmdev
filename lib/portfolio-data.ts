import {
  Network,
  Puzzle,
  Sparkles,
  Target,
  Webhook,
  Workflow,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import type { TechIconKey } from '@/lib/tech-icons'

export const NAV_LINKS = [
  { href: '#home', label: 'Início' },
  { href: '#about', label: 'Sobre' },
  { href: '#stack', label: 'Tecnologias' },
  { href: '#projects', label: 'Projetos' },
  { href: '#experience', label: 'Experiência' },
  { href: '#contact', label: 'Contato' },
]

export const EMAIL = 'kauanm.dev@gmail.com'
export const GITHUB_URL = 'https://github.com/devkauanm'
export const LINKEDIN_URL = 'https://linkedin.com/in/kauanmartinssilva'

export const TECH_STACK: { name: string; iconKey: TechIconKey }[] = [
  { name: 'Python', iconKey: 'python' },
  { name: 'n8n', iconKey: 'n8n' },
  { name: 'Java', iconKey: 'java' },
  { name: 'JavaScript', iconKey: 'javascript' },
  { name: 'APIs / Webhooks', iconKey: 'webhooks' },
  { name: 'PostgreSQL', iconKey: 'postgresql' },
  { name: 'Docker', iconKey: 'docker' },
  { name: 'Git', iconKey: 'git' },
  { name: 'Next.js', iconKey: 'nextjs' },
  { name: 'Tailwind CSS', iconKey: 'tailwindcss' },
  { name: 'OpenAI', iconKey: 'openai' },
  { name: 'Supabase', iconKey: 'supabase' },
  { name: 'React', iconKey: 'react' },
]

type CoverTone = 'blue' | 'purple' | 'cyan' | 'violet'

export type ProjectMedia =
  | { type: 'image'; src: string; alt: string }
  | { type: 'youtube'; videoId: string }
  | { type: 'vimeo'; videoId: string }
  | { type: 'video'; src: string; poster?: string }

export type Project = {
  id: string
  title: string
  desc: string
  architecture: string
  tech: string[]
  tone: CoverTone
  media: ProjectMedia
  demoUrl?: string
  repoUrl?: string
}

export const PROJECTS: Project[] = [
  {
    id: 'whatsapp-ai-agent',
    title: 'Agente de IA para WhatsApp',
    desc: 'Agente inteligente integrado ao WhatsApp utilizando IA, DeepRAG, OpenAI, Evolution API e Supabase para atendimento e qualificação de leads em tempo real.',
    architecture:
      'A arquitetura segue um pipeline event-driven: mensagens chegam via Evolution API (webhook) e são enfileiradas no n8n. O fluxo consulta embeddings no Supabase (DeepRAG), monta o contexto e envia para a OpenAI. Respostas são validadas, persistidas e devolvidas ao WhatsApp com logs de conversa e métricas de qualificação de leads.',
    tech: ['Python', 'n8n', 'OpenAI', 'Supabase', 'Webhook'],
    tone: 'blue',
    media: {
      type: 'image',
      src: '/placeholder.svg',
      alt: 'Print do agente de IA integrado ao WhatsApp',
    },
    demoUrl: 'https://github.com/devkauanm',
    repoUrl: 'https://github.com/devkauanm',
  },
  {
    id: 'commercial-automation',
    title: 'Sistema de Automação Comercial',
    desc: 'Automação para captura de formulários, integração com CRM, disparo inteligente de mensagens e gerenciamento completo do funil de clientes.',
    architecture:
      'Formulários disparam webhooks para o n8n, que normaliza payloads, enriquece dados e sincroniza com o CRM via REST API. Regras de negócio definem etapas do funil, disparos condicionais e follow-ups automáticos. PostgreSQL armazena histórico de interações e dashboards consomem views materializadas para acompanhamento comercial.',
    tech: ['n8n', 'CRM', 'APIs', 'Automação'],
    tone: 'purple',
    media: {
      type: 'youtube',
      videoId: 'dQw4w9WgXcQ',
    },
    demoUrl: 'https://github.com/devkauanm',
    repoUrl: 'https://github.com/devkauanm',
  },
  {
    id: 'admin-dashboard',
    title: 'Dashboard Administrativo',
    desc: 'Dashboard para acompanhamento de métricas, indicadores e gestão operacional com visualização de dados em tempo real.',
    architecture:
      'Frontend em Next.js com React Server Components para páginas estáticas e client components para gráficos interativos. API routes consultam PostgreSQL com queries otimizadas; autenticação via Supabase Auth. Tailwind CSS garante UI responsiva; dados críticos são cacheados e invalidados via revalidação sob demanda.',
    tech: ['React', 'Next.js', 'SQL', 'Dashboards'],
    tone: 'cyan',
    media: {
      type: 'image',
      src: '/placeholder.svg',
      alt: 'Dashboard administrativo com métricas operacionais',
    },
    demoUrl: 'https://github.com/devkauanm',
    repoUrl: 'https://github.com/devkauanm',
  },
  {
    id: 'api-integrations',
    title: 'Integrações com APIs',
    desc: 'Coleção de integrações entre sistemas utilizando REST APIs, Webhooks e bancos de dados para orquestrar fluxos entre plataformas distintas.',
    architecture:
      'Cada integração expõe contratos tipados (OpenAPI) e workers assíncronos consomem filas de eventos. Webhooks recebem payloads, validam assinatura HMAC e roteiam para handlers específicos. Docker isola serviços; Git versiona contratos e pipelines CI validam breaking changes antes do deploy.',
    tech: ['REST APIs', 'Webhooks', 'Node.js', 'SQL'],
    tone: 'violet',
    media: {
      type: 'image',
      src: '/placeholder.svg',
      alt: 'Diagrama de integrações entre APIs e sistemas',
    },
    repoUrl: 'https://github.com/devkauanm',
  },
]

export const DIFFERENTIALS: { title: string; desc: string; icon: LucideIcon }[] = [
  {
    title: 'Automação de Processos',
    desc: 'Elimino trabalho manual repetitivo com fluxos inteligentes e confiáveis.',
    icon: Workflow,
  },
  {
    title: 'Integração entre Sistemas',
    desc: 'Conecto ferramentas e bancos de dados distintos em um único ecossistema.',
    icon: Network,
  },
  {
    title: 'IA Generativa',
    desc: 'Aplico modelos de linguagem para criar agentes que realmente resolvem problemas.',
    icon: Sparkles,
  },
  {
    title: 'Visão de Negócios',
    desc: 'Traduzo necessidades operacionais em soluções técnicas de alto impacto.',
    icon: Target,
  },
  {
    title: 'Resolução de Problemas',
    desc: 'Diagnostico gargalos e desenho soluções simples para problemas complexos.',
    icon: Puzzle,
  },
  {
    title: 'Low-Code',
    desc: 'Acelero entregas combinando low-code com código sob medida quando necessário.',
    icon: Zap,
  },
]

export const STATS: { label: string; value: number; suffix: string }[] = [
  { label: 'Automações Desenvolvidas', value: 40, suffix: '+' },
  { label: 'APIs Integradas', value: 25, suffix: '+' },
  { label: 'Projetos Entregues', value: 18, suffix: '+' },
  { label: 'Tecnologias Dominadas', value: 13, suffix: '' },
]

export const TIMELINE: { year: string; title: string; desc: string }[] = [
  {
    year: '2025',
    title: 'Gestor de Automações — Agência MADA',
    desc: 'Lidero o desenvolvimento de automações, integrações de API e agentes de IA que eliminam trabalho manual e aceleram a operação dos clientes.',
  },
  {
    year: '2024',
    title: 'Imersão em IA Generativa & n8n',
    desc: 'Aprofundamento em orquestração de agentes, engenharia de prompt e automações low-code para escalar processos comerciais.',
  },
  {
    year: '2022',
    title: 'Primeiros passos em desenvolvimento',
    desc: 'Início da jornada com Python e lógica de programação, construindo scripts e integrações simples entre sistemas.',
  },
]

export const COVER_TONES: Record<CoverTone, string> = {
  blue: 'from-[#3b82f6]/20 to-[#8b5cf6]/20',
  purple: 'from-[#8b5cf6]/20 to-[#ec4899]/20',
  cyan: 'from-[#3b82f6]/20 to-[#22d3ee]/20',
  violet: 'from-[#8b5cf6]/20 to-[#3b82f6]/20',
}
