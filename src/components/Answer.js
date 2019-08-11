import React from 'react';
import {SET_CURRENT_ANSWER, SET_ERROR} from '../reducers/types.js';

function Answer(props) {
    let classes = ['answer'];

    const handleClick = e => {
        props.dispatch({
            type: SET_CURRENT_ANSWER,
            currentAnswer: e.target.value,
        });
        props.dispatch({type: SET_ERROR, error: ''});
    };

    if (props.selected) {
        classes.push('selected');
    }
    return (
        <button
            value={props.letter}
            className={classes.join(' ')}
            onClick={handleClick}>
            <span className="letter">{props.letter}.</span> {props.answer}
        </button>
    );
}

export default Answer;
