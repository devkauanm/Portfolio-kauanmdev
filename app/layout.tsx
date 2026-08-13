import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { CustomCursor } from '@/components/custom-cursor'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kauan Martins Silva — Desenvolvedor de Automações',
  description:
    'Portfólio de Kauan Martins Silva — Desenvolvedor de Automações especializado em IA generativa, integrações de API e soluções low-code com n8n, Python e JavaScript.',
  generator: 'v0.app',
  keywords: [
    'automação',
    'IA generativa',
    'n8n',
    'integrações de API',
    'Python',
    'desenvolvedor',
    'low-code',
  ],
  authors: [{ name: 'Kauan Martins Silva' }],
  openGraph: {
    title: 'Kauan Martins Silva — Desenvolvedor de Automações',
    description:
      'Transformo processos manuais em soluções inteligentes com IA, APIs e automações.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b1120',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`dark ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-background antialiased">
        <CustomCursor />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
