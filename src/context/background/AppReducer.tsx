import Actions, { SetStateAction, SetTransactionAction, SetAddressAction, SetBalanceAction } from '../contextActions';

type AppAction = SetTransactionAction | SetStateAction | SetAddressAction | SetBalanceAction; 

const appReducer = (
  state: IAppState,
  action: AppAction
): IAppState => {
  console.log("++++++")
  switch (action.type) {
    case Actions.SET_STATE:
      return {
        ...state,
        ...action.payload
      }
    case Actions.SET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
      };
    case Actions.SET_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    case Actions.SET_BALANCE:
      return {
        ...state,
        balance: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
