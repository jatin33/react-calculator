import React from 'react';
import './Screen.css';

class DisplayExpression extends React.Component {
    render() {
        return (
            <div className="display-block">
                {this.props.root.expression}
            </div>
        )
    }
}

export default DisplayExpression;