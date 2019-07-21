import React from 'react';
import Key from './Key';
import operators from '../utils/operators';
import operands from '../utils/operands';

class Keypad extends React.Component {
    handleClick = key => {
        switch (key) {
            case 'AC':
                this.props.clearExpression();
                break;
            case '=':
                this.props.calculateExpression(this.props.calciReducer.expression);
                break;
            default:
                this.props.setExpression(key);
                break;
        }
    }
    render() {
        return (
            <div>
                {
                    operands.concat(operators).map((ops) => <Key buttonKey={ops} key={ops} onKeyClick={this.handleClick} />)
                }
            </div>
        )
    }
}

export default Keypad;