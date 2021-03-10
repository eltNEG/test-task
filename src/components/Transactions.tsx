import ethLogo from '../images/ethLogo.png'
import SecondaryText from './SecondaryText'
import {TransactionType} from '../enums'

const txs = [
    {
      txType: TransactionType.SEND_ETHER,
      txTime: "06-01-2021 19:00",
      txETHValue: "0.1",
      txUSDValue: "180"
    },
    {
      txType: TransactionType.RECV_ETHER,
      txTime: "06-01-2021 19:00",
      txETHValue: "0.1",
      txUSDValue: "180"
    },
    {
      txType: TransactionType.SEND_ETHER,
      txTime: "06-01-2021 19:00",
      txETHValue: "0.1",
      txUSDValue: "180"
    },
    {
      txType: TransactionType.RECV_ETHER,
      txTime: "06-01-2021 19:00",
      txETHValue: "0.1",
      txUSDValue: "180"
    },
    {
      txType: TransactionType.SEND_ETHER,
      txTime: "06-01-2021 19:00",
      txETHValue: "0.1",
      txUSDValue: "180"
    },
  ]
const Transactions = () => {
    return (
      <div className="h-15.5rem overflow-y-scroll mt-2">
        {txs.map((tx, index) => <Transaction key={`${tx.txTime+index}`} txType={tx.txType} txTime={tx.txTime} txETHValue={tx.txETHValue} txUSDValue={tx.txUSDValue} />)}
      </div>
    )
  }
  
  
  const Transaction = ({txType, txTime, txETHValue, txUSDValue} : ITransactionProps) => {
    const sign = txType ===  TransactionType.RECV_ETHER ? "+" : "-"
    return (
      <div className="flex flex-wrap w-full items-center py-2 border-b">
        <div className="h-10 w-10 p-3 rounded-full border flex justify-center items-center">
          <img className="h-5" src={ethLogo} alt="ethLogo" />
        </div>
        <div className="ml-3">
          <div>{txType}</div>
          <SecondaryText text={txTime} />
        </div>
        <div className="ml-auto text-right">
          <div>{sign + txETHValue} ETH</div>
          <SecondaryText text={`${txUSDValue} USD`} />
        </div>
      </div>
    )
  }

  export default Transactions