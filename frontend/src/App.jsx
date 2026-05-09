import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import TaskSection from './components/TaskSection'

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#080808', color: '#fafafa' }}>
      <Navbar />
      <Hero />
      <Features />
      <TaskSection />

      <footer style={{
        padding: '40px 24px',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        textAlign: 'center',
        color: '#3f3f46',
        fontSize: '13px',
      }}>
        Built with React + FastAPI
        <span style={{ margin: '0 12px', opacity: 0.4 }}>·</span>
        <span style={{ color: 'rgba(163,230,53,0.5)' }}>AIToolkit</span>
      </footer>
    </div>
  )
}
