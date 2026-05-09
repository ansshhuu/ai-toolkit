import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.button
      onClick={handleCopy}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        display: 'flex', alignItems: 'center', gap: '6px',
        padding: '6px 12px', borderRadius: '8px',
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        color: copied ? '#a3e635' : '#71717a',
        fontSize: '12px', fontWeight: 500, cursor: 'pointer',
        transition: 'all 0.2s',
      }}
    >
      {copied ? (
        <>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6L5 9L10 3" stroke="#a3e635" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Copied!
        </>
      ) : (
        <>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <rect x="4" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
            <path d="M3 8H2C1.45 8 1 7.55 1 7V2C1 1.45 1.45 1 2 1H7C7.55 1 8 1.45 8 2V3" stroke="currentColor" strokeWidth="1.2" />
          </svg>
          Copy
        </>
      )}
    </motion.button>
  )
}

function SummaryResult({ data }) {
  return (
    <p style={{ color: '#d4d4d8', lineHeight: 1.7, fontSize: '15px', margin: 0 }}>
      {data.summary}
    </p>
  )
}

function KeywordsResult({ data }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      {data.keywords.map((kw, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0.82 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.04 }}
          style={{
            padding: '6px 14px', borderRadius: '8px',
            background: 'rgba(163,230,53,0.08)',
            border: '1px solid rgba(163,230,53,0.2)',
            color: '#a3e635', fontSize: '13px', fontWeight: 600,
          }}
        >
          {kw}
        </motion.span>
      ))}
    </div>
  )
}

function ClassifyResult({ data }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <div>
        <div style={{ fontSize: '11px', color: '#52525b', marginBottom: '4px', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600 }}>
          Category
        </div>
        <div style={{ fontSize: '28px', fontWeight: 800, color: '#fff', letterSpacing: '-1px', textTransform: 'capitalize' }}>
          {data.category}
        </div>
      </div>
    </div>
  )
}

function AnalyzeResult({ data }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <div style={{ fontSize: '11px', fontWeight: 700, color: '#a3e635', letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '10px' }}>
          Summary
        </div>
        <p style={{ color: '#d4d4d8', lineHeight: 1.7, fontSize: '14px', margin: 0 }}>{data.summary}</p>
      </div>
      <div>
        <div style={{ fontSize: '11px', fontWeight: 700, color: '#34d399', letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '10px' }}>
          Keywords
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {data.keywords.map((kw, i) => (
            <span
              key={i}
              style={{
                padding: '4px 10px', borderRadius: '6px',
                background: 'rgba(163,230,53,0.08)',
                border: '1px solid rgba(163,230,53,0.18)',
                color: '#a3e635', fontSize: '12px', fontWeight: 600,
              }}
            >
              {kw}
            </span>
          ))}
        </div>
      </div>
      <div>
        <div style={{ fontSize: '11px', fontWeight: 700, color: '#2dd4bf', letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: '10px' }}>
          Category
        </div>
        <span style={{
          padding: '6px 14px', borderRadius: '8px',
          background: 'rgba(45,212,191,0.08)',
          border: '1px solid rgba(45,212,191,0.2)',
          color: '#2dd4bf', fontSize: '13px', fontWeight: 700,
          textTransform: 'capitalize',
        }}>
          {data.category}
        </span>
      </div>
    </div>
  )
}

const resultComponents = {
  summarize: SummaryResult,
  keywords: KeywordsResult,
  classify: ClassifyResult,
  analyze: AnalyzeResult,
}

export default function ResultPanel({ result, task, error }) {
  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          padding: '20px 24px', borderRadius: '16px',
          background: 'rgba(239,68,68,0.06)',
          border: '1px solid rgba(239,68,68,0.2)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#f87171', fontWeight: 600, marginBottom: '6px' }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.5" />
            <path d="M9 5.5v4M9 12.5h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          Request failed
        </div>
        <p style={{ color: 'rgba(248,113,113,0.7)', fontSize: '13px', margin: 0, paddingLeft: '28px' }}>{error}</p>
      </motion.div>
    )
  }

  if (!result) return null

  const ResultComponent = resultComponents[task]
  const copyText = typeof result === 'object' ? JSON.stringify(result, null, 2) : String(result)

  return (
    <AnimatePresence>
      <motion.div
        key={JSON.stringify(result)}
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        style={{
          background: 'rgba(255,255,255,0.025)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: '20px',
          overflow: 'hidden',
        }}
      >
        {/* Panel header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '16px 24px',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#a3e635', display: 'inline-block', animation: 'pulse-glow 2s ease-in-out infinite' }} />
            <span style={{ fontSize: '13px', fontWeight: 700, color: '#fff', textTransform: 'capitalize' }}>
              {task} Result
            </span>
          </div>
          <CopyButton text={copyText} />
        </div>

        {/* Content */}
        <div style={{ padding: '24px' }}>
          <ResultComponent data={result} />
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
