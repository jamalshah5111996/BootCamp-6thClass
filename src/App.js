import React from 'react';
import Child from './Components/Child.js';
import './App.css'
import {TransactionProvider} from '../src/Components/transactionContext.js'
function App() {

  return (

    <TransactionProvider>
      <Child/>
    </TransactionProvider>
  );
}

export default App;