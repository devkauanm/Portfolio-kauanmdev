'use client'

import { useState } from 'react'
import { AlertCircle, CheckCircle2, Loader2, Mail, Send } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from '@/lib/portfolio-data'

const SOCIALS = [
  { href: GITHUB_URL, label: 'GitHub', icon: GithubIcon },
  { href: LINKEDIN_URL, label: 'LinkedIn', icon: LinkedinIcon },
]

const WEB3FORMS_ACCESS_KEY = '81c150af-7395-4c0a-91b2-d583f67ca290'

type Status = 'idle' | 'loading' | 'success' | 'error'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const name = (form.elements.namedItem('name') as HTMLInputElement).value
    const email = (form.elements.namedItem('email') as HTMLInputElement).value
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement)
      .value

    setStatus('loading')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Contato pelo portfólio — ${name || 'novo lead'}`,
          from_name: name,
          name,
          email,
          message,
        }),
      })
      const result = await res.json()

      if (result.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-20 sm:py-28">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 50% 0%, rgba(37,99,235,0.15), transparent 60%)',
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 2xl:max-w-7xl">
        <SectionHeading
          eyebrow="Contato"
          title="Vamos automatizar algo juntos?"
          description="Conte um pouco sobre o processo que você quer otimizar — respondo rápido pelo e-mail ou pelas redes."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:mt-14 lg:grid-cols-2">
          <Reveal direction="left" className="space-y-4">
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/[0.04] text-primary-light">
                <Mail className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  E-mail
                </p>
                <p className="mt-0.5 truncate font-medium">{EMAIL}</p>
              </div>
            </a>

            <div className="flex flex-wrap gap-3 pt-2">
              {SOCIALS.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    <Icon className="h-4 w-4" />
                    {social.label}
                  </a>
                )
              })}
            </div>
          </Reveal>

          <Reveal
            direction="right"
            as="div"
            className="rounded-2xl border border-border bg-card p-5 sm:p-7"
          >
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="cf-name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Nome
                  </label>
                  <input
                    id="cf-name"
                    name="name"
                    required
                    placeholder="Seu nome"
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>
                <div>
                  <label
                    htmlFor="cf-email"
                    className="mb-2 block text-sm font-medium"
                  >
                    E-mail
                  </label>
                  <input
                    id="cf-email"
                    name="email"
                    type="email"
                    required
                    placeholder="voce@empresa.com"
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="cf-message"
                  className="mb-2 block text-sm font-medium"
                >
                  Mensagem
                </label>
                <textarea
                  id="cf-message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Conte sobre o processo que você quer automatizar..."
                  className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                data-cursor-hover
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-accent px-6 py-3.5 text-sm font-medium text-white transition-transform hover:scale-[1.02] glow-shadow disabled:opacity-70 disabled:hover:scale-100"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Mensagem enviada!
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Enviar mensagem
                  </>
                )}
              </button>

              {status === 'success' ? (
                <p className="flex items-center gap-2 text-sm text-emerald-400">
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  Obrigado pelo contato! Responderei em breve.
                </p>
              ) : null}
              {status === 'error' ? (
                <p className="flex items-center gap-2 text-sm text-red-400">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  Algo deu errado. Tente novamente ou me chame por e-mail.
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
