import React from 'react';
import SiteHeader from '../SiteHeader';
import ListContent from '../ListContent';
import AddContent from '../AddContent';
import StickySlider from '../StickySlider';
import './style.scss';

/**
 * App component deals with page layout
 */
const App = () => {	
    return (
        <>
            <SiteHeader />

            <main>
                <section>
                    <ListContent />
                </section>
                <aside>
                    <StickySlider>
                        <div className="box">
                            <AddContent />
                        </div>
                    </StickySlider>
                </aside>
            </main>
        </>
    );
}

export default App;