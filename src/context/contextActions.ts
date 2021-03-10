import { Transaction } from "../services/TransactionsService";

enum Actions {
  SET_TRANSACTIONS = 'SET_TRANSACTIONS',
  SET_STATE = 'SET_STATE',
  SET_ADDRESS = 'SET_ADDRESS',
  SET_BALANCE = 'SET_BALANCE',
}

export interface SetTransactionAction {
  type: Actions.SET_TRANSACTIONS
  payload: Transaction[]
}

export interface SetStateAction {
  type: Actions.SET_STATE
  payload: Partial<IAppState>
}
export interface SetAddressAction {
  type: Actions.SET_ADDRESS
  payload: string
}

export interface SetBalanceAction {
  type: Actions.SET_BALANCE
  payload: string
}

export default Actions;
