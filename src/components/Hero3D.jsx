import { useRef, useState, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text3D, Center, Float, MeshDistortMaterial, Sphere } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'

// Componente testo 3D animato con effetti migliorati
function AnimatedText3D() {
  const textRef = useRef()
  const [hovered, setHovered] = useState(false)
  
  useFrame((state) => {
    if (textRef.current) {
      // Rotazione fluida continua
      textRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.3
      textRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.15
      
      // Movimento verticale fluido
      textRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5
      
      // Scala pulsante
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.8) * 0.05
      textRef.current.scale.set(scale, scale, scale)
    }
  })
  
  return (
    <Center>
      <Float
        speed={2}
        rotationIntensity={0.5}
        floatIntensity={0.5}
      >
        <group>
          {/* White outline layer */}
          <Text3D
            font="/fonts/helvetiker_bold.typeface.json"
            size={1.82}
            height={0.48}
            curveSegments={16}
            bevelEnabled
            bevelThickness={0.06}
            bevelSize={0.06}
            bevelOffset={0}
            bevelSegments={10}
            position={[-0.01, -0.01, -0.02]}
          >
            NexT
            <meshStandardMaterial
              color="#ffffff"
              metalness={0.3}
              roughness={0.7}
              transparent
              opacity={0.4}
            />
          </Text3D>
          
          {/* Main blue text */}
          <Text3D
            ref={textRef}
            font="/fonts/helvetiker_bold.typeface.json"
            size={1.8}
            height={0.5}
            curveSegments={16}
            bevelEnabled
            bevelThickness={0.05}
            bevelSize={0.05}
            bevelOffset={0}
            bevelSegments={10}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
          >
            NexT
            <meshStandardMaterial
              color={hovered ? "#33E0FF" : "#00D9FF"}
              metalness={0.9}
              roughness={0.1}
              emissive={hovered ? "#00D9FF" : "#00B8D9"}
              emissiveIntensity={hovered ? 1.5 : 1.2}
            />
          </Text3D>
        </group>
      </Float>
    </Center>
  )
}

// Griglia animata 3D migliorata
function AnimatedGrid() {
  const gridRef = useRef()
  const gridRef2 = useRef()
  
  useFrame((state) => {
    if (gridRef.current && gridRef2.current) {
      // Movimento continuo della griglia
      gridRef.current.position.z = ((state.clock.elapsedTime * 0.5) % 4) - 2
      gridRef2.current.position.z = ((state.clock.elapsedTime * 0.5) % 4) - 6
      
      // Leggera ondulazione
      gridRef.current.position.y = -2 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      gridRef2.current.position.y = -2 + Math.sin(state.clock.elapsedTime * 0.5 + Math.PI) * 0.1
    }
  })
  
  return (
    <>
      <gridHelper 
        ref={gridRef}
        args={[30, 30, '#1e40af', '#1e3a8a']} 
        position={[0, -2, 0]} 
      />
      <gridHelper 
        ref={gridRef2}
        args={[30, 30, '#1e40af', '#1e3a8a']} 
        position={[0, -2, -4]} 
      />
    </>
  )
}

// Sfere fluttuanti decorative
function FloatingSpheres() {
  const spheres = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10 - 5
      ],
      scale: Math.random() * 0.3 + 0.1,
      speed: Math.random() * 0.5 + 0.3
    }))
  }, [])
  
  return (
    <>
      {spheres.map((sphere, i) => (
        <Float
          key={i}
          speed={sphere.speed}
          rotationIntensity={0.5}
          floatIntensity={2}
        >
          <Sphere args={[sphere.scale, 16, 16]} position={sphere.position}>
            <MeshDistortMaterial
              color="#3b82f6"
              attach="material"
              distort={0.3}
              speed={2}
              roughness={0.2}
              metalness={0.8}
              transparent
              opacity={0.3}
            />
          </Sphere>
        </Float>
      ))}
    </>
  )
}

// Luci ambientali migliorate
function Lights() {
  const spotLightRef = useRef()
  
  useFrame((state) => {
    if (spotLightRef.current) {
      spotLightRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.5) * 5
      spotLightRef.current.position.z = Math.cos(state.clock.elapsedTime * 0.5) * 5
    }
  })
  
  return (
    <>
      <ambientLight intensity={0.6} />
      <spotLight
        ref={spotLightRef}
        position={[10, 10, 10]}
        angle={0.3}
        penumbra={1}
        intensity={1.5}
        castShadow
      />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#60a5fa" />
      <pointLight position={[10, 10, -10]} intensity={0.5} color="#3b82f6" />
      <hemisphereLight intensity={0.5} groundColor="#1e3a8a" />
    </>
  )
}

// Componente Hero principale
export default function Hero3D({ language, translations }) {
  const t = translations[language]
  
  return (
     <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-100">>
      {/* Canvas 3D con effetti migliorati */}
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 10], fov: 50 }}
          style={{ background: 'transparent' }}
          gl={{ 
            antialias: true,
            alpha: true,
            powerPreference: "high-performance"
          }}
        >
          <Lights />
          <AnimatedText3D />
          <AnimatedGrid />
          <FloatingSpheres />
          
          {/* Fog per profondità */}
          <fog attach="fog" args={['#0f172a', 5, 25]} />
        </Canvas>
      </div>
      
      {/* Contenuto sovrapposto */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-gray-900 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center max-w-4xl"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 text-gray-900"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              backgroundSize: '200% 200%'
            }}
          >
            {t.home.title}
          </motion.h1>
          
          <motion.p 
            className="text-2xl md:text-3xl mb-4 text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {t.home.subtitle}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-12 bg-white/60 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50"
          >
            <motion.p 
              className="text-4xl md:text-6xl font-bold mb-4"
              style={{
                color: '#00D9FF',
                textShadow: `
                  0 0 10px rgba(0, 217, 255, 0.8),
                  0 0 20px rgba(0, 217, 255, 0.8),
                  0 0 40px rgba(0, 217, 255, 0.6),
                  0 0 80px rgba(0, 217, 255, 0.4),
                  0 0 120px rgba(0, 217, 255, 0.2)
                `
              }}
            >
              {t.home.futureTrading}
            </motion.p>
            <motion.p 
              className="text-xl md:text-2xl text-gray-700 italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              "{t.home.tagline}"
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#services"
              className="px-8 py-4 bg-gradient-to-r from-[#FC4C02] to-[#FF6B35] text-white rounded-full text-lg font-semibold transition-all shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(252, 76, 2, 0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              {t.home.discoverServices}
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-900 hover:bg-white rounded-full text-lg font-semibold transition-all shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)' }}
              whileTap={{ scale: 0.95 }}
            >
              {t.home.contactMe}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Effetto particelle migliorato */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-600 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Gradient overlay per profondità */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent pointer-events-none" />
    </div>
  )
}
