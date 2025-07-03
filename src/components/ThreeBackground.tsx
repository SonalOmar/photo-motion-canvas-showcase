
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = () => {
  const ref = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(3000 * 3);
    
    for (let i = 0; i < 3000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.2;
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.08) * 0.2;
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.03) * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={particlesPosition} stride={3}>
      <PointMaterial
        transparent
        color="#ffd700"
        size={0.015}
        sizeAttenuation={true}
        alphaTest={0.001}
        opacity={0.8}
      />
    </Points>
  );
};

const FloatingGeometry = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.3;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.4;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 1;
      meshRef.current.position.x = Math.cos(state.clock.elapsedTime * 0.2) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={[4, 0, -8]}>
      <torusGeometry args={[1.5, 0.4, 16, 32]} />
      <meshStandardMaterial
        color="#ffd700"
        transparent
        opacity={0.15}
        wireframe
        emissive="#ffd700"
        emissiveIntensity={0.1}
      />
    </mesh>
  );
};

const FloatingSphere = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 2;
      sphereRef.current.position.x = Math.cos(state.clock.elapsedTime * 0.3) * 3;
      sphereRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <mesh ref={sphereRef} position={[-5, 2, -10]}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial
        color="#ffd700"
        transparent
        opacity={0.1}
        wireframe
        emissive="#ffd700"
        emissiveIntensity={0.05}
      />
    </mesh>
  );
};

const FloatingCube = () => {
  const cubeRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      cubeRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      cubeRef.current.rotation.z = state.clock.elapsedTime * 0.05;
      cubeRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 1.5;
      cubeRef.current.position.z = Math.sin(state.clock.elapsedTime * 0.2) * 2 - 6;
    }
  });

  return (
    <mesh ref={cubeRef} position={[0, -3, -6]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color="#ffd700"
        transparent
        opacity={0.08}
        wireframe
        emissive="#ffd700"
        emissiveIntensity={0.03}
      />
    </mesh>
  );
};

const MovingLight = () => {
  const lightRef = useRef<THREE.PointLight>(null);
  
  useFrame((state) => {
    if (lightRef.current) {
      lightRef.current.position.x = Math.cos(state.clock.elapsedTime * 0.5) * 8;
      lightRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 5;
      lightRef.current.position.z = Math.sin(state.clock.elapsedTime * 0.4) * 6;
      lightRef.current.intensity = 0.3 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <pointLight
      ref={lightRef}
      color="#ffd700"
      intensity={0.3}
      distance={15}
      decay={2}
    />
  );
};

const ThreeBackground = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 75 }}
      style={{ background: 'transparent' }}
      gl={{ antialias: true, alpha: true }}
    >
      <fog attach="fog" args={['#000000', 5, 25]} />
      <ambientLight intensity={0.05} />
      <pointLight position={[10, 10, 10]} intensity={0.2} color="#ffd700" />
      <pointLight position={[-10, -10, -10]} intensity={0.1} color="#ffffff" />
      <MovingLight />
      <ParticleField />
      <FloatingGeometry />
      <FloatingSphere />
      <FloatingCube />
    </Canvas>
  );
};

export default ThreeBackground;
