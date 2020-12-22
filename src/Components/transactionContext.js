import React,{createContext, useReducer} from 'react';
import TransactionReducer from './transactionReducer';

const initialTransaction=[]

export const TransactionContext = createContext(initialTransaction);

export const TransactionProvider = ({children})=>{
    let [state,dispatch] = useReducer(TransactionReducer,[]);
    
    function addTransaction(transObj) {
        dispatch({
          type: "ADD_TRANSACTION",
          payload: transObj,
        });
      }
      function deleteTransaction(id) {
        dispatch({
          type: "DELETE",
          payload: id,
        });
      }
    
    return(
        <TransactionContext.Provider value={{
            transactions: state,addTransaction,deleteTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )
}
    // function addTransaction(transObj){
    //     dispatch({
    //         type: "ADD_TRANSACTION",
    //         payload:{
    //             amount:transObj.amount,
    //             desc:transObj.desc
    //         }});
    // }
    // function deleteTransaction(id) {
    //     dispatch({
    //       type: "DELETE",
    //       payload: id,
    //     });
    //   }
    //   function addTransaction(transObj) {
    //     dispatch({
    //       type: "ADD_TRANSACTION",
    //       payload: transObj,
    //     });
    //   }
    //   function deleteTransaction(id) {
    //     dispatch({
    //       type: "DELETE",
    //       payload: id,
    //     });
    //   }
