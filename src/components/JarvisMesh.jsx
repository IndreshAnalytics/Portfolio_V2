import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Float, Billboard } from '@react-three/drei';
import * as THREE from 'three';

// Configuration
const PARTICLE_COUNT = 200;
const CONNECTION_DISTANCE = 3;
const MOUSE_INFLUENCE = 4;

// 🧠 Neural Particle Network
function ParticleNetwork({ theme }) {
    const meshRef = useRef();
    const linesRef = useRef();

    // Initialize Particles (Mutable state in Ref)
    const particlesRef = useRef([]);
    const positionsRef = useRef(new Float32Array(PARTICLE_COUNT * 3));
    const velocitiesRef = useRef([]);

    // Initialize only once
    React.useEffect(() => {
        const tempParticles = [];
        const tempVelocities = [];

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const x = (Math.random() - 0.5) * 20;
            const y = (Math.random() - 0.5) * 20;
            const z = (Math.random() - 0.5) * 10;

            tempParticles.push({ x, y, z });
            tempVelocities.push({
                x: (Math.random() - 0.5) * 0.02,
                y: (Math.random() - 0.5) * 0.02,
                z: (Math.random() - 0.5) * 0.02
            });
        }
        particlesRef.current = tempParticles;
        velocitiesRef.current = tempVelocities;
    }, []);

    // Animation Loop
    useFrame((state) => {
        if (!meshRef.current || !linesRef.current) return;

        const particles = particlesRef.current;
        const velocities = velocitiesRef.current;

        // Safety check
        if (!particles || !velocities || particles.length === 0) return;

        const linePositions = [];

        // Update Particles
        for (let i = 0; i < PARTICLE_COUNT; i++) {
            // Apply Velocity
            particles[i].x += velocities[i].x;
            particles[i].y += velocities[i].y;
            particles[i].z += velocities[i].z;

            // Bounce off bounds
            if (Math.abs(particles[i].x) > 10) velocities[i].x *= -1;
            if (Math.abs(particles[i].y) > 10) velocities[i].y *= -1;
            if (Math.abs(particles[i].z) > 5) velocities[i].z *= -1;

            // Update Matrix
            const dummy = new THREE.Object3D();
            dummy.position.set(particles[i].x, particles[i].y, particles[i].z);
            dummy.scale.setScalar(0.05); // Particle Size
            dummy.updateMatrix();
            meshRef.current.setMatrixAt(i, dummy.matrix);

            // Find Connections (Heavy loop, but okay for <500 particles)
            for (let j = i + 1; j < PARTICLE_COUNT; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dz = particles[i].z - particles[j].z;
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

                if (dist < CONNECTION_DISTANCE) {
                    linePositions.push(
                        particles[i].x, particles[i].y, particles[i].z,
                        particles[j].x, particles[j].y, particles[j].z
                    );
                }
            }
        }

        meshRef.current.instanceMatrix.needsUpdate = true;

        // Update Lines Geometry
        linesRef.current.geometry.setAttribute(
            'position',
            new THREE.Float32BufferAttribute(linePositions, 3)
        );
    });

    const particleColor = "#64ffda"; // Cyan for Dark Mode

    return (
        <>
            {/* Particles Instanced Mesh */}
            <instancedMesh ref={meshRef} args={[null, null, PARTICLE_COUNT]}>
                <sphereGeometry args={[1, 8, 8]} />
                <meshBasicMaterial color={particleColor} transparent opacity={0.3} />
            </instancedMesh>

            {/* Connection Lines using LineSegments */}
            <lineSegments ref={linesRef}>
                <bufferGeometry />
                <lineBasicMaterial color={particleColor} transparent opacity={0.15} />
            </lineSegments>
        </>
    );
}

// 🌐 Gravity Well (Skill Node - Dark Mode Tech Theme)
function GravityWell({ position, label, color, theme }) {
    const textColor = "#64ffda"; // Cyan for Dark Mode

    // Methods for animation
    const meshGroup = useRef();

    useFrame((state) => {
        if (meshGroup.current) {
            meshGroup.current.rotation.y += 0.005;
            meshGroup.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
        }
    });

    return (
        <group position={position}>
            <Float speed={2} rotationIntensity={0} floatIntensity={1}>
                {/* Glass Sphere - Dark & Techy */}
                <group ref={meshGroup}>
                    <mesh>
                        <sphereGeometry args={[0.7, 32, 32]} />
                        <meshPhysicalMaterial
                            color="#112240" // Dark Navy
                            transmission={0.6} // Glass effect
                            opacity={0.8}
                            roughness={0.2}
                            metalness={0.8}
                            ior={1.5}
                            thickness={0.5}
                            clearcoat={1}
                        />
                    </mesh>

                    {/* Thin Border (Cyan Glow) */}
                    <mesh scale={[1.02, 1.02, 1.02]}>
                        <sphereGeometry args={[0.7, 32, 32]} />
                        <meshBasicMaterial
                            color="#64ffda"
                            transparent
                            opacity={0.2}
                            wireframe
                        />
                    </mesh>

                    {/* Ring with Brand Color */}
                    <mesh rotation={[Math.PI / 2.5, 0, 0]}>
                        <ringGeometry args={[1.2, 1.25, 64]} />
                        <meshBasicMaterial color={color} transparent opacity={0.6} side={THREE.DoubleSide} />
                    </mesh>
                </group>

                {/* Label - "Blurry" Effect via transparency and softness */}
                <Billboard
                    position={[0, 1.5, 0]}
                    follow={true}
                    lockX={false}
                    lockY={false}
                    lockZ={false}
                >
                    <Text
                        fontSize={0.6} // Slightly larger
                        color={textColor}
                        anchorX="center"
                        anchorY="middle"
                        fontWeight="bold"
                        fillOpacity={0.6} // Semi-transparent to simulate "blur"/ghost look
                        outlineWidth={0} // No outline for softness
                    >
                        {label}
                    </Text>
                </Billboard>
            </Float>
        </group>
    );
}

// 🎬 Main Scene Layout
function DataScene({ theme }) {
    return (
        <group>
            {/* Ambient Flowing Network */}
            <ParticleNetwork theme="dark" />

            {/* Strategic Skill Nodes */}
            <GravityWell position={[-8, 4, -4]} label="TABLEAU" color="#E97627" theme={theme} />
            <GravityWell position={[8, -4, -4]} label="ALTERYX" color="#0069CC" theme={theme} />
            <GravityWell position={[-8, -4, -4]} label="JIRA" color="#0052CC" theme={theme} />
            <GravityWell position={[8, 4, -4]} label="POWER BI" color="#F2C811" theme={theme} />
            <GravityWell position={[0, -5, -6]} label="SQL" color="#00758F" theme={theme} />

            {/* Lighting - Dark & Moody */}
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#64ffda" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#0052cc" />
        </group>
    );
}

// 📦 Component Export
const NeuralNetwork = ({ theme }) => {
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            overflow: 'hidden',
            // Flexible Partition: Fade out at the bottom
            maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
        }}>
            {/* Zoomed out slightly to fit the wider spread */}
            <Canvas camera={{ position: [0, 0, 14], fov: 40 }} dpr={[1, 2]}>
                <Suspense fallback={null}>
                    <DataScene theme={theme} />
                    <OrbitControls
                        enableZoom={false}
                        enablePan={false}
                        autoRotate={true}
                        autoRotateSpeed={0.5}
                        maxPolarAngle={Math.PI / 1.5}
                        minPolarAngle={Math.PI / 3}
                    />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default NeuralNetwork;
