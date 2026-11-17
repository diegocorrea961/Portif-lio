import { useEffect, useRef } from 'react'
import { reducedMotion } from './hooks.js'

// Rede de partículas que reage ao mouse. Fica desligada com "reduzir movimento".
export default function ParticleBg() {
  const ref = useRef(null)
  useEffect(() => {
    if (reducedMotion()) return
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const mouse = { x: -1e4, y: -1e4 }
    let w = 0, h = 0, dots = [], raf = 0, running = true, visible = true, color = '76,194,255'

    const readColor = () => {
      const hex = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim()
      const m = /^#([0-9a-f]{6})$/i.exec(hex)
      if (m) color = [0, 2, 4].map((i) => parseInt(m[1].slice(i, i + 2), 16)).join(',')
    }
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = canvas.clientWidth; h = canvas.clientHeight
      canvas.width = w * dpr; canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const n = Math.min(70, Math.round((w * h) / 16000))
      dots = Array.from({ length: n }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
      }))
    }
    const onMove = (e) => {
      const r = canvas.getBoundingClientRect()
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top
    }
    const onLeave = () => { mouse.x = mouse.y = -1e4 }

    const frame = () => {
      if (!running) return
      ctx.clearRect(0, 0, w, h)
      for (const d of dots) {
        d.x += d.vx; d.y += d.vy
        if (d.x < 0 || d.x > w) d.vx *= -1
        if (d.y < 0 || d.y > h) d.vy *= -1
        const dx = d.x - mouse.x, dy = d.y - mouse.y, dist = Math.hypot(dx, dy)
        if (dist < 110 && dist > 0) { d.x += (dx / dist) * 1.2; d.y += (dy / dist) * 1.2 }
      }
      for (let i = 0; i < dots.length; i++) {
        const a = dots[i]
        ctx.fillStyle = `rgba(${color},.7)`
        ctx.beginPath(); ctx.arc(a.x, a.y, 1.8, 0, 6.283); ctx.fill()
        for (let j = i + 1; j < dots.length; j++) {
          const b = dots[j], d = Math.hypot(a.x - b.x, a.y - b.y)
          if (d < 120) {
            ctx.strokeStyle = `rgba(${color},${0.28 * (1 - d / 120)})`
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(frame)
    }
    const start = () => { if (!raf && visible && !document.hidden) { running = true; raf = requestAnimationFrame(frame) } }
    const stop = () => { running = false; cancelAnimationFrame(raf); raf = 0 }

    readColor(); resize(); start()
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; visible ? start() : stop() })
    io.observe(canvas)
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const onVis = () => (document.hidden ? stop() : start())
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('visibilitychange', onVis)
    mq.addEventListener('change', readColor)
    return () => {
      stop(); io.disconnect()
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('visibilitychange', onVis)
      mq.removeEventListener('change', readColor)
    }
  }, [])
  return <canvas ref={ref} className="particles" aria-hidden="true" />
}
