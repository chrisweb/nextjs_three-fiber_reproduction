import WebGLCanvasNoSuspense from '@/components/suspense_or_no_suspense/WebGLCanvasNoSuspense'

const Page: React.FC = () => {
    return (
        <>
            <h1>No React Suspense at all:</h1>
            <WebGLCanvasNoSuspense />
        </>
    );
};

export default Page