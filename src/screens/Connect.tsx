import { ScreensType } from "../enums"


const Connect = ({setScreen}: IScreen) => {
    return (
        <div className="w-full h-full flex flex-wrap items-center px-4">
            <button onClick={() => setScreen(ScreensType.Home)} className="bg-blue-500 text-white w-full h-10 rounded-md shadow-md">
                Connect Wallet
            </button>
        </div>
    )
}

export default Connect
