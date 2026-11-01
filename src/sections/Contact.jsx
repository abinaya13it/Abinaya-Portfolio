import { ArrowUpRight, Github, Linkedin, Mail, Send } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
export default function Contact() {
  return <section className="section-wrap section contact-section" id="contact">
    <SectionTitle index="06" eyebrow="GET IN TOUCH" title="Let's build something." text="Have an internship opportunity, project idea or a reason to connect? I'd be happy to hear from you." />
    <div className="contact-panel glass-card">
      <div><span className="mini-label">HAVE A ROLE OR IDEA IN MIND?</span><h3>Let's start a conversation.</h3><a className="email-link" href="mailto:abinayahariharan13@gmail.com">abinayahariharan13@gmail.com <ArrowUpRight size={18}/></a></div>
      <a className="button button-primary contact-button" href="mailto:abinayahariharan13@gmail.com"><Send size={16}/> Send an email</a>
    </div>
    <div className="social-row">
      <a href="https://github.com/abinaya13it" target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ArrowUpRight size={14}/></a>
      <a href="https://www.linkedin.com/in/abinaya-h131006/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={14}/></a>
      <a href="mailto:abinayahariharan13@gmail.com"><Mail size={17}/> Email <ArrowUpRight size={14}/></a>
    </div>
  </section>
}
