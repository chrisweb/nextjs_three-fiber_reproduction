import React, { Suspense } from 'react'
import CanvasComponent from '@/components/suspense_or_no_suspense/WebGLCanvasNoSuspense'

const Page: React.FC = () => {
    return (
        <>
            <h1>Canvas parent is a React Suspense component:</h1>
            <Suspense fallback={null}>
                <CanvasComponent />
            </Suspense>
        </>
    );
};

export default Page