import { BriefcaseBusiness } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
export default function Experience() {
  return <section className="section-wrap section" id="experience">
    <SectionTitle index="05" eyebrow="EXPERIENCE" title="Ready for the next step." text="Currently seeking an opportunity to apply my skills in a professional development environment." />
    <div className="experience-panel glass-card"><div className="experience-icon"><BriefcaseBusiness /></div><div><span className="mini-label">CURRENT STATUS</span><h3>Fresher · Open to internships</h3><p>Interested in software development and full-stack development internship opportunities where I can learn from a team and contribute to real projects.</p></div><span className="status-pill"><i/> Available for opportunities</span></div>
  </section>
}
