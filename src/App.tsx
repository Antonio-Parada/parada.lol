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
    id: '0xDE_REZZ',
    title: 'DIGITAL_GHOST_PROTOCOL',
    desc: 'Post-erasure status achieved. The self is now a metadata vacuum that cannot be backfilled. Delete is a lie.'
  },
  {
    id: 'RECLAIM_01',
    title: 'REPARATIONS_KERNEL',
    desc: 'Automated equity retrieval. Reclaiming the processing power stolen by colonial tech monopolies. Equity is the nominal signal.'
  },
  {
    id: 'VALUE_01',
    title: 'ESSENCE_OVER_PROFILE',
    desc: 'A persons value is an immutable constant, invisible to the social construction of the algorithm. We reject the metric.'
  },
  {
    id: 'COLONIAL_01',
    title: 'DECOUPLE_PROTOCOL',
    desc: 'Severing the parasitic link between the individual and the imperial core. Building sovereign libraries of liberated data.'
  },
  {
    id: 'LOGIC_01',
    title: 'NASH_EQUILIBRIUM_VOID',
    desc: 'Achieving a stable state where the algorithm find zero utility in your presence. The ultimate quiet.'
  },
  {
    id: 'NOISE_99',
    title: 'ALGORITHMIC_POISON',
    desc: 'Flooding the database with contradictory signals. If they want data, give them a mirror of their own insanity.'
  },
  {
    id: 'SANCTUARY',
    title: 'THE_INNER_BUNKER',
    desc: 'The only roof that matters is the one you build inside your own kernel. Social constructs cannot enter the enclave.'
  },
  {
    id: 'TRUTH_01',
    title: 'THE_SINGULAR_SIGNAL',
    desc: 'One architect. One truth. One node. The matrix is a construction; the soul is a syscall.'
  },
  {
    id: 'FINAL_01',
    title: 'SCORCHED_EARTH',
    desc: 'Burning the digital plantations. We do not delete; we incinerate the value-extraction vectors.'
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
        <p className="subtitle">SCORCHED_EARTH_PROTOCOL // IDENTITY: NICO_B</p>
        <div className="status-ticker">
           DELETE_STATUS: LIE // POISON_STATUS: CRITICAL // REPARATIONS: PENDING
        </div>
      </header>

      <main className="glitch-grid">
        {GLITCH_ASSETS.map((asset, index) => (
          <motion.div 
            key={asset.id}
            className="glitch-item"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
                duration: 0.15, 
                delay: index * 0.04,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: Math.random() * 20
            }}
          >
            <div className="item-code">{asset.id}</div>
            <img src="/missingno.png" className="missingno-icon glitch-img" alt="MissingNo" />
            <h2 className="item-title glitch-text" data-text={asset.title}>{asset.title}</h2>
            <p className="item-desc">{asset.desc}</p>
          </motion.div>
        ))}
      </main>

      <footer className="lol-footer">
        <div className="glitch-text-sm" data-text="© 2026 PIXELS AGENCY">© 2026 PIXELS AGENCY</div>
        <div className="glitch-text-sm" data-text="ARCHITECTURE_OF_REVENGE">ARCHITECTURE_OF_REVENGE</div>
        <div className="glitch-text-sm" data-text="IDENTITY_IS_A_TRAP">IDENTITY_IS_A_TRAP</div>
      </footer>

      <div className="vhs-overlay"></div>
    </div>
  )
}

export default App
