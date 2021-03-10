import React, { useReducer } from 'react';
import AppContext, {IAppState, initAppState} from './AppContext';
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

  return (
    <AppContext.Provider
      value={{
        state,
        setState,
        addTransaction,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
