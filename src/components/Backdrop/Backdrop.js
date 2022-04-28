import React from 'react';

import './Backdrop.css';

// The .join() method joins all elements in the array -> the className if props.show was set to true
    // would be "Backdrop BackdropOpened".
const backdrop = (props) => {
    const cssClasses = ['Backdrop', props.show ? 'BackdropOpened' : 'BackdropClosed'];

    return <div className={cssClasses.join(' ')}></div>
};

export default backdrop;