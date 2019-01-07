import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', border: '3px solid #29648A', height: '80vh'}}>
            {props.children}
        </div>
    )
}

export default Scroll;