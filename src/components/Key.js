import React from 'react';

const Key = ({ buttonKey, onKeyClick }) => {
    let handleClick = (e) => { onKeyClick(e.target.textContent) };
    return (
        <button onClick={handleClick}>
            {buttonKey}
        </button>
    );
}

export default Key;