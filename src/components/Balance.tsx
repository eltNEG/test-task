import { useStateContext } from '../context/background/AppContext'
import Row from './Row'
const Balance = ({setScreen}: IBalanceProps) => {
    const {state} = useStateContext()
    const {balance} = state
    const ethBalance = (Number(balance)/1e18).toFixed(6)
    const usdBalance = (Number(ethBalance) * 1840).toFixed(2)
    return (
      <div className="flex flex-wrap bg-aliceblue justify-center h-60 py-6 rounded-md">
        <Row centerItems className="font-bold text-3xl">{ethBalance} ETH</Row>
        <Row centerItems className="text-gray-600">${usdBalance} USD</Row>
        <button onClick={() => setScreen(1)} className="w-14 outline-none focus:outline-none">
          <Row centerItems className="rounded-full h-14 w-14 flex items-center bg-blue-400 text-white font-extrabold text-2xl">↑</Row>
          <Row centerItems className="mt-4">Send</Row>
        </button>
      </div>
    )
  }
  export default Balance