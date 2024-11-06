import WebGLCanvasSuspenseChild from '@/components/suspense_or_no_suspense/WebGLCanvasSuspenseChild'

const Page: React.FC = () => {
    return (
        <>
            <h1>Canvas first child is a React Suspense component:</h1>
            <WebGLCanvasSuspenseChild />
        </>
    );
};

export default Page