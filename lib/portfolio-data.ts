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
export const LINKEDIN_URL = 'https://www.linkedin.com/in/kauan-martins-6482b62a1'

export const TECH_STACK: { name: string; iconKey: TechIconKey }[] = [
  { name: 'Python', iconKey: 'python' },
  { name: 'n8n', iconKey: 'n8n' },
  { name: 'Java', iconKey: 'java' },
  { name: 'JavaScript', iconKey: 'javascript' },
  { name: 'APIs / Webhooks', iconKey: 'webhooks' },
  { name: 'PostgreSQL', iconKey: 'postgresql' },
  { name: 'Docker', iconKey: 'docker' },
  { name: 'GitHub', iconKey: 'github' },
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
  banner: { src: string; alt: string }
  media: ProjectMedia | ProjectMedia[]
  demoUrl?: string
  repoUrl?: string
}

export const PROJECTS: Project[] = [
  {
    id: 'whatsapp-ai-agent',
    title: 'Agente de IA para WhatsApp',
    desc: 'Agente inteligente integrado ao WhatsApp utilizando IA, DeepRAG, OpenAI, WhatsApp API e Supabase para atendimento e qualificação de leads em tempo real.',
    architecture:
      'A arquitetura segue um pipeline event-driven: mensagens chegam via WhatsApp API (webhook) e são enfileiradas no n8n. O fluxo consulta embeddings no Supabase (DeepRAG), monta o contexto e envia para a OpenAI. Respostas são validadas, persistidas e devolvidas ao WhatsApp com logs de conversa e métricas de qualificação de leads.',
    tech: ['Python', 'n8n', 'OpenAI', 'Supabase', 'Webhook'],
    tone: 'blue',
    banner: {
      src: '/banner-agente-ia.png',
      alt: 'Banner do agente de IA para WhatsApp',
    },
    media: [
      {
        type: 'image',
        src: '/agente-ia-part1.png',
        alt: 'Agente de IA integrado ao WhatsApp - etapa 1',
      },
      {
        type: 'image',
        src: '/agente-ia-part2.png',
        alt: 'Agente de IA integrado ao WhatsApp - etapa 2',
      },
      {
        type: 'image',
        src: '/agente-ia-part3.png',
        alt: 'Agente de IA integrado ao WhatsApp - etapa 3',
      },
    ],
    repoUrl: 'https://github.com/devkauanm/sdr-agent-ai',
  },
  {
    id: 'commercial-automation',
    title: 'Sistema de Automação Comercial',
    desc: 'Automação para captura de dados de compras, integração com CRM, disparo inteligente de mensagens e gerenciamento completo do funil de clientes.',
    architecture:
      'Eventos de compra disparam webhooks para o n8n, que normaliza payloads, enriquece dados e sincroniza com o CRM via REST API. Regras de negócio definem etapas do funil, disparos condicionais e follow-ups automáticos. PostgreSQL armazena histórico de interações e dashboards consomem views materializadas para acompanhamento comercial.',
    tech: ['n8n', 'CRM', 'APIs', 'Automação'],
    tone: 'purple',
    banner: {
      src: '/banner-Sistema-automacao-comercial.png',
      alt: 'Banner do sistema de automação comercial',
    },
    media: {
      type: 'image',
      src: '/Sistema-automacao-comercial.png',
      alt: 'Sistema de automação comercial',
    },
  },
  {
    id: 'admin-dashboard',
    title: 'Dashboard Administrativo',
    desc: 'Dashboard para acompanhamento de métricas, indicadores e gestão operacional com visualização de dados em tempo real.',
    architecture:
      'Frontend em Next.js com React Server Components para páginas estáticas e client components para gráficos interativos. API routes consultam PostgreSQL com queries otimizadas; autenticação via Supabase Auth. Tailwind CSS garante UI responsiva; dados críticos são cacheados e invalidados via revalidação sob demanda.',
    tech: ['React', 'Next.js', 'SQL', 'Dashboards'],
    tone: 'cyan',
    banner: {
      src: '/banner-dashboard.png',
      alt: 'Banner do dashboard administrativo',
    },
    media: [
      {
        type: 'image',
        src: '/dashboard-visao-geral.png',
        alt: 'Visão geral do painel de prospecção',
      },
      {
        type: 'image',
        src: '/dashboard-custos.png',
        alt: 'Custos e indicadores da operação',
      },
      {
        type: 'image',
        src: '/dashboard-captacao.png',
        alt: 'Máquina de captação de leads',
      },
      {
        type: 'image',
        src: '/dashboard-mensagens.png',
        alt: 'Performance de mensagens',
      },
    ],
  },
  {
    id: 'api-integrations',
    title: 'Automação de Prospecção BDR',
    desc: 'Operação automatizada de BDR para buscar, enriquecer e qualificar leads, gerar mensagens comerciais com IA e iniciar contatos personalizados em escala.',
    architecture:
      'O fluxo é orquestrado no n8n a partir de agendamentos e dados do Google Sheets. Leads são filtrados, processados em lotes e enriquecidos por buscas na web e informações do Instagram. A OpenAI gera mensagens de abordagem personalizadas; o envio acontece por WhatsApp e Chatwoot, enquanto Supabase/PostgreSQL registra conversas, contatos e status no CRM. Tratamentos de erro, limites e esperas controlam a operação para manter o processo confiável.',
    tech: ['n8n', 'OpenAI', 'Google Sheets', 'WhatsApp', 'Chatwoot', 'Supabase', 'PostgreSQL', 'JavaScript'],
    tone: 'violet',
    banner: {
      src: '/banner-bdr.png',
      alt: 'Banner da automação de prospecção BDR',
    },
    media: [
      {
        type: 'image',
        src: '/bdr-part1.png',
        alt: 'Fluxo de automação BDR para busca e qualificação de leads',
      },
      {
        type: 'image',
        src: '/bdr-part2.png',
        alt: 'Fluxo BDR para geração de mensagens comerciais com IA',
      },
      {
        type: 'image',
        src: '/bdr-part3.png',
        alt: 'Fluxo BDR para envio de mensagens e atualização do CRM',
      },
    ],
    repoUrl: 'https://github.com/devkauanm/bdr-agent-ai',
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
    title: 'Jovem Aprendiz Administrativo — EFD, Diadema',
    desc: 'Atuação com clientes internacionais em inglês e espanhol, acompanhamento de pedidos para o mercado LATAM e gestão de devoluções, garantindo o fluxo operacional e a resolução de pendências. Também trabalhei com emissão e alteração de pedidos no sistema TOTVS Protheus.',
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
