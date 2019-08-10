import React from 'react';
import './Key.css';
import operators from '../../utils/operators';

const Key = ({ buttonKey, onKeyClick }) => {
    let handleClick = (e) => { onKeyClick(e.target.textContent) };

    return (
        <button
            className={operators.includes(buttonKey) ? "operator-buttons" : "button"}
            onClick={handleClick}>
            {buttonKey}
        </button>
    );
}

export default Key;