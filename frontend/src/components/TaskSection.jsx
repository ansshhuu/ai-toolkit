import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { runTask } from '../api'
import ResultPanel from './ResultPanel'

const tasks = [
  { id: 'summarize', label: 'Summarize', desc: 'Condense to key points' },
  { id: 'keywords', label: 'Keywords', desc: 'Extract key terms' },
  { id: 'classify', label: 'Classify', desc: 'Categorize content' },
  { id: 'analyze', label: 'Full Analysis', desc: 'Complete breakdown' },
]

const MAX_CHARS = 5000

export default function TaskSection() {
  const [text, setText] = useState('')
  const [task, setTask] = useState('summarize')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const textareaRef = useRef(null)

  const handleSubmit = async () => {
    if (!text.trim() || loading) return
    setLoading(true)
    setResult(null)
    setError(null)
    try {
      const data = await runTask(task, text.trim())
      setResult(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') handleSubmit()
  }

  const charCount = text.length
  const isOverLimit = charCount > MAX_CHARS
  const canSubmit = text.trim().length > 0 && !loading && !isOverLimit
  const selectedTask = tasks.find(t => t.id === task)

  return (
    <section id="app" style={{ padding: '100px 24px 120px' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{ textAlign: 'center', marginBottom: '48px' }}
        >
          <span style={{ color: '#a3e635', fontSize: '12px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', display: 'block', marginBottom: '14px' }}>
            Try it now
          </span>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 900, letterSpacing: '-2px', color: '#fff', margin: '0 0 12px' }}>
            Analyze anything.
          </h2>
          <p style={{ color: '#52525b', fontSize: '16px', margin: 0 }}>
            Paste your text, choose a task, and hit run. <span style={{ color: '#3f3f46' }}>Ctrl+Enter to go fast.</span>
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {/* Textarea */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ position: 'relative' }}
          >
            <textarea
              ref={textareaRef}
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Paste your text here…"
              rows={9}
              style={{
                width: '100%',
                padding: '18px 20px',
                paddingBottom: '40px',
                borderRadius: '18px',
                background: 'rgba(255,255,255,0.025)',
                border: `1px solid ${isOverLimit ? 'rgba(239,68,68,0.4)' : 'rgba(255,255,255,0.07)'}`,
                color: '#e4e4e7',
                fontSize: '15px',
                lineHeight: 1.65,
                resize: 'vertical',
                outline: 'none',
                fontFamily: 'inherit',
                boxSizing: 'border-box',
                transition: 'border-color 0.2s, box-shadow 0.2s',
              }}
              onFocus={e => { e.target.style.borderColor = 'rgba(163,230,53,0.3)'; e.target.style.boxShadow = '0 0 0 1px rgba(163,230,53,0.08)' }}
              onBlur={e => { e.target.style.borderColor = isOverLimit ? 'rgba(239,68,68,0.4)' : 'rgba(255,255,255,0.07)'; e.target.style.boxShadow = 'none' }}
            />
            <div style={{
              position: 'absolute', bottom: '14px', right: '16px',
              fontSize: '11px', fontFamily: 'monospace',
              color: isOverLimit ? '#f87171' : '#3f3f46',
            }}>
              {charCount.toLocaleString()} / {MAX_CHARS.toLocaleString()}
            </div>
          </motion.div>

          {/* Task selector */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}
          >
            {tasks.map((t) => {
              const active = task === t.id
              return (
                <motion.button
                  key={t.id}
                  onClick={() => setTask(t.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    padding: '12px 10px',
                    borderRadius: '14px',
                    border: active ? '1px solid rgba(163,230,53,0.3)' : '1px solid rgba(255,255,255,0.06)',
                    background: active ? 'rgba(163,230,53,0.08)' : 'rgba(255,255,255,0.025)',
                    color: active ? '#a3e635' : '#71717a',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.2s',
                    fontFamily: 'inherit',
                  }}
                >
                  <div style={{ fontSize: '12px', fontWeight: 700 }}>{t.label}</div>
                  <div style={{ fontSize: '10px', opacity: 0.6, marginTop: '2px' }}>{t.desc}</div>
                </motion.button>
              )
            })}
          </motion.div>

          {/* Submit */}
          <motion.button
            onClick={handleSubmit}
            disabled={!canSubmit}
            whileHover={canSubmit ? { scale: 1.01 } : {}}
            whileTap={canSubmit ? { scale: 0.985 } : {}}
            style={{
              width: '100%',
              padding: '16px',
              borderRadius: '14px',
              border: 'none',
              background: canSubmit ? '#a3e635' : '#1c1c1c',
              color: canSubmit ? '#080808' : '#3f3f46',
              fontWeight: 800,
              fontSize: '16px',
              cursor: canSubmit ? 'pointer' : 'not-allowed',
              fontFamily: 'inherit',
              letterSpacing: '-0.3px',
              transition: 'all 0.25s',
              boxShadow: canSubmit ? '0 0 20px rgba(163,230,53,0.2)' : 'none',
            }}
          >
            <AnimatePresence mode="wait">
              {loading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
                >
                  <svg className="animate-spin" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="2" strokeOpacity="0.25" />
                    <path d="M9 2a7 7 0 0 1 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  Analyzing…
                </motion.div>
              ) : (
                <motion.span
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  Run {selectedTask?.label} →
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Result */}
          <ResultPanel result={result} task={task} error={error} />
        </div>
      </div>
    </section>
  )
}
