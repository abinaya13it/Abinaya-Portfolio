import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const links = [['About', '#about'], ['Education', '#education'], ['Projects', '#projects'], ['Skills', '#skills'], ['Contact', '#contact']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return <header className="navbar">
    <div className="nav-container section-wrap">
      <a className="brand" href="#home" onClick={() => setOpen(false)}><span className="brand-mark">A.</span><span>ABINAYA<span className="brand-muted"> / PORTFOLIO</span></span></a>
      <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <nav className={open ? 'nav-links nav-open' : 'nav-links'}>
        {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>Let's talk <ArrowUpRight size={15}/></a>
      </nav>
    </div>
  </header>
}
