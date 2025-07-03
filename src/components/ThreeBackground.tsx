
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const FloatingRibbons = () => {
  const ribbonRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ribbonRef.current) {
      ribbonRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.5;
      ribbonRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      ribbonRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.2) * 2;
    }
  });

  return (
    <mesh ref={ribbonRef} position={[0, 0, -5]}>
      <torusKnotGeometry args={[3, 0.8, 100, 16]} />
      <meshStandardMaterial
        color="#4f46e5"
        transparent
        opacity={0.3}
        wireframe
        emissive="#4f46e5"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

const OrbitingSpheres = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.3;
    }
  });

  const spheres = useMemo(() => {
    const sphereArray = [];
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const radius = 6;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      sphereArray.push({ x, y: 0, z, key: i });
    }
    return sphereArray;
  }, []);

  return (
    <group ref={groupRef}>
      {spheres.map((sphere) => (
        <mesh key={sphere.key} position={[sphere.x, sphere.y, sphere.z]}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial
            color="#06b6d4"
            transparent
            opacity={0.4}
            emissive="#06b6d4"
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}
    </group>
  );
};

const WaveField = () => {
  const ref = useRef<THREE.Points>(null);
  
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    
    for (let i = 0; i < 2000; i++) {
      const x = (Math.random() - 0.5) * 40;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 40;
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      const positions = ref.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const z = positions[i + 2];
        positions[i + 1] = Math.sin(state.clock.elapsedTime * 0.5 + x * 0.1) * 2 + 
                          Math.cos(state.clock.elapsedTime * 0.3 + z * 0.1) * 2;
      }
      
      ref.current.geometry.attributes.position.needsUpdate = true;
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <Points ref={ref} positions={particlesPosition} stride={3}>
      <PointMaterial
        transparent
        color="#8b5cf6"
        size={0.02}
        sizeAttenuation={true}
        alphaTest={0.001}
        opacity={0.6}
      />
    </Points>
  );
};

const FloatingCrystals = () => {
  const crystal1Ref = useRef<THREE.Mesh>(null);
  const crystal2Ref = useRef<THREE.Mesh>(null);
  const crystal3Ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (crystal1Ref.current) {
      crystal1Ref.current.rotation.x = state.clock.elapsedTime * 0.3;
      crystal1Ref.current.rotation.y = state.clock.elapsedTime * 0.2;
      crystal1Ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.4) * 3;
    }
    
    if (crystal2Ref.current) {
      crystal2Ref.current.rotation.x = -state.clock.elapsedTime * 0.2;
      crystal2Ref.current.rotation.z = state.clock.elapsedTime * 0.4;
      crystal2Ref.current.position.x = Math.cos(state.clock.elapsedTime * 0.3) * 4;
    }
    
    if (crystal3Ref.current) {
      crystal3Ref.current.rotation.y = state.clock.elapsedTime * 0.25;
      crystal3Ref.current.rotation.z = -state.clock.elapsedTime * 0.15;
      crystal3Ref.current.position.z = Math.sin(state.clock.elapsedTime * 0.35) * 3 - 8;
    }
  });

  return (
    <>
      <mesh ref={crystal1Ref} position={[8, 0, -12]}>
        <octahedronGeometry args={[1.5]} />
        <meshStandardMaterial
          color="#ec4899"
          transparent
          opacity={0.2}
          wireframe
          emissive="#ec4899"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      <mesh ref={crystal2Ref} position={[-6, 4, -10]}>
        <icosahedronGeometry args={[1.2]} />
        <meshStandardMaterial
          color="#10b981"
          transparent
          opacity={0.25}
          wireframe
          emissive="#10b981"
          emissiveIntensity={0.15}
        />
      </mesh>
      
      <mesh ref={crystal3Ref} position={[3, -5, -15]}>
        <dodecahedronGeometry args={[1]} />
        <meshStandardMaterial
          color="#f59e0b"
          transparent
          opacity={0.18}
          wireframe
          emissive="#f59e0b"
          emissiveIntensity={0.12}
        />
      </mesh>
    </>
  );
};

const ColorfulLights = () => {
  const light1Ref = useRef<THREE.PointLight>(null);
  const light2Ref = useRef<THREE.PointLight>(null);
  const light3Ref = useRef<THREE.PointLight>(null);
  
  useFrame((state) => {
    if (light1Ref.current) {
      light1Ref.current.position.x = Math.sin(state.clock.elapsedTime * 0.6) * 10;
      light1Ref.current.position.y = Math.cos(state.clock.elapsedTime * 0.4) * 8;
      light1Ref.current.intensity = 0.4 + Math.sin(state.clock.elapsedTime * 3) * 0.2;
    }
    
    if (light2Ref.current) {
      light2Ref.current.position.x = Math.cos(state.clock.elapsedTime * 0.5) * 8;
      light2Ref.current.position.z = Math.sin(state.clock.elapsedTime * 0.3) * 10;
      light2Ref.current.intensity = 0.3 + Math.cos(state.clock.elapsedTime * 2.5) * 0.15;
    }
    
    if (light3Ref.current) {
      light3Ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.7) * 6;
      light3Ref.current.position.z = Math.cos(state.clock.elapsedTime * 0.6) * 8;
      light3Ref.current.intensity = 0.25 + Math.sin(state.clock.elapsedTime * 1.8) * 0.1;
    }
  });

  return (
    <>
      <pointLight
        ref={light1Ref}
        color="#4f46e5"
        intensity={0.4}
        distance={20}
        decay={2}
      />
      <pointLight
        ref={light2Ref}
        color="#06b6d4"
        intensity={0.3}
        distance={18}
        decay={2}
      />
      <pointLight
        ref={light3Ref}
        color="#8b5cf6"
        intensity={0.25}
        distance={16}
        decay={2}
      />
    </>
  );
};

const ThreeBackground = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 75 }}
      style={{ background: 'transparent' }}
      gl={{ antialias: true, alpha: true }}
    >
      <fog attach="fog" args={['#000000', 8, 30]} />
      <ambientLight intensity={0.1} />
      <pointLight position={[10, 10, 10]} intensity={0.3} color="#ffffff" />
      <ColorfulLights />
      <WaveField />
      <FloatingRibbons />
      <OrbitingSpheres />
      <FloatingCrystals />
    </Canvas>
  );
};

export default ThreeBackground;
