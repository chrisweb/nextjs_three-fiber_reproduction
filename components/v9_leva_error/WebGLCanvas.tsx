'use client'

import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
//import type { CanvasProps } from '@react-three/fiber'
import { Stage } from '@react-three/drei'
import { HueSaturation, EffectComposer } from '@react-three/postprocessing'
import { useControls } from 'leva'
import Model from './Model'

const WebGLCanvas = (/*props: CanvasProps*/) => {

    const { hue, saturation } = useControls({
        hue: {
            value: 0,
            min: 0,
            max: Math.PI,
            step: 0.1
        },
        saturation: {
            value: 0,
            min: 0,
            max: Math.PI,
            step: 0.1
        }
    })

    return (
        <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
            <Suspense fallback={null}>
                <Stage preset="rembrandt" intensity={1} environment="city">
                    <Model />
                </Stage>
                <EffectComposer>
                    <HueSaturation hue={hue} saturation={saturation} />
                </EffectComposer>
            </Suspense>
        </Canvas>
    )
}

export default WebGLCanvas