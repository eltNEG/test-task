import ethLogo from '../images/ethLogo.png'
import SecondaryText from './SecondaryText'
import {TransactionType} from '../enums'
import { useStateContext } from '../context/background/AppContext'
import { ethers } from 'ethers'

const Transactions = () => {
    const {state} = useStateContext()
    const {transactions, address}  = state

    const txs = transactions.map(tx => ({
      txType: tx.from === address ? TransactionType.SEND_ETHER : TransactionType.RECV_ETHER,
      txTime: tx.timestamp ? (new Date(tx.timestamp*1000)).toLocaleString() : 'unconfirmed',
      txETHValue: ethers.utils.formatEther(tx.value.toString()),
      txUSDValue: Number(ethers.utils.formatEther(tx.value.mul(1840))).toFixed(2)
  }))
    return (
      <div className="h-15.5rem overflow-y-scroll mt-2">
        {txs.reverse().map((tx: any, index: any) => <Transaction key={`${tx.txTime+index}`} txType={tx.txType} txTime={tx.txTime} txETHValue={tx.txETHValue} txUSDValue={tx.txUSDValue} />)}
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