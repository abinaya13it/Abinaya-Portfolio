import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import HeroScene from '../three/HeroScene'

export default function Hero() {
  return <section className="hero section-wrap" id="home">
    <div className="hero-copy">
      <motion.div className="availability" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15 }}>
        <span className="pulse-dot" /> OPEN TO SOFTWARE DEVELOPMENT INTERNSHIPS
      </motion.div>
      <motion.p className="hero-kicker" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .3 }}>HELLO, I'M</motion.p>
      <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: .35 }}>
        Abinaya<br /><span>Hariharan.</span>
      </motion.h1>
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .6 }}>Aspiring Full Stack Developer</motion.h2>
      <motion.p className="hero-description" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .7 }}>
        I build thoughtful digital experiences and enjoy turning ideas into practical applications through code.
      </motion.p>
      <motion.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .85 }}>
        <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
        <a className="button button-ghost" href="#contact">Get in touch</a>
      </motion.div>
      <div className="hero-socials">
        <a href="https://github.com/abinaya13it" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/></a>
        <a href="https://www.linkedin.com/in/abinaya-h131006/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a>
        <a href="mailto:abinayahariharan13@gmail.com" aria-label="Email"><Mail size={18}/></a>
      </div>
    </div>
    <div className="hero-visual"><div className="visual-glow" /><HeroScene /><div className="orbit orbit-one" /><div className="orbit orbit-two" /></div>
    <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a>
    <div className="hero-side-label">PORTFOLIO — 2026</div>
  </section>
}
