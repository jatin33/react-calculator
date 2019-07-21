const calculateExpression = (expression) => {
    return {
        type: 'CAL_EXPRESSION',
        payload: expression
    }
}

export default calculateExpression;