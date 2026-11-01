import { motion } from 'framer-motion'
import { Code2, Layers3, Rocket } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'

const traits = [
  { icon: Code2, title: 'Strong foundations', text: 'Programming fundamentals across C, C++, Python, Java and JavaScript.' },
  { icon: Layers3, title: 'Full-stack curiosity', text: 'Learning to connect responsive interfaces, backend services and databases.' },
  { icon: Rocket, title: 'Growth mindset', text: 'Building projects, learning through implementation and seeking internship experience.' }
]
export default function About() {
  return <section className="section-wrap section" id="about">
    <SectionTitle index="01" eyebrow="ABOUT ME" title="Curiosity, meet code." text="A little about the person behind the projects." />
    <div className="about-layout">
      <motion.div className="about-copy glass-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="quote-mark">“</div>
        <p className="about-lead">I'm <strong>Abinaya Hariharan</strong>, a final-year B.Sc. Information Technology student at Vivek College of Commerce with a CGPA of <strong>9.5</strong>.</p>
        <p>I'm interested in full-stack development and enjoy learning how software works from the user interface through to the backend. I've completed projects using Java and the MERN stack, and I'm currently looking for an opportunity to contribute, learn and grow as a developer.</p>
        <div className="about-signature">ABINAYA HARIHARAN <span>— DEVELOPER IN PROGRESS</span></div>
      </motion.div>
      <div className="trait-list">{traits.map(({icon: Icon, title, text}, i) => <motion.div className="trait" key={title} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * .1 }} viewport={{ once: true }}>
        <div className="trait-icon"><Icon size={20}/></div><div><h3>{title}</h3><p>{text}</p></div>
      </motion.div>)}</div>
    </div>
  </section>
}
