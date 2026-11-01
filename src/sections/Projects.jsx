import { ArrowUpRight, Github, ExternalLink, Layers } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import { projects } from '../data'

const symbols = ['✳', '◈', '⌘']
export default function Projects() {
  return <section className="section-wrap section" id="projects">
    <SectionTitle index="03" eyebrow="SELECTED WORK" title="Projects in progress." text="A selection of academic and personal projects. Details and links will be added as verified materials become available." />
    <div className="project-grid">{projects.map((project, i) => <motion.article className="project-card glass-card" key={project.name} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * .12 }} viewport={{ once: true }}>
      <div className={`project-art art-${i+1}`}><span className="project-number">{project.number} / PROJECT</span><div className="project-symbol">{symbols[i]}</div><div className="art-grid" /></div>
      <div className="project-content">
        <div className="project-category">{project.category}</div><h3>{project.name}</h3><p>{project.description}</p>
        <div className="project-role"><Layers size={14}/>{project.role}</div>
        <div className="tag-list">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
        <div className="project-links"><span className="pending-link">{project.note}</span></div>
      </div>
    </motion.article>)}</div>
  </section>
}
