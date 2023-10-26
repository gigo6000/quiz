import React from 'react';
import { Dispatch } from 'redux';
import { SET_CURRENT_ANSWER, SET_ERROR } from '../reducers/types';

interface AnswerProps {
  dispatch: Dispatch;
  selected: boolean;
  letter: string;
  answer: string;
}

const Answer: React.FC<AnswerProps> = (props) => {
  const classes = ['answer'];

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    props.dispatch({
      type: SET_CURRENT_ANSWER,
      currentAnswer: e.currentTarget.value,
    });
    props.dispatch({ type: SET_ERROR, error: '' });
  };

  if (props.selected) {
    classes.push('selected');
  }

  return (
    <button
      value={props.letter}
      className={classes.join(' ')}
      onClick={handleClick}
    >
      <span className="letter">{props.letter}.</span> {props.answer}
    </button>
  );
};

export default Answer;