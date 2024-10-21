import React, { Suspense } from 'react'
import CanvasComponent from '@/components/basic/WebGLCanvas'

const HomePage: React.FC = () => {
    return (
        <>
            <h1>Hello World!</h1>
            <Suspense fallback={null}>
                <CanvasComponent />
            </Suspense>
        </>
    );
};

export default HomePage