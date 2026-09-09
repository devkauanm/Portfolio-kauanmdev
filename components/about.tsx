import { Reveal } from '@/components/reveal'
import { TIMELINE } from '@/lib/portfolio-data'

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 2xl:max-w-7xl">
        <Reveal className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-3 py-1.5 font-mono text-xs uppercase tracking-[0.1em] text-primary-light">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-light" />
            Sobre mim
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Automação com propósito, código com precisão
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:mt-14 sm:gap-14 lg:grid-cols-2">
          <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Sou estudante de{' '}
              <strong className="font-medium text-foreground">
                Ciência da Computação
              </strong>{' '}
              e{' '}
              <strong className="font-medium text-foreground">
                Desenvolvedor de Automações
              </strong>{' '}
              na Agência MADA.
            </p>
            <p>
              Tenho experiência desenvolvendo soluções que automatizam processos,
              integram APIs e utilizam Inteligência Artificial para aumentar
              produtividade. Sempre com foco em resultado real para quem usa.
            </p>
            <p>
              Minha atuação envolve desenvolvimento com{' '}
              <strong className="font-medium text-foreground">
                Python, JavaScript, SQL, HTML/CSS, n8n
              </strong>{' '}
              e integração entre diversos sistemas, unindo low-code e código sob
              medida para entregar rápido sem abrir mão de qualidade.
            </p>
          </Reveal>

          <Reveal direction="right" className="relative">
            <div className="absolute bottom-4 left-[7px] top-2 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
            <ol className="space-y-10">
              {TIMELINE.map((entry) => (
                <li key={entry.year} className="relative pl-8">
                  <span className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-background">
                    <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-primary to-accent glow-shadow" />
                  </span>
                  <div className="font-mono text-xs uppercase tracking-[0.1em] text-primary-light">
                    {entry.year}
                  </div>
                  <h3 className="mt-1.5 text-base font-semibold">{entry.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {entry.desc}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
