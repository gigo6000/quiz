import React from 'react';

interface ProgressProps {
    current: number;
    total: number;
}

const Progress: React.FC<ProgressProps> = (props) => {
    return (
        <h2>
            Question {props.current} of {props.total}
        </h2>
    );
}

export default Progress;