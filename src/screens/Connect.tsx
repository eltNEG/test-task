import { useStateContext } from "../context/background/AppContext"
import { ScreensType } from "../enums"
import eth from "../ethereum"


const Connect = ({setScreen}: IScreen) => {
    const {setState} = useStateContext()

    const handleConnect = async () => {
        await eth.connect(setState)
        setScreen(ScreensType.Home)
    }
    
    return (
        <div className="w-full h-full flex flex-wrap items-center px-4">
            <button onClick={handleConnect} className="bg-blue-500 text-white w-full h-10 rounded-md shadow-md">
                Connect Wallet
            </button>
        </div>
    )
}

export default Connect
