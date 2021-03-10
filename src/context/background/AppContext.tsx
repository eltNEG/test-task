import { createContext, useContext } from 'react';
import { Transaction } from '../../services/TransactionsService';

export interface IAppState {
  transactions: Array<Transaction>;
  address: string;
  balance: string;
}

export const initAppState: IAppState =  {
  transactions: [],
  address: "",
  balance: "",
};

type ContextType = {
  state: IAppState,
  addTransaction: (transaction: Transaction) => void
  setState: (state: IAppState) => void
  setAddress: (address: string) => void
  setBalance: (balance: string) => void
}

const AppContext: React.Context<ContextType> = createContext<ContextType>({
  state: initAppState,
  addTransaction: () => {},
  setState: () => {},
  setAddress: () => {},
  setBalance: () => {}
});

export const useStateContext = () => {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider')
  }
  return context
}

export default AppContext;
