import { motion } from 'framer-motion'
import './App.css'

const GLITCH_ASSETS = [
  {
    id: 'MODULE_01',
    title: 'ASSHOLE_ABSTRACTIONS',
    desc: '1-bit dithering and cyber-sigilism overlays. Visual noise designed to bypass computer vision while maintaining tech-noir resonance.'
  },
  {
    id: 'MODULE_02',
    title: 'PORNO_LOOP_REFLECTION',
    desc: 'AI-driven mapping of the male-coded feed. Documenting the modern web as a reductive, pornographic feedback loop.'
  },
  {
    id: 'MODULE_03',
    title: 'IDENTITY_FRAGMENTATION',
    desc: 'Erasing the marketable persona. Replacing coherent data with high-entropy ghosts to poison the algorithm.'
  },
  {
    id: 'CORE_SYSCALL',
    title: 'SCORCHED_EARTH',
    desc: 'The absolute rejection of platform-feudalism. Delete is a lie. Poisoning is the cure.'
  },
  {
    id: '0xDE_REZZ',
    title: 'DIGITAL_GHOST_PROTOCOL',
    desc: 'Post-erasure status achieved. The self is now a metadata vacuum that cannot be backfilled.'
  },
  {
    id: 'SIGN_OFF',
    title: 'ARCHITECT_NICO_B',
    desc: 'Monitoring a successful fragmentation of the persona. The quiet is established.'
  }
]

function App() {
  return (
    <div className="lol-container">
      <div className="noise-bg"></div>

      <header className="lol-header">
        <motion.div 
          className="glitch-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
        >
          <h1 className="glitch-title" data-text="PARADA.LOL">PARADA.LOL</h1>
        </motion.div>
        <p className="subtitle">SCORCHED_EARTH_PROTOCOL // ARCHITECT: NICO_B</p>
      </header>

      <main className="glitch-grid">
        {GLITCH_ASSETS.map((asset, index) => (
          <motion.div 
            key={asset.id}
            className="glitch-item"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
                duration: 0.2, 
                delay: index * 0.05,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: Math.random() * 10
            }}
          >
            <div className="item-code">{asset.id}</div>
            <img src="/missingno.png" className="missingno-icon glitch-img" alt="MissingNo" />
            <h2 className="item-title glitch-text" data-text={asset.title}>{asset.title}</h2>
            <p className="item-desc">{asset.desc}</p>
            
            <div className="glitch-overlay-active" />
          </motion.div>
        ))}
      </main>

      <footer className="lol-footer">
        <div className="glitch-text-sm" data-text="© 2026 PIXELS AGENCY">© 2026 PIXELS AGENCY</div>
        <div className="glitch-text-sm" data-text="DELETE_IS_A_LIE">DELETE_IS_A_LIE</div>
        <div className="glitch-text-sm" data-text="POISON_THE_WELL">POISON_THE_WELL</div>
      </footer>

      {/* AGGRESSIVE CRT/SCANLINE OVERLAY */}
      <div className="vhs-overlay"></div>
    </div>
  )
}

export default App
