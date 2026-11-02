import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Code2, Cpu, FileCode2, GitBranch, Layers, Sparkles, Terminal } from 'lucide-react'

export default function HeroScene() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [activeTab, setActiveTab] = useState('developer')

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: x * 12, y: -y * 12 })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <div
      className="code-mockup-wrapper"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-label="Interactive Full Stack Code Window Mockup"
    >
      {/* 3D Tilting IDE Window */}
      <div
        className="code-window"
        style={{
          transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
          transition: 'transform 0.15s ease-out'
        }}
      >
        {/* Window Chrome Header */}
        <div className="window-header">
          <div className="window-controls">
            <span className="win-btn win-close" />
            <span className="win-btn win-min" />
            <span className="win-btn win-max" />
          </div>

          <div className="window-tabs">
            <button
              type="button"
              className={`window-tab ${activeTab === 'developer' ? 'active' : ''}`}
              onClick={() => setActiveTab('developer')}
            >
              <Code2 size={13} className="tab-icon" />
              <span>Developer.tsx</span>
            </button>
            <button
              type="button"
              className={`window-tab ${activeTab === 'stack' ? 'active' : ''}`}
              onClick={() => setActiveTab('stack')}
            >
              <Cpu size={13} className="tab-icon" />
              <span>FullStack.json</span>
            </button>
            <button
              type="button"
              className={`window-tab ${activeTab === 'projects' ? 'active' : ''}`}
              onClick={() => setActiveTab('projects')}
            >
              <FileCode2 size={13} className="tab-icon" />
              <span>Projects.ai</span>
            </button>
          </div>

          <div className="window-meta">
            <span className="git-tag"><GitBranch size={11} /> main*</span>
            <span className="live-dot" title="Ready to build" />
          </div>
        </div>

        {/* Code Content Body */}
        <div className="code-editor-body">
          {activeTab === 'developer' && (
            <div className="code-lines">
              <div className="code-row"><span className="ln">01</span><span className="c-comment">// Abinaya Hariharan · Full Stack Developer</span></div>
              <div className="code-row"><span className="ln">02</span><span className="c-kw">const</span> <span className="c-var">engineer</span> = &#123;</div>
              <div className="code-row"><span className="ln">03</span>  <span className="c-prop">name:</span> <span className="c-str">"Abinaya Hariharan"</span>,</div>
              <div className="code-row"><span className="ln">04</span>  <span className="c-prop">role:</span> <span className="c-str">"Full Stack Developer"</span>,</div>
              <div className="code-row"><span className="ln">05</span>  <span className="c-prop">degree:</span> <span className="c-str">"B.Sc. IT (CGPA 9.5)"</span>,</div>
              <div className="code-row"><span className="ln">06</span>  <span className="c-prop">stack:</span> [</div>
              <div className="code-row"><span className="ln">07</span>    <span className="c-str">"React"</span>, <span className="c-str">"Node.js"</span>, <span className="c-str">"Express"</span>, <span className="c-str">"MongoDB"</span>, <span className="c-str">"Java"</span></div>
              <div className="code-row"><span className="ln">08</span>  ],</div>
              <div className="code-row"><span className="ln">09</span>  <span className="c-prop">status:</span> <span className="c-status">"Open to Internships"</span>,</div>
              <div className="code-row"><span className="ln">10</span>  <span className="c-prop">shippedProjects:</span> <span className="c-num">3</span>,</div>
              <div className="code-row"><span className="ln">11</span>  <span className="c-prop">readyToBuild:</span> <span className="c-kw">true</span></div>
              <div className="code-row"><span className="ln">12</span>&#125;;</div>
              <div className="code-row"><span className="ln">13</span><span className="c-kw">export default</span> <span className="c-var">engineer</span>;</div>
            </div>
          )}

          {activeTab === 'stack' && (
            <div className="code-lines">
              <div className="code-row"><span className="ln">01</span><span className="c-comment">&#47;&#47; Core Stack Architecture</span></div>
              <div className="code-row"><span className="ln">02</span>&#123;</div>
              <div className="code-row"><span className="ln">03</span>  <span className="c-prop">"frontend":</span> [<span className="c-str">"React.js"</span>, <span className="c-str">"JavaScript"</span>, <span className="c-str">"HTML5/CSS3"</span>],</div>
              <div className="code-row"><span className="ln">04</span>  <span className="c-prop">"backend":</span> [<span className="c-str">"Node.js"</span>, <span className="c-str">"Express.js"</span>, <span className="c-str">"Java"</span>, <span className="c-str">"Spring Boot"</span>],</div>
              <div className="code-row"><span className="ln">05</span>  <span className="c-prop">"databases":</span> [<span className="c-str">"MongoDB"</span>, <span className="c-str">"MySQL"</span>],</div>
              <div className="code-row"><span className="ln">06</span>  <span className="c-prop">"versionControl":</span> <span className="c-str">"Git / GitHub"</span>,</div>
              <div className="code-row"><span className="ln">07</span>  <span className="c-prop">"aiIntegration":</span> <span className="c-str">"Gemini API"</span></div>
              <div className="code-row"><span className="ln">08</span>&#125;</div>
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="code-lines">
              <div className="code-row"><span className="ln">01</span><span className="c-comment">&#47;&#47; Key Featured Deliverables</span></div>
              <div className="code-row"><span className="ln">02</span><span className="c-kw">const</span> <span className="c-var">featuredProjects</span> = [</div>
              <div className="code-row"><span className="ln">03</span>  &#123; <span className="c-prop">title:</span> <span className="c-str">"HealthGuard AI"</span>, <span className="c-prop">tech:</span> <span className="c-str">"React + Node + Gemini"</span> &#125;,</div>
              <div className="code-row"><span className="ln">04</span>  &#123; <span className="c-prop">title:</span> <span className="c-str">"TaskFlow"</span>, <span className="c-prop">tech:</span> <span className="c-str">"MERN Stack"</span> &#125;,</div>
              <div className="code-row"><span className="ln">05</span>  &#123; <span className="c-prop">title:</span> <span className="c-str">"Banking System"</span>, <span className="c-prop">tech:</span> <span className="c-str">"Java + Servlets + MySQL"</span> &#125;</div>
              <div className="code-row"><span className="ln">06</span>];</div>
            </div>
          )}
        </div>

        {/* Integrated Terminal Footer */}
        <div className="terminal-panel">
          <div className="terminal-bar">
            <span className="term-title"><Terminal size={12} /> BASH · PORTFOLIO-SERVER</span>
            <span className="term-status"><CheckCircle2 size={12} /> ALL SYSTEMS OPERATIONAL</span>
          </div>
          <div className="terminal-log">
            <span className="term-prompt">$</span> npm run build:success
            <span className="term-output">✓ Ready in 0.38s · 3 full-stack projects live (HTTP 200)</span>
          </div>
        </div>
      </div>

      {/* Floating Spatial Badge 1 - Top Right */}
      <motion.div
        className="floating-card card-top"
        initial={{ y: 0 }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="card-badge-icon"><Layers size={15} /></div>
        <div>
          <div className="badge-title">Full Stack Stack</div>
          <div className="badge-sub">React · Node · Express · Mongo</div>
        </div>
      </motion.div>

      {/* Floating Spatial Badge 2 - Bottom Left */}
      <motion.div
        className="floating-card card-bottom-left"
        initial={{ y: 0 }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        <span className="pulse-dot" />
        <div>
          <div className="badge-title">9.5 CGPA</div>
          <div className="badge-sub">B.Sc. IT Final Year</div>
        </div>
      </motion.div>

      {/* Floating Spatial Badge 3 - Bottom Right */}
      <motion.div
        className="floating-card card-bottom-right"
        initial={{ y: 0 }}
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <div className="card-badge-icon accent-green"><Sparkles size={14} /></div>
        <div>
          <div className="badge-title">3 Projects Shipped</div>
          <div className="badge-sub">Full Stack & AI Ready</div>
        </div>
      </motion.div>
    </div>
  )
}
