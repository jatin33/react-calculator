const setExpression = (ops) => {
    return {
        type: 'SET_EXPRESSION',
        payload: ops
    }
}

export default setExpression;