import React,{useContext, useState} from 'react';
import {TransactionContext} from './transactionContext.js'

function Child() {

    let {transactions,addTransaction}=useContext(TransactionContext);
    let[newDesc,setDesc] = useState("");
    let[newAmount,setAmount] = useState("");

    const handleAddition= (event)=>{
      event.preventDefault();
      if(Number(newAmount) ===0){
      alert("Please Enter Any Value Less or Greater than '0'")
    return false;
  }
      console.log(newDesc,newAmount);
      addTransaction({
        amount: Number(newAmount),
        desc: newDesc
      })
      setDesc('');
      setAmount(0);
    }

    const getIncome = ()=>{
      let income =0;
      for (var i= 0; i < transactions.length; i++){
        if(transactions[i].amount > 0)
        income = income + transactions[i].amount
      }
      return income;
    }

    const getExpense =() =>{
      let expense =0;
      for(var i=0; i < transactions.length; i++){
        if(transactions[i].amount < 0)
        expense = expense + transactions[i].amount
      }
      return expense;
    }
    let yourBalance=getIncome() + getExpense()

  return (
    <div className="container">
      <h1 className="textCenter">Expence Tracker</h1>
      <h3>Your Balance <br/> ${yourBalance}</h3>

      <div className="expenceContainer">
          <h3>INCOME <br/>${getIncome()}</h3>
          <h3>EXPENSE <br/>${getExpense()}</h3>
      </div>
      <h3>History</h3>
      <hr/>

      <ul className="transactionList">
          {transactions.map((transObj,ind)=>{
              return(
            <li key={ind}>
                <span>{transObj.desc}</span>
                <span>${transObj.amount}</span>
            </li>
              )})}
      </ul>

      <h3>Add new transaction</h3>
      <hr/>
      <form className="transactionForm" onSubmit={handleAddition}>
          <label>
              Enter Discription <br/>
              <input value={newDesc} type="text" placeholder="Amount Discription" onChange={(ev)=>setDesc(ev.target.value)} required/>
          </label>

          <br/>

          <label>
              Enter Amount <br/>
              <input value={newAmount} type="Number" placeholder="Amount" onChange={(ev)=>setAmount(ev.target.value)} required/>
          </label>
          <br/>

          <input className="addTransaction" type="Submit" value="Add Transaction"/>

      </form>

    </div>
  );
}

export default Child;
