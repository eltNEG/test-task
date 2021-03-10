import { useStateContext } from '../context/background/AppContext'
import Row from './Row'
const Balance = ({setScreen}: IBalanceProps) => {
    const {state} = useStateContext()
    const {balance} = state
    const ethBalance = (Number(balance)/1e18).toFixed(6)
    const usdBalance = (Number(ethBalance) * 1840).toFixed(2)
    return (
      <div className="flex flex-wrap bg-aliceblue justify-center h-60 py-8 rounded-md">
        <Row centerItems>{ethBalance} ETH</Row>
        <Row centerItems>${usdBalance} USD</Row>
        <button onClick={() => setScreen(1)} className="rounded-full h-14 w-14 bg-blue-400 text-white font-extrabold text-2xl">↑</button>
        <Row centerItems>Send</Row>
      </div>
    )
  }
  export default Balance