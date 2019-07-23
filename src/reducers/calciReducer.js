import parseExpression from '../utils/parseExpression';

const calciReducer = (state = { expression: '', total: 0 }, actions) => {
    switch (actions.type) {
        case 'SET_EXPRESSION':
            state = {
                ...state,
                expression: state.expression + actions.payload
            }
            break;
        case 'CLR_EXPRESSION':
            state = {
                ...state,
                expression: ''
            }
            break;
        case 'CAL_EXPRESSION':
            state = {
                ...parseExpression(state.expression),
            };
            break;
        default:
            break;
    }
    return state;
}

export { calciReducer };