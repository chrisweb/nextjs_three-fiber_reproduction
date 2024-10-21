import React from 'react'
import Link from 'next/link'

const HomePage: React.FC = () => {
    return (
        <ul>
            <li><Link href="/basic">Basic example (works)</Link></li>
            <li><Link href="/v9_effectcomposer_error">R3F version 9 beta 1 with postprocessing EffectComposer (has an error)</Link></li>
            <li><Link href="/v9_leva_error">R3F version 9 beta 1 with Leva (has an error)</Link></li>
        </ul>
    );
};

export default HomePage