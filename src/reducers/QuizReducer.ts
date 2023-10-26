import {
    SET_ANSWERS,
    SET_CURRENT_QUESTION,
    SET_CURRENT_ANSWER,
    SET_ERROR,
    SET_SHOW_RESULTS,
    RESET_QUIZ,
} from './types';

interface QuizState {
    currentAnswer: string;
    currentQuestion: number;
    error: string;
    showResults: boolean;
    answers: string[];
}

type QuizAction =
    | { type: typeof SET_CURRENT_ANSWER; currentAnswer: string }
    | { type: typeof SET_CURRENT_QUESTION; currentQuestion: number }
    | { type: typeof SET_ERROR; error: string }
    | { type: typeof SET_SHOW_RESULTS; showResults: boolean }
    | { type: typeof SET_ANSWERS; answers: string[] }
    | { type: typeof RESET_QUIZ };

const initialState: QuizState = {
    currentAnswer: '',
    currentQuestion: 0,
    error: '',
    showResults: false,
    answers: [],
};

function quizReducer(state: QuizState = initialState, action: QuizAction): QuizState {
    switch (action.type) {
        case SET_CURRENT_ANSWER:
            return {
                ...state,
                currentAnswer: action.currentAnswer,
            };
        case SET_CURRENT_QUESTION:
            return {
                ...state,
                currentQuestion: action.currentQuestion,
            };
        case SET_ERROR:
            return {
                ...state,
                error: action.error,
            };
        case SET_SHOW_RESULTS:
            return {
                ...state,
                showResults: action.showResults,
            };
        case SET_ANSWERS:
            return {
                ...state,
                answers: action.answers,
            };
        case RESET_QUIZ:
            return {
                ...state,
                answers: [],
                currentQuestion: 0,
                currentAnswer: '',
                showResults: false,
                error: '',
            };
        default:
            return state;
    }
}

export default quizReducer;