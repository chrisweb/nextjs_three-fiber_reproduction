'use client'

import { Canvas } from '@react-three/fiber'
import type { PropsWithChildren } from 'react'
import type { Vector3 } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'

interface IProps extends PropsWithChildren {
    position: Vector3
    scale: Vector3
}

function Hitchcock(props: IProps) {

    const HITCHCOCK_TEXTURE_PATH = '/hitchcock.jpg'

    const [hitchcockTexture] = useTexture([
        HITCHCOCK_TEXTURE_PATH,
    ])

    return (
        <mesh
            position={props.position}
            scale={props.scale}
        >
            <planeGeometry />
            <meshBasicMaterial
                map={hitchcockTexture}
                transparent={true}
            />
            {props.children}
        </mesh>
    )
}

const WebGLCanvasNoSuspense = (/*props: CanvasProps*/) => {
    const ratio = 1.627
    return (
        <>
            <Canvas>
                <Hitchcock position={[0, 0, 1]} scale={[8, (8/ratio), 0]} />
            </Canvas>
        </>
    )
}

export default WebGLCanvasNoSuspense