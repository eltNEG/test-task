import React, { useReducer } from 'react';
import AppContext, {initAppState} from './AppContext';
import AppReducer from './AppReducer';
import Actions from '../contextActions';
import { Transaction } from '../../services/TransactionsService';



const AppState = (props: any) => {
  const [state, dispatch] = useReducer(AppReducer, initAppState);

  // Set app state
  const setState = (newState: IAppState) => {
    dispatch({
      type: Actions.SET_STATE,
      payload: newState,
    });
  };
  
  // TODO: Complete the addTransaction method
  const addTransaction = (transaction: Transaction) => {
    dispatch({
      type: Actions.SET_TRANSACTIONS,
      payload: [...state.transactions, transaction],
    });
  }
  
  const setAddress = (address: string) => {
    dispatch({
      type: Actions.SET_ADDRESS,
      payload: address,
    });
  }
  
  const setBalance = (balance: string) => {
    dispatch({
      type: Actions.SET_BALANCE,
      payload: balance,
    });
  }

  return (
    <AppContext.Provider
      value={{
        state,
        setState,
        addTransaction,
        setAddress,
        setBalance,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
