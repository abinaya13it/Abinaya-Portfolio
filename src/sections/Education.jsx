import { GraduationCap, Award } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
export default function Education() {
  return <section className="section-wrap section" id="education">
    <SectionTitle index="02" eyebrow="EDUCATION & CREDENTIALS" title="Building my foundation." text="Academic learning and certifications that support my development journey." />
    <div className="education-grid">
      <article className="education-card glass-card">
        <div className="card-icon"><GraduationCap /></div><span className="mini-label">EDUCATION</span>
        <h3>Bachelor of Science</h3><p className="education-speciality">Information Technology</p>
        <p>Vivek College of Commerce</p>
        <div className="education-meta"><span>Final year</span><span className="cgpa">9.5 CGPA</span></div>
      </article>
      <article className="education-card glass-card certification-card">
        <div className="card-icon"><Award /></div><span className="mini-label">CERTIFICATIONS</span>
        <div className="cert-item"><h3>MBTB Examinations</h3><p>Government of Maharashtra — C, C++, Java and Python.</p></div>
        <div className="cert-divider" />
        <div className="cert-item"><h3>30-Day Full Stack Development Challenge</h3><p>NoviTechs</p></div>
        <p className="small-note">Certificate images or credential links can be added when supplied.</p>
      </article>
    </div>
  </section>
}
