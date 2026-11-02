import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls, Sparkles } from '@react-three/drei'
import * as THREE from 'three'
import { useMemo, useRef } from 'react'

function createCodeCanvas() {
  const canvas = document.createElement('canvas')
  canvas.width = 1024
  canvas.height = 640
  const ctx = canvas.getContext('2d')
  if (!ctx) return canvas

  // Editor background
  ctx.fillStyle = '#08101d'
  ctx.fillRect(0, 0, 1024, 640)

  // Window titlebar
  ctx.fillStyle = '#050a14'
  ctx.fillRect(0, 0, 1024, 52)

  // macOS window control dots
  const dots = [
    { x: 32, color: '#ff5f56' },
    { x: 54, color: '#ffbd2e' },
    { x: 76, color: '#27c93f' }
  ]
  dots.forEach(({ x, color }) => {
    ctx.beginPath()
    ctx.arc(x, 26, 7, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
  })

  // Tab
  ctx.fillStyle = '#0c182b'
  ctx.fillRect(115, 8, 175, 44)
  ctx.strokeStyle = '#59ddf5'
  ctx.lineWidth = 1.5
  ctx.strokeRect(115, 8, 175, 44)
  ctx.fillStyle = '#59ddf5'
  ctx.font = 'bold 15px "DM Mono", monospace'
  ctx.fillText('⚡ Developer.jsx', 135, 34)

  // Path breadcrumb
  ctx.fillStyle = '#4a688b'
  ctx.font = '14px "DM Mono", monospace'
  ctx.fillText('portfolio > src > Abinaya.js', 320, 34)

  // Code lines
  const lines = [
    { num: '1', tokens: [{ text: 'const ', color: '#ff7b72' }, { text: 'developer ', color: '#79c0ff' }, { text: '= {', color: '#e6edf3' }] },
    { num: '2', tokens: [{ text: '  name: ', color: '#d2a8ff' }, { text: '"Abinaya Hariharan"', color: '#a5d6ff' }, { text: ',', color: '#e6edf3' }] },
    { num: '3', tokens: [{ text: '  role: ', color: '#d2a8ff' }, { text: '"Full Stack Developer"', color: '#a5d6ff' }, { text: ',', color: '#e6edf3' }] },
    { num: '4', tokens: [{ text: '  education: ', color: '#d2a8ff' }, { text: '"B.Sc. IT (CGPA 9.5)"', color: '#a5d6ff' }, { text: ',', color: '#e6edf3' }] },
    { num: '5', tokens: [{ text: '  stack: [', color: '#e6edf3' }, { text: '"React"', color: '#a5d6ff' }, { text: ', ', color: '#e6edf3' }, { text: '"Node.js"', color: '#a5d6ff' }, { text: ', ', color: '#e6edf3' }, { text: '"Java"', color: '#a5d6ff' }, { text: '],', color: '#e6edf3' }] },
    { num: '6', tokens: [{ text: '  passion: ', color: '#d2a8ff' }, { text: '"Building Thoughtful Apps"', color: '#a5d6ff' }, { text: ',', color: '#e6edf3' }] },
    { num: '7', tokens: [{ text: '  status: ', color: '#d2a8ff' }, { text: '"Open to Internships"', color: '#7ee787' }, { text: ',', color: '#e6edf3' }] },
    { num: '8', tokens: [{ text: '  readyToBuild: ', color: '#d2a8ff' }, { text: 'true', color: '#ff7b72' }] },
    { num: '9', tokens: [{ text: '};', color: '#e6edf3' }] },
    { num: '10', tokens: [{ text: '', color: '#e6edf3' }] },
    { num: '11', tokens: [{ text: 'export default developer;', color: '#ff7b72' }] }
  ]

  let y = 100
  lines.forEach(({ num, tokens }) => {
    // Line number
    ctx.fillStyle = '#375271'
    ctx.font = '16px "DM Mono", monospace'
    ctx.textAlign = 'right'
    ctx.fillText(num, 54, y)

    // Code tokens
    ctx.textAlign = 'left'
    let x = 85
    tokens.forEach(({ text, color }) => {
      ctx.fillStyle = color
      ctx.font = '17px "DM Mono", monospace'
      ctx.fillText(text, x, y)
      x += ctx.measureText(text).width
    })
    y += 36
  })

  // Bottom editor status bar
  ctx.fillStyle = '#050a14'
  ctx.fillRect(0, 595, 1024, 45)
  ctx.fillStyle = '#59ddf5'
  ctx.font = '13px "DM Mono", monospace'
  ctx.fillText('● UTF-8', 25, 622)
  ctx.fillText('JavaScript React', 120, 622)
  ctx.fillText('Main Branch', 290, 622)
  ctx.fillStyle = '#52e6b4'
  ctx.fillText('✔ Ready to build', 850, 622)

  return canvas
}

function createKeyboardCanvas() {
  const canvas = document.createElement('canvas')
  canvas.width = 512
  canvas.height = 256
  const ctx = canvas.getContext('2d')
  if (!ctx) return canvas

  ctx.fillStyle = '#08101e'
  ctx.fillRect(0, 0, 512, 256)

  const rows = [
    { count: 14, h: 22, y: 15 },
    { count: 14, h: 25, y: 44 },
    { count: 13, h: 25, y: 76 },
    { count: 12, h: 25, y: 108 },
    { count: 11, h: 25, y: 140 },
    { isBottom: true, h: 26, y: 172 }
  ]

  rows.forEach((row) => {
    if (row.isBottom) {
      ctx.fillStyle = '#111d31'
      ctx.fillRect(16, row.y, 42, row.h)
      ctx.fillRect(64, row.y, 45, row.h)
      ctx.fillRect(115, row.y, 45, row.h)
      ctx.fillStyle = '#162842'
      ctx.fillRect(166, row.y, 180, row.h)
      ctx.fillStyle = '#111d31'
      ctx.fillRect(352, row.y, 45, row.h)
      ctx.fillRect(403, row.y, 45, row.h)
      ctx.fillRect(454, row.y, 42, row.h)
    } else {
      const keyW = (512 - 32 - (row.count - 1) * 6) / row.count
      for (let i = 0; i < row.count; i++) {
        const x = 16 + i * (keyW + 6)
        ctx.fillStyle = '#101d31'
        ctx.fillRect(x, row.y, keyW, row.h)
        ctx.strokeStyle = 'rgba(89, 221, 245, 0.14)'
        ctx.lineWidth = 1
        ctx.strokeRect(x, row.y, keyW, row.h)
      }
    }
  })

  return canvas
}

function createLogoCanvas() {
  const canvas = document.createElement('canvas')
  canvas.width = 256
  canvas.height = 256
  const ctx = canvas.getContext('2d')
  if (!ctx) return canvas

  ctx.fillStyle = '#101a2c'
  ctx.fillRect(0, 0, 256, 256)

  ctx.beginPath()
  ctx.arc(128, 128, 70, 0, Math.PI * 2)
  ctx.strokeStyle = '#59ddf5'
  ctx.lineWidth = 6
  ctx.stroke()

  ctx.fillStyle = '#dffaff'
  ctx.font = 'bold 46px "DM Mono", monospace'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText('< / >', 128, 128)

  return canvas
}

function LaptopModel() {
  const groupRef = useRef()

  const codeTexture = useMemo(() => {
    const canvas = createCodeCanvas()
    const tex = new THREE.CanvasTexture(canvas)
    tex.anisotropy = 16
    tex.needsUpdate = true
    return tex
  }, [])

  const keyboardTexture = useMemo(() => {
    const canvas = createKeyboardCanvas()
    const tex = new THREE.CanvasTexture(canvas)
    tex.anisotropy = 8
    tex.needsUpdate = true
    return tex
  }, [])

  const logoTexture = useMemo(() => {
    const canvas = createLogoCanvas()
    const tex = new THREE.CanvasTexture(canvas)
    tex.anisotropy = 8
    tex.needsUpdate = true
    return tex
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = -0.35 + Math.sin(state.clock.elapsedTime * 0.4) * 0.08
    }
  })

  return (
    <Float speed={1.3} rotationIntensity={0.2} floatIntensity={0.35}>
      <group ref={groupRef} position={[0, -0.4, 0]} rotation={[0.18, -0.35, 0]}>
        {/* LAPTOP BASE CHASSIS */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2.5, 0.08, 1.7]} />
          <meshPhysicalMaterial
            color="#131e30"
            metalness={0.88}
            roughness={0.24}
            clearcoat={0.5}
            clearcoatRoughness={0.15}
          />
        </mesh>

        {/* KEYBOARD RECESS */}
        <mesh position={[0, 0.042, -0.2]}>
          <planeGeometry args={[2.2, 0.96]} />
          <meshStandardMaterial
            map={keyboardTexture}
            roughness={0.4}
            metalness={0.3}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </mesh>

        {/* TRACKPAD */}
        <mesh position={[0, 0.043, 0.46]}>
          <boxGeometry args={[0.76, 0.005, 0.48]} />
          <meshPhysicalMaterial
            color="#18263c"
            metalness={0.7}
            roughness={0.35}
            clearcoat={0.4}
          />
        </mesh>

        {/* POWER / STATUS LED */}
        <mesh position={[1.0, 0.045, -0.72]}>
          <sphereGeometry args={[0.015, 12, 12]} />
          <meshBasicMaterial color="#52e6b4" />
        </mesh>

        {/* SCREEN HINGE + LID GROUP (tilted open at ~110 degrees) */}
        <group position={[0, 0.04, -0.83]} rotation={[-0.34, 0, 0]}>
          {/* LID BACKING */}
          <mesh position={[0, 0.825, 0]}>
            <boxGeometry args={[2.5, 1.65, 0.045]} />
            <meshPhysicalMaterial
              color="#131e30"
              metalness={0.88}
              roughness={0.24}
              clearcoat={0.5}
              clearcoatRoughness={0.15}
            />
          </mesh>

          {/* FRONT SCREEN DISPLAY */}
          <mesh position={[0, 0.825, 0.024]}>
            <planeGeometry args={[2.38, 1.53]} />
            <meshBasicMaterial map={codeTexture} toneMapped={false} />
          </mesh>

          {/* BACK LOGO EMBLEM (< / >) */}
          <mesh position={[0, 0.825, -0.024]} rotation={[0, Math.PI, 0]}>
            <planeGeometry args={[0.62, 0.62]} />
            <meshBasicMaterial map={logoTexture} toneMapped={false} />
          </mesh>

          {/* SCREEN LIGHT CASTING ON KEYBOARD */}
          <pointLight position={[0, 0.8, 0.35]} intensity={3.5} distance={2.2} color="#59ddf5" />
        </group>
      </group>
    </Float>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.85} />
      <directionalLight position={[4, 6, 4]} intensity={2.2} color="#c6e9ff" />
      <pointLight position={[-4, -2, 3]} intensity={14} color="#1d6fd8" />
      <pointLight position={[4, 3, -2]} intensity={16} color="#00e5ff" />
      <spotLight position={[0, 7, 2]} intensity={18} angle={0.55} penumbra={1} color="#ffffff" />

      <LaptopModel />

      <Sparkles count={55} scale={5.5} size={1.8} speed={0.3} opacity={0.65} color="#59ddf5" />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={1.1}
        rotateSpeed={0.7}
      />
    </>
  )
}

export default function HeroScene() {
  return (
    <div className="hero-canvas" aria-label="Interactive 3D developer workstation">
      <Canvas
        camera={{ position: [0, 0.4, 4.3], fov: 38 }}
        dpr={[1, 1.5]}
        style={{ cursor: 'grab' }}
      >
        <Scene />
      </Canvas>

      <div className="orb-caption">
        <span className="pulse-dot" /> FULL STACK WORKSPACE &bull; DRAG TO ROTATE
      </div>
    </div>
  )
}
