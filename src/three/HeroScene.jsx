import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Environment, Sparkles } from '@react-three/drei'
import { useRef } from 'react'

function Orb() {
  const mesh = useRef()
  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.16
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.22) * 0.12
    }
  })
  return <Float speed={1.1} rotationIntensity={0.25} floatIntensity={0.65}>
    <mesh ref={mesh} scale={1.55}>
      <icosahedronGeometry args={[1, 5]} />
      <MeshDistortMaterial color="#9bb6d7" metalness={0.96} roughness={0.19} distort={0.16} speed={1.4} />
    </mesh>
  </Float>
}

function Scene() {
  return <>
    <ambientLight intensity={0.75} />
    <pointLight position={[4, 3, 4]} intensity={35} color="#31c8ff" />
    <pointLight position={[-4, -2, 3]} intensity={24} color="#315dff" />
    <spotLight position={[0, 5, 0]} intensity={22} angle={0.5} penumbra={1} />
    <Orb />
    <Sparkles count={90} scale={6} size={2.1} speed={0.35} opacity={0.7} color="#8ce8ff" />
    <Environment preset="city" />
  </>
}

export default function HeroScene() {
  return <div className="hero-canvas" aria-label="Decorative animated metallic 3D sphere">
    <Canvas camera={{ position: [0, 0, 5.2], fov: 42 }} dpr={[1, 1.5]}>
      <Scene />
    </Canvas>
    <div className="orb-caption"><span className="pulse-dot" /> CREATIVE ENGINEERING / 3D SPACE</div>
  </div>
}
