import React from 'react';

const DisplayExpression = (props) => {
    return (
        <input type='text' value={props.expression} readOnly />
    )
}

export default DisplayExpression;