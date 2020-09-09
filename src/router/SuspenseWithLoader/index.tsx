import React, { FunctionComponent, Suspense } from 'react'
import PageLoader from '../../components/ui/loaders/pageLoader';

const SuspenseWithDefaultLoader: FunctionComponent = ({ children }) => {
    return <Suspense fallback={<PageLoader />}>
        {children}
    </Suspense>
}

export default SuspenseWithDefaultLoader;