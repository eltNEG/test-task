import Row from '../components/Row'
import SecondaryText from '../components/SecondaryText'
import { useStateContext } from '../context/background/AppContext'
import {ScreensType} from '../enums'
import eth from '../ethereum'
import sucessLogo from '../images/success.png'

const Success = ({setScreen}: IScreen) => {
    const {state} = useStateContext()
    const {transactions} = state
    const lastTx = transactions[transactions.length-1]
    return (
        <div className="h-full w-full flex flex-wrap justify-center">
            <img className="mt-20 w-40 h-40" src={sucessLogo} alt="success" />
            <Row centerItems>Success</Row>
            <Row centerItems><SecondaryText text="You have successfully sent your funds" /></Row>
            <a target="_blank" rel="noreferrer" href={getEtherscanURL(eth.network, lastTx.id)} className="text-blue-600">View on etherscan</a>
            
            <div className="w-full mt-auto p-4 border-t">
                <button className="h-10 w-full rounded-md border-2 border-black shadow-md" onClick={() => setScreen(ScreensType.Home)}>Done</button>
            </div>
        </div>
    )
}

const getEtherscanURL = (network: string, txHash: string) => {
    return `https://${network !== 'mainnet' ? network+'.': ''}etherscan.io/tx/${txHash}`
}

export default Success
