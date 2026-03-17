import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float, MeshDistortMaterial, Sphere } from '@react-three/drei';

function InteractiveShape() {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <Sphere ref={meshRef} args={[1, 64, 64]} scale={1.8}>
                <MeshDistortMaterial
                    color="#888888" /* Sleek terminal/apple gray/silver */
                    attach="material"
                    distort={0.4}
                    speed={2}
                    roughness={0.2}
                    metalness={0.8}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                />
            </Sphere>
        </Float>
    );
}

export function Hero3D() {
    return (
        <div className="absolute inset-0 z-0 h-[600px] md:h-[800px] w-full pointer-events-none">
            <Canvas
                className="pointer-events-auto"
                camera={{ position: [0, 0, 5], fov: 45 }}
            >
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#555555" />
                <InteractiveShape />
                <OrbitControls 
                    enableZoom={false} 
                    enablePan={false}
                    autoRotate={true}
                    autoRotateSpeed={0.5}
                />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
}