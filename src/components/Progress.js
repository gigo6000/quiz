import React from 'react';

function Progress(props) {
    return (
        <h2>
            Question {props.current} of {props.total}
        </h2>
    );
}

export default Progress;
