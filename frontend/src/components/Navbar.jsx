import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s',
        ...(scrolled
          ? {
              background: 'rgba(8,8,8,0.85)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
              paddingTop: '12px',
              paddingBottom: '12px',
            }
          : { paddingTop: '20px', paddingBottom: '20px' }),
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <div>
          <span style={{ fontWeight: 800, fontSize: '18px', letterSpacing: '-0.5px', color: '#fff' }}>
            AI<span style={{ color: '#a3e635' }}>Toolkit</span>
          </span>
        </div>

        {/* Nav links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {[
            { label: 'Features', href: '#features' },
            { label: 'How It Works', href: '#app' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: '#71717a',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: 500,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.target.style.color = '#fff')}
              onMouseLeave={e => (e.target.style.color = '#71717a')}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <motion.a
          href="#app"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          style={{
            padding: '9px 18px',
            borderRadius: '10px',
            background: '#a3e635',
            color: '#080808',
            fontWeight: 700,
            fontSize: '14px',
            textDecoration: 'none',
            display: 'inline-block',
          }}
        >
          Try Free →
        </motion.a>
      </div>
    </motion.nav>
  )
}
