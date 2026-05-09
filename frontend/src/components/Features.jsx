import { motion } from 'framer-motion'

const features = [
  {
    title: 'Summarize',
    tag: 'summarize',
    description: 'Condense long documents into clear, concise summaries. Get the key points without reading everything.',
    accentColor: '#a3e635',
    borderColor: 'rgba(163,230,53,0.15)',
    bgGradient: 'rgba(163,230,53,0.06)',
  },
  {
    title: 'Extract Keywords',
    tag: 'keywords',
    description: 'Pull out the most important terms and concepts from any text for SEO, tagging, or indexing.',
    accentColor: '#34d399',
    borderColor: 'rgba(52,211,153,0.15)',
    bgGradient: 'rgba(52,211,153,0.06)',
  },
  {
    title: 'Classify',
    tag: 'classify',
    description: 'Automatically categorize text into meaningful topics. Perfect for content organization at scale.',
    accentColor: '#2dd4bf',
    borderColor: 'rgba(45,212,191,0.15)',
    bgGradient: 'rgba(45,212,191,0.06)',
  },
  {
    title: 'Full Analysis',
    tag: 'analyze',
    description: 'Get everything at once — summary, keywords, and classification in a single powerful request.',
    accentColor: '#818cf8',
    borderColor: 'rgba(129,140,248,0.15)',
    bgGradient: 'rgba(129,140,248,0.06)',
  },
]

export default function Features() {
  return (
    <section id="features" style={{ padding: '120px 24px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <span style={{ color: '#a3e635', fontSize: '12px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>
            Capabilities
          </span>
          <h2 style={{ fontSize: 'clamp(36px, 5vw, 60px)', fontWeight: 900, letterSpacing: '-2px', color: '#fff', margin: '0 0 16px', lineHeight: 1.05 }}>
            Four powerful
            <br />
            <span style={{ color: '#3f3f46' }}>AI operations.</span>
          </h2>
          <p style={{ color: '#71717a', fontSize: '18px', maxWidth: '480px', margin: '0 auto', lineHeight: 1.6 }}>
            Everything you need to understand and process text at scale.
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
          {features.map((f, i) => (
            <motion.div
              key={f.tag}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              style={{
                padding: '28px',
                borderRadius: '20px',
                border: `1px solid ${f.borderColor}`,
                background: `radial-gradient(ellipse at top left, ${f.bgGradient} 0%, transparent 60%)`,
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: f.accentColor, marginBottom: '8px' }}>
                {f.tag}
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#fff', margin: '0 0 10px', letterSpacing: '-0.4px' }}>
                {f.title}
              </h3>
              <p style={{ color: '#71717a', fontSize: '14px', lineHeight: 1.65, margin: 0 }}>
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
