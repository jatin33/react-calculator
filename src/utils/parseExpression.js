import * as math from 'mathjs';

const parseExpression = (expression) => {
    // this function reads the given expression and returns the resulting value
    const result = {};
    try {
        result.total = math.evaluate(handleExpressionEndsWithOperators(checkIfOnlyOperators(expression))) || '';
        result.expression = String(result.total);
    } catch (err) {
        result.total = 0;
        result.expression = '';
    }
    return result;
}

function handleExpressionEndsWithOperators(expression) {
    let newExpression = '';
    if (expression.endsWith('*') || expression.endsWith('/')) {
        newExpression = expression + '1';
    } else if (expression.endsWith('+') || expression.endsWith('-') || expression.endsWith('.')) {
        newExpression = expression + '0';
    } else {
        newExpression = expression;
    }
    return newExpression;
}

function checkIfOnlyOperators(expression) {
    return expression === '+' || expression === '-' || expression === '*' || expression === '/' ? '' : expression;
}
export default parseExpression;