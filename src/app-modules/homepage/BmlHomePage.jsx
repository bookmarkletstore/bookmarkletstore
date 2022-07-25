
import React from 'react';
import SafeComponent from '../../mfe-utils/SafeComponent';
import Layouts from '../../shared-modules/ui-layouts/Layouts';
import StoreLayout from 'MfeStore/StoreLayout';
// const StoreLayout = React.lazy(() => import("MfeStore/StoreLayout")); // This works only with components, not classes

const MfeDemo = React.lazy(() => import("MfeStore/MfeDemo"));

const BmlHomePage = () => {
    return (<div >
        <h2 className='text-2xl font-bold m-2'>Bookmarklets Store</h2>
        <Layouts.PaddedScroller cls=''>

            <Layouts.Card cls='bg-gray-200'>
                <h2>Bookmarklet to load YouTube videos without Ads</h2>
                <code className=''>
                    javascript: window.open();
                </code>
            </Layouts.Card>

            <SafeComponent msg='Failed to load MFE from MFEStore repo'>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <MfeDemo/>
                </React.Suspense>
            </SafeComponent>

            <StoreLayout.Wrapper>
                <StoreLayout.LeftPane>
                    <h2>Test</h2>
                    <h2>Test</h2>
                </StoreLayout.LeftPane>

            </StoreLayout.Wrapper>

        </Layouts.PaddedScroller>        
    </div>);
}
export default BmlHomePage;