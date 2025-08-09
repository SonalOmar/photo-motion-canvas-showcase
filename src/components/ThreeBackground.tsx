import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

const SoftParticles = () => {
  const ref = useRef<THREE.Points>(null);

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(1500 * 3);
    for (let i = 0; i < 1500; i++) {
      const x = (Math.random() - 0.5) * 50;
      const y = (Math.random() - 0.5) * 30;
      const z = (Math.random() - 0.5) * 50;
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      const positions = ref.current.geometry.attributes.position
        .array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const z = positions[i + 2];
        positions[i + 1] =
          Math.sin(state.clock.elapsedTime * 0.3 + x * 0.1) * 1.5 +
          Math.cos(state.clock.elapsedTime * 0.2 + z * 0.1) * 1.5;
      }
      ref.current.geometry.attributes.position.needsUpdate = true;
      ref.current.rotation.y = state.clock.elapsedTime * 0.015;
    }
  });

  return (
    <Points ref={ref} positions={particlesPosition} stride={3}>
      <PointMaterial
        transparent
        color="#6366f1"
        size={0.02}
        sizeAttenuation
        alphaTest={0.001}
        opacity={0.5}
      />
    </Points>
  );
};

const GlowSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      meshRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -8]}>
      <sphereGeometry args={[4, 64, 64]} />
      <meshStandardMaterial
        color="#3b82f6"
        transparent
        opacity={0.05}
        wireframe
        emissive="#3b82f6"
        emissiveIntensity={0.3}
      />
    </mesh>
  );
};

const ThreeBackground = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 75 }}
      style={{ background: "transparent" }}
      gl={{ antialias: true, alpha: true }}
    >
      <fog attach="fog" args={["#0f172a", 10, 30]} />
      <ambientLight intensity={0.25} color="#a5b4fc" />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#818cf8" />
      <SoftParticles />
      <GlowSphere />
    </Canvas>
  );
};

export default ThreeBackground;  