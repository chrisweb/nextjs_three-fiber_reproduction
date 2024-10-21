import React, { Suspense } from 'react'
import WebGLCanvas from '@/components/v9_leva_error/WebGLCanvas'

const HomePage: React.FC = () => {
    return (
        <main style={{
            height: '100vh',
            width: '100vw'
        }}>
            <h1>Hello World!</h1>

            <Suspense fallback={null}>
                <WebGLCanvas />
            </Suspense>
        </main>
    );
};

export default HomePage