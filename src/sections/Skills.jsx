import { Code2 } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionTitle from '../components/SectionTitle'
import { skillGroups } from '../data'
export default function Skills() {
  return <section className="section-wrap section" id="skills">
    <SectionTitle index="04" eyebrow="TECHNICAL TOOLKIT" title="Tools I work with." text="A growing toolkit across programming, frontend, backend and data." />
    <div className="skills-grid">{skillGroups.map((group, i) => <motion.div className="skill-card glass-card" key={group.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * .08 }} viewport={{ once: true }}>
      <div className="skill-card-head"><Code2 size={18}/><h3>{group.title}</h3></div><div className="skill-pills">{group.items.map(item => <span key={item}>{item}</span>)}</div>
    </motion.div>)}</div>
    <p className="skill-disclaimer">Skills listed reflect technologies studied or used in projects; proficiency levels are intentionally not rated.</p>
  </section>
}
