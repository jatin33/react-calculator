import parseExpression from '../utils/parseExpression';

const calciReducer = (state = { expression: '' }, actions) => {
    switch (actions.type) {
        case 'SET_EXPRESSION':
            state = {
                expression: state.expression + actions.payload
            }
            break;
        case 'CLR_EXPRESSION':
            state = {
                expression: ''
            }
            break;
        case 'CAL_EXPRESSION':
            state = parseExpression(state.expression);
            break;
    }
    return state;
}

export default calciReducer;