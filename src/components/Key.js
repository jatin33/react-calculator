import React from 'react';
import './Key.css';

const Key = ({ buttonKey, onKeyClick }) => {
    let handleClick = (e) => { onKeyClick(e.target.textContent) };

    return (
        <button 
        className="button"
        onClick={handleClick}>
            {buttonKey}
        </button>
    );
}

export default Key;