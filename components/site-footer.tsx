import { Terminal } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { EMAIL, GITHUB_URL, LINKEDIN_URL, NAV_LINKS } from '@/lib/portfolio-data'

const SOCIALS = [
  { href: GITHUB_URL, label: 'GitHub', icon: GithubIcon },
  { href: LINKEDIN_URL, label: 'LinkedIn', icon: LinkedinIcon },
  { href: `mailto:${EMAIL}`, label: 'E-mail', icon: MailIcon },
]

function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative overflow-hidden border-t border-border py-12 sm:py-14">
      <div
        className="bg-grid pointer-events-none absolute inset-0 opacity-40"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent, black)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)',
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6 2xl:max-w-7xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-white glow-shadow">
                <Terminal className="h-4 w-4" />
              </span>
              <span className="font-mono">
                kauan<span className="text-primary-light">.</span>dev
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Transformo processos manuais em soluções inteligentes utilizando
              Python, JavaScript, APIs, IA Generativa e automações com n8n.
            </p>
          </div>

          <div>
            <p className="font-mono text-sm text-foreground">Navegação</p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-sm text-foreground">Conecte-se</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {SOCIALS.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel={
                      social.href.startsWith('mailto:')
                        ? undefined
                        : 'noopener noreferrer'
                    }
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-white/[0.03] text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 sm:mt-12">
          <p className="text-center text-sm text-muted-foreground">
            © {year} Kauan Martins Silva. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
