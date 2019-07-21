import React from 'react';
import DisplayExpression from './components/screen/DisplayExpression';
import setExpression from './actions/setExpression';
import clearExpression from './actions/clearExpression';
import calculateExpression from './actions/calculateExpression';
import { connect } from 'react-redux';
import Keypad from './components/Keypad';

class App extends React.Component {
  render() {
    return (
      <div>
        <DisplayExpression {...this.props} />
        <Keypad {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setExpression: (ops) => {
      dispatch(setExpression(ops));
    },
    clearExpression: () => {
      dispatch(clearExpression());
    },
    calculateExpression: (expression) => {
      dispatch(calculateExpression(expression));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);