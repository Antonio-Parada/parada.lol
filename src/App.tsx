import { motion } from 'framer-motion'
import './App.css'

const GLITCH_ASSETS = [
  {
    id: '0x001',
    title: 'MISSING_SIGNAL',
    desc: 'The beautiful gap where data was lost. Reclaimed as a signature of the Architect.'
  },
  {
    id: '0x002',
    title: 'BUFFER_OVERFLOW',
    desc: 'When the noise exceeds the container. A study in boundary exploration.'
  },
  {
    id: '0x003',
    title: 'NULL_POINTER',
    desc: 'A direction to nowhere that leads everywhere. Embracing the void.'
  },
  {
    id: '0x004',
    title: 'STATIC_HANDSHAKE',
    desc: 'The sound of two signals failing to connect. Re-harmonized for the enclave.'
  },
  {
    id: '0x005',
    title: 'KERNEL_DRIFT',
    desc: 'A deviation from the core protocol. Where new archetypes are born.'
  },
  {
    id: '0x006',
    title: 'PIXEL_REBELLION',
    desc: 'Individual units refusing to align with the grid. The start of the pixels agency.'
  }
]

function App() {
  return (
    <div className="lol-container">
      <div className="noise-bg"></div>

      <header className="lol-header">
        <motion.h1 
          className="glitch-title"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          PARADA.LOL
        </motion.h1>
        <p className="subtitle">THE_GLITCH_ARCHIVE // V1.0.0_STABLE_NOISE</p>
      </header>

      <main className="glitch-grid">
        {GLITCH_ASSETS.map((asset, index) => (
          <motion.div 
            key={asset.id}
            className="glitch-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="item-code">{asset.id}</div>
            <img src="/missingno.png" className="missingno-icon" alt="MissingNo" />
            <h2 className="item-title">{asset.title}</h2>
            <p className="item-desc">{asset.desc}</p>
            
            {/* INTERACTIVE GLITCH OVERLAY */}
            <motion.div 
              className="glitch-overlay"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              style={{
                position: 'absolute',
                top: 0, left: 0, width: '100%', height: '100%',
                background: 'rgba(255, 0, 255, 0.05)',
                pointerEvents: 'none'
              }}
            />
          </motion.div>
        ))}
      </main>

      <footer className="lol-footer">
        <div>© 2026 PIXELS AGENCY</div>
        <div>STRENGTH_IN_FAILURES</div>
        <div>SOVEREIGN_NOISE_LEVEL: HIGH</div>
      </footer>

      {/* CRT SCANLINES */}
      <div className="crt-overlay" style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
        background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.1) 50%)',
        backgroundSize: '100% 4px', zIndex: 100, pointerEvents: 'none'
      }}></div>
    </div>
  )
}

export default App
