import { ethers } from "ethers";
import { useStateContext } from "../context/background/AppContext";
import CardHeader from "./CardHeader";

const SendHeader = () => {
    const {state} = useStateContext()
    const {balance} = state
    return (
        <CardHeader className="border-b justify-between">
            <span className="pl-4">Send Ether</span>
            <span className="pr-4">Balance: {(Number(ethers.utils.formatEther(balance))).toFixed(6)} ETH</span>
        </CardHeader>
    )
}

export default SendHeader