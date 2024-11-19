import Link from 'next/link'

const Page: React.FC = () => {
    return (
        <>
            <h1>Suspense or no Suspense:</h1>
            <ul>
                <li style={{ color: 'green' }}>[Works] <Link href="/suspense_or_no_suspense/none_at_all">No React Suspense at all</Link></li>
                <li style={{ color: 'red' }}>[Fails] <Link href="/suspense_or_no_suspense/outside_canvas">Canvas parent is a React Suspense component</Link>
                    <ul>
                        <li>Visit this example through the link and it will work (uses next/link client navigation)</li>
                        <li>Then reload the page and you get "THREE.WebGLRenderer: Context Lost"</li>
                    </ul>
                </li>
                <li style={{ color: 'green' }}>[Works] <Link href="/suspense_or_no_suspense/inside_canvas">Canvas first child is a React Suspense component</Link></li>
                <li style={{ color: 'green' }}>[Works] <Link href="/suspense_or_no_suspense/inside_and_outside_canvas">Canvas parent as well as first child are React Suspense components</Link></li>
            </ul>
        </>
    );
};

export default Page