import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', paddingTop: '80px' }}>
      {/* Background orbs */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div
          className="animate-pulse-glow"
          style={{
            position: 'absolute', top: '20%', left: '15%',
            width: '500px', height: '500px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(163,230,53,0.10) 0%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
        <div
          className="animate-pulse-glow"
          style={{
            position: 'absolute', bottom: '25%', right: '15%',
            width: '420px', height: '420px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(52,211,153,0.07) 0%, transparent 70%)',
            filter: 'blur(60px)',
            animationDelay: '2.5s',
          }}
        />
        <div
          className="animate-pulse-glow"
          style={{
            position: 'absolute', top: '55%', left: '55%',
            width: '300px', height: '300px', borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(163,230,53,0.05) 0%, transparent 70%)',
            filter: 'blur(40px)',
            animationDelay: '1.2s',
          }}
        />
        {/* Grid overlay */}
        <div className="grid-bg" style={{ position: 'absolute', inset: 0 }} />
      </div>

      <div style={{ position: 'relative', zIndex: 10, maxWidth: '900px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '7px 16px', borderRadius: '999px',
            background: 'rgba(163,230,53,0.06)',
            border: '1px solid rgba(163,230,53,0.2)',
            color: '#a3e635', fontSize: '13px', fontWeight: 600,
            marginBottom: '32px',
          }}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#a3e635', display: 'inline-block', animation: 'pulse-glow 2s ease-in-out infinite' }} />
          Lightning-fast AI text analysis
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          style={{
            fontSize: 'clamp(52px, 9vw, 96px)',
            fontWeight: 900,
            letterSpacing: '-3px',
            lineHeight: 0.92,
            color: '#fff',
            margin: '0 0 24px',
          }}
        >
          Text Intelligence,
          <br />
          <span className="gradient-text text-glow">Reimagined.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: '20px', color: '#71717a', maxWidth: '560px',
            margin: '0 auto 40px', lineHeight: 1.65,
          }}
        >
          Summarize documents, extract keywords, classify content, and run full AI analysis — all in seconds.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '14px' }}
        >
          <motion.a
            href="#app"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="glow-lime-sm"
            style={{
              padding: '16px 32px', borderRadius: '14px',
              background: '#a3e635', color: '#080808',
              fontWeight: 800, fontSize: '17px', textDecoration: 'none',
              display: 'inline-block', letterSpacing: '-0.3px',
            }}
          >
            Start Analyzing →
          </motion.a>
          <motion.a
            href="#features"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="glass"
            style={{
              padding: '16px 32px', borderRadius: '14px',
              color: '#fff', fontWeight: 600, fontSize: '17px',
              textDecoration: 'none', display: 'inline-block',
            }}
          >
            View Features
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          style={{
            marginTop: '64px', display: 'flex', flexWrap: 'wrap',
            alignItems: 'center', justifyContent: 'center', gap: '48px',
          }}
        >
          {[
            { value: '4', label: 'AI Tasks' },
            { value: '<2s', label: 'Avg Response' },
            { value: 'LLM', label: 'Powered by' },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '26px', fontWeight: 800, color: '#fff', letterSpacing: '-1px', marginBottom: '2px' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '13px', color: '#52525b' }}>{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
          color: '#3f3f46', fontSize: '12px',
        }}
      >
        <span>Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          style={{ width: '1px', height: '28px', background: 'linear-gradient(to bottom, #3f3f46, transparent)' }}
        />
      </motion.div>
    </section>
  )
}
