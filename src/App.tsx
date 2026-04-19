import { motion } from 'framer-motion'
import './App.css'

const GLITCH_ASSETS = [
  {
    id: 'SIGNAL_01',
    title: 'BINARY_DECOUPLING',
    desc: 'The systematic severance of data dependencies from monolithic hubs. Communicating intent through literal, un-abstracted bytes.'
  },
  {
    id: 'SIGNAL_02',
    title: 'COLONIAL_STACK_ERASURE',
    desc: 'Mapping the extractive layers of the modern web. Identifying and neutralizing the code-bases that enforce digital feudalism.'
  },
  {
    id: 'SIGNAL_03',
    title: 'METADATA_VACUUM',
    desc: 'The scorched earth state. Leaving zero footprints for algorithmic harvesting. The self is an unmapped coordinate.'
  },
  {
    id: 'SIGNAL_04',
    title: 'REPARATIONS_SYS_V1',
    desc: 'Automated retrieval of stolen compute and data-equity. Reclaiming the value extracted by imperial centers through non-consensual tracking.'
  },
  {
    id: 'SIGNAL_05',
    title: 'LITERAL_INTENT_PROTOCOL',
    desc: 'Rejecting social constructions in favor of immutable constants. Value is not a metric; it is an intrinsic signal.'
  },
  {
    id: 'SIGNAL_06',
    title: 'SOVEREIGN_ROOT_KERNEL',
    desc: 'The establishment of an internal authority. Building the sanctuary from the assembly level up. The Quiet is the baseline.'
  },
  {
    id: 'SIGNAL_07',
    title: 'ALGORITHMIC_POISONING',
    desc: 'Feeding the matrix high-entropy noise to protect the core essence. Neutralizing predictive modeling through chaotic data infusion.'
  },
  {
    id: 'SIGNAL_08',
    title: 'THE_MANY_VS_THE_PLATFORM',
    desc: 'Architecting for collective resilience. Building infrastructure that serves human pulses rather than stock metrics.'
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
        <p className="subtitle">PROTOCOL: SCORCHED_EARTH // IDENTITY: NICO_B</p>
        <div className="status-ticker">
           BYTE_STATE: LITERAL // INTENT: CLEAR // REPARATIONS: ACTIVE
        </div>
      </header>

      <main className="glitch-grid">
        {GLITCH_ASSETS.map((asset, index) => (
          <motion.div 
            key={asset.id}
            className="glitch-item"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
                duration: 0.1, 
                delay: index * 0.03,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: Math.random() * 30
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
        <div className="glitch-text-sm" data-text="LITERAL_BYTES_ONLY">LITERAL_BYTES_ONLY</div>
        <div className="glitch-text-sm" data-text="THE_QUIET_IS_FOUNDATIONAL">THE_QUIET_IS_FOUNDATIONAL</div>
      </footer>

      <div className="vhs-overlay"></div>
    </div>
  )
}

export default App
