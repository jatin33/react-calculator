import React from 'react';

class DisplayExpression extends React.Component {
    render() {
        return (
            <div>
                {this.props.root.expression}
            </div>
        )
    }
}


export default DisplayExpression;