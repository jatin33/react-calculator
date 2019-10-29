import React from 'react';
import DisplayExpression from './components/screen/Screen';
import setExpression from './actions/setExpression';
import clearExpression from './actions/clearExpression';
import calculateExpression from './actions/calculateExpression';
import { connect } from 'react-redux';
import Keypad from './components/Keypad/Keypad';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="title-banner"><h3>React Calculator</h3></div>
        <div className="calculator-box">
          <DisplayExpression {...this.props} />
          <Keypad {...this.props} />
          <div className="footer">By <a href="https://linkedin.com/in/jatinpanjwani">Jatin Panjwani</a></div>
        </div>
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