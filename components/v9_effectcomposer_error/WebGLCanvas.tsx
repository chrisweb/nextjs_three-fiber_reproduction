'use client'

import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'
import { EffectComposer/*, Bloom*/, Glitch } from '@react-three/postprocessing'
import { GlitchMode } from 'postprocessing'

function Box(props: ThreeElements['mesh']) {

    const meshRef = useRef<THREE.Mesh>(null!)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    useFrame((state, delta) => (meshRef.current.rotation.x += delta))

    return (
        <mesh
            {...props}
            ref={meshRef}
            scale={active ? 1.5 : 1}
            onClick={(/*event*/) => setActive(!active)}
            onPointerOver={(/*event*/) => setHover(true)}
            onPointerOut={(/*event*/) => setHover(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : '#2f74c0'} />
        </mesh>
    )
}

const WebGLCanvas = (/*props: CanvasProps*/) => {

    return (
        <>
            <Canvas>
                <ambientLight intensity={Math.PI / 2} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                <Box position={[-1.2, 0, 0]} />
                <Box position={[1.2, 0, 0]} />
                <EffectComposer>
                    {/*<Bloom
                        luminanceThreshold={0.01}
                        intensity={0.7}
                        luminanceSmoothing={0.9}
                    />*/}
                    <Glitch
                        delay={new THREE.Vector2(1.5, 3.5)} // min and max glitch delay
                        duration={new THREE.Vector2(0.6, 1.0)} // min and max glitch duration
                        strength={new THREE.Vector2(0.3, 1.0)} // min and max glitch strength
                        mode={GlitchMode.SPORADIC} // glitch mode
                        active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
                        ratio={0.85} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
                    />
                </EffectComposer>
            </Canvas>
        </>
    )
}

export default WebGLCanvas