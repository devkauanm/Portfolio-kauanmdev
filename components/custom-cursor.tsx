'use client'

import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const textCursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (!fine || reducedMotion) return

    const dot = dotRef.current
    const ring = ringRef.current
    const textCursor = textCursorRef.current
    if (!dot || !ring || !textCursor) return

    dot.style.display = 'block'
    ring.style.display = 'block'
    document.body.classList.add('cursor-enabled')

    const onMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e
      dot.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`
      ring.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`
      textCursor.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`
    }

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const editing = !!target.closest('input, textarea, select, [contenteditable]')
      const hovering = !!target.closest(
        'a, button, input, textarea, select, [contenteditable], [data-cursor-hover]',
      )
      textCursor.style.display = editing ? 'block' : 'none'
      dot.style.display = editing ? 'none' : 'block'
      ring.style.display = editing ? 'none' : 'block'
      ring.classList.toggle('hover', hovering && !editing)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', onOver)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      document.body.classList.remove('cursor-enabled')
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={textCursorRef} className="cursor-text" aria-hidden="true" />
    </>
  )
}
