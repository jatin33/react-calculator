import * as math from 'mathjs';

const parseExpression = (expression) => {
    // this function reads the given expression and returns the resulting value
    const result = {};
    result.total = math.evaluate(expression);
    console.log(math.evaluate(expression));
    result.expression = String(result.total);
    return result;
}

export default parseExpression;