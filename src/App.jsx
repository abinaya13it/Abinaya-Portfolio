import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Education from './sections/Education'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Contact from './sections/Contact'

function Background() {
  return <div className="background-effects" aria-hidden="true"><div className="bg-glow glow-a"/><div className="bg-glow glow-b"/><div className="noise"/></div>
}
export default function App() {
  useEffect(() => {
    const reveal = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('in-view')
    }), { threshold: .08 })
    document.querySelectorAll('.section').forEach(el => reveal.observe(el))
    return () => reveal.disconnect()
  }, [])
  return <>
    <Background />
    <Navbar />
    <main><Hero /><About /><Education /><Projects /><Skills /><Experience /><Contact /></main>
    <footer className="footer">
      <div className="footer-container section-wrap">
        <a className="footer-brand" href="#home">A.</a>
        <p>Designed & built by <strong>Abinaya Hariharan</strong></p>
        <span>© 2026 · KEEP LEARNING, KEEP BUILDING.</span>
      </div>
    </footer>
    <motion.a className="back-top" href="#home" aria-label="Back to top" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}><ArrowUp size={18}/></motion.a>
  </>
}
