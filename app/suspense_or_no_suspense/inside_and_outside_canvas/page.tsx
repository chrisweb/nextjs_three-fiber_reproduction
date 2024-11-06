import React, { Suspense } from 'react'
import WebGLCanvasSuspenseChild from '@/components/suspense_or_no_suspense/WebGLCanvasSuspenseChild'

const Page: React.FC = () => {
    return (
        <>
            <h1>Canvas parent as well as first child are React Suspense components:</h1>
            <Suspense fallback={null}>
                <WebGLCanvasSuspenseChild />
            </Suspense>
        </>
    );
};

export default Page