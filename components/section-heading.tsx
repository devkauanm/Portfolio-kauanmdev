import { Reveal } from '@/components/reveal'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: {
  eyebrow: string
  title: string
  description?: string
  align?: 'center' | 'left'
}) {
  const isCenter = align === 'center'
  return (
    <Reveal
      className={
        isCenter ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl text-left'
      }
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-3 py-1.5 font-mono text-xs uppercase tracking-[0.1em] text-primary-light">
        <span className="h-1.5 w-1.5 rounded-full bg-primary-light" />
        {eyebrow}
      </span>
      <h2 className="mt-4 text-pretty text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 text-base leading-relaxed text-muted-foreground ${
            isCenter ? 'mx-auto' : ''
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
