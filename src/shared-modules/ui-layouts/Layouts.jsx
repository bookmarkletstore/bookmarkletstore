import React from 'react';
import '../ui-styles/include_tailwind.css';

class Layouts {

    static Card = ({ children, cls, ...rest }) => {
        return (
            <div 
                className={cls? 
                    `w-fit rounded shadow border bg-white-500 p-1 ${cls}` : 
                    `w-fit rounded shadow border bg-white-500 p-1`
                } 
                {...rest}
            >
            {children}
            </div>
        );
    }
    
    static PaddedScroller = ({ children, cls, ...rest }) => {
        return (
            <div 
                className={cls? 
                    `py-2 px-2 overflow-auto ${cls}` : 
                    `py-2 px-2 overflow-auto`
                } 
                {...rest}
            >
            {children}
            </div>
        );
    }
}
export default Layouts;
