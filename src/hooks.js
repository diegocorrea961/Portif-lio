import { useEffect, useState } from 'react'

export const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Efeito de digitação: escreve, pausa, apaga e passa para a próxima frase.
export function useTyped(phrases) {
  const [text, setText] = useState(reducedMotion() ? phrases[0] : '')
  useEffect(() => {
    if (reducedMotion()) { setText(phrases[0]); return }
    let i = 0, n = 0, deleting = false, timer
    const tick = () => {
      const full = phrases[i]
      n += deleting ? -1 : 1
      setText(full.slice(0, n))
      let delay = deleting ? 35 : 70
      if (!deleting && n === full.length) { deleting = true; delay = 1600 }
      else if (deleting && n === 0) { deleting = false; i = (i + 1) % phrases.length; delay = 350 }
      timer = setTimeout(tick, delay)
    }
    timer = setTimeout(tick, 400)
    return () => clearTimeout(timer)
  }, [phrases])
  return text
}

// Revela elementos .reveal ao entrar na tela e desenha a linha do tempo ao rolar.
export function useScrollEffects() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (reducedMotion() || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in')); return
    }
    document.documentElement.classList.add('js-anim')
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } })
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
    els.forEach((el) => io.observe(el))

    const tl = document.querySelector('.timeline')
    const onScroll = () => {
      if (!tl) return
      const r = tl.getBoundingClientRect()
      const p = (window.innerHeight * 0.7 - r.top) / r.height
      tl.style.setProperty('--p', Math.min(1, Math.max(0, p)).toFixed(3))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => { io.disconnect(); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll) }
  }, [])
}
