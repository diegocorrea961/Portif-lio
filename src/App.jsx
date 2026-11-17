import { useState, useEffect } from 'react'
import { content } from './data/content.js'
import { config } from './data/config.js'
import { projects } from './data/projects.js'
import Icon from './Icons.jsx'

const SECTIONS = ['about', 'experience', 'skills', 'projects', 'education', 'contact']

function initialLang() {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'pt' || saved === 'en') return saved
  } catch {}
  return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

function ContactForm({ t }) {
  const [status, setStatus] = useState('idle')
  const submit = async (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    if (!config.formEndpoint) {
      const body = `${data.get('message')}\n\n${data.get('name')} <${data.get('email')}>`
      window.location.href = `mailto:${config.email}?subject=${encodeURIComponent('Contato via portfólio')}&body=${encodeURIComponent(body)}`
      return
    }
    setStatus('sending')
    try {
      const res = await fetch(config.formEndpoint, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
      if (!res.ok) throw new Error()
      setStatus('ok'); e.target.reset()
    } catch { setStatus('error') }
  }
  return (
    <form className="form" onSubmit={submit}>
      <label>{t.name}<input name="name" required /></label>
      <label>{t.email}<input name="email" type="email" required /></label>
      <label>{t.message}<textarea name="message" rows="5" required /></label>
      <button className="btn" disabled={status === 'sending'}>{status === 'sending' ? t.sending : t.send}</button>
      {status === 'ok' && <p className="ok" role="status">{t.ok}</p>}
      {status === 'error' && <p className="err" role="alert">{t.error} <a href={`mailto:${config.email}`}>{t.fallback}</a></p>}
    </form>
  )
}

export default function App() {
  const [lang, setLang] = useState(initialLang)
  const t = content[lang]
  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
    try { localStorage.setItem('lang', lang) } catch {}
  }, [lang])

  const socials = [
    ['GitHub', config.github, 'github'], ['LinkedIn', config.linkedin, 'linkedin'], ['Instagram', config.instagram, 'instagram'],
  ].filter(([, url]) => url)

  return (
    <>
      <header className="nav">
        <a className="brand" href="#top">DC</a>
        <nav>
          {SECTIONS.map((s) => <a key={s} href={`#${s}`}>{t.nav[s]}</a>)}
        </nav>
        <button className="lang" onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')} aria-label="Switch language">
          {lang === 'pt' ? 'EN' : 'PT'}
        </button>
      </header>

      <main id="top">
        <section className="hero" id="about">
          <div className="hero-text">
            <p className="eyebrow">{t.about.title}</p>
            <h1>{config.name}</h1>
            <p className="role">{t.role}</p>
            <p className="lead">{t.about.text}</p>
            <div className="row">
              <a className="btn" href="#contact">{t.about.cta}</a>
              {socials.map(([n, u]) => <a key={n} className="btn ghost" href={u} target="_blank" rel="noopener noreferrer">{n}</a>)}
            </div>
          </div>
          <div className="avatar">
            {config.photo ? <img src={config.photo} alt={config.name} /> : <span>DC</span>}
          </div>
        </section>

        <section id="experience">
          <h2>{t.experience.title}</h2>
          <ol className="timeline">
            {t.experience.items.map((i) => (
              <li key={i.role + i.period}>
                <div className="meta"><strong>{i.role}</strong><span>{i.company}</span><time>{i.period}</time></div>
                {i.bullets.length > 0 && <ul>{i.bullets.map((b) => <li key={b}>{b}</li>)}</ul>}
              </li>
            ))}
          </ol>
        </section>

        <section id="skills">
          <h2>{t.skills.title}</h2>
          <div className="cols">
            {[[t.skills.tech, t.skills.techItems], [t.skills.soft, t.skills.softItems], [t.skills.languages, t.skills.langItems]].map(([h, items]) => (
              <div key={h} className="card"><h3>{h}</h3><ul className="chips">{items.map((s) => <li key={s}>{s}</li>)}</ul></div>
            ))}
          </div>
        </section>

        <section id="projects">
          <h2>{t.projects.title}</h2>
          {projects.length === 0 ? (
            <div className="card soon">
              <h3>{t.projects.soon}</h3>
              <p>{t.projects.soonText}</p>
              <a className="btn ghost" href={config.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          ) : (
            <div className="cols">
              {projects.map((p) => (
                <article key={p.repo || p.title.en} className="card">
                  <h3>{p.title[lang]}</h3>
                  <p>{p.description[lang]}</p>
                  <ul className="chips">{p.tech.map((x) => <li key={x}>{x}</li>)}</ul>
                  <div className="row">
                    {p.repo && <a href={p.repo} target="_blank" rel="noopener noreferrer">{t.projects.repo}</a>}
                    {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer">{t.projects.demo}</a>}
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        <section id="education">
          <h2>{t.education.title}</h2>
          <div className="cols">
            {t.education.items.map((e) => (
              <div key={e.title} className="card"><h3>{e.title}</h3><p>{e.place}</p><p className="muted">{e.period} · {e.status}</p></div>
            ))}
          </div>
        </section>

        <section id="contact">
          <h2>{t.contact.title}</h2>
          <p>{t.contact.text}</p>
          <div className="contact-grid">
            <ContactForm t={t.contact} />
            <div className="card">
              <ul className="links">
                <li><a href={`mailto:${config.email}`}><Icon name="mail" />{config.email}</a></li>
                {socials.map(([n, u, i]) => <li key={n}><a href={u} target="_blank" rel="noopener noreferrer"><Icon name={i} />{n}</a></li>)}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer>© {new Date().getFullYear()} {config.name}. {t.footer}</footer>
    </>
  )
}
