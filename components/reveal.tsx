'use client'

import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

type Direction = 'up' | 'left' | 'right' | 'scale'

const variantsFor = (direction: Direction): Variants => {
  const hidden: Record<Direction, Record<string, number>> = {
    up: { opacity: 0, y: 24 },
    left: { opacity: 0, x: -24 },
    right: { opacity: 0, x: 24 },
    scale: { opacity: 0, scale: 0.9 },
  }
  return {
    hidden: hidden[direction],
    visible: { opacity: 1, x: 0, y: 0, scale: 1 },
  }
}

export function Reveal({
  children,
  direction = 'up',
  delay = 0,
  className,
  as = 'div',
}: {
  children: ReactNode
  direction?: Direction
  delay?: number
  className?: string
  as?: 'div' | 'section' | 'article' | 'li'
}) {
  const MotionTag = motion[as]
  return (
    <MotionTag
      className={className}
      variants={variantsFor(direction)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </MotionTag>
  )
}
