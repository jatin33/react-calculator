import React from 'react';
import Key from './components/Key';
import operators from './utils/operators';
import operands from './utils/operands';

function App() {

  return (
    <div>
      {
        operands.concat(operators).map((ops) => <Key data={ops} />)
      }
      
    </div>
  );
}

export default App;
