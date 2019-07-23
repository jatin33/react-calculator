const parseExpression = (expression) => {
    // this function reads the given expression and returns the resulting value
    const result = {};
    result.total = eval(expression);
    result.expression = new String(result.total);
    return result;
}

export default parseExpression;