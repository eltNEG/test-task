import { ethers } from "ethers"
import { useState } from "react"
import { useStateContext } from "../context/background/AppContext"
import { ScreensType } from "../enums"
import eth from "../ethereum"
import Row from "./Row"

const TxForm = ({setScreen}: ITxForm) => {
    const {state, addTransaction} = useStateContext()
    const {balance, address} = state

    const [recipient, setRecipient] = useState("")
    const [amount, setAmount] = useState("")

    const handleCancel = () => setScreen(ScreensType.Home)
    const handleNext = async () => {
        if(!recipient || !amount) {
            alert("Balance and address fields are required")
            return
        }
        if((ethers.BigNumber.from(balance)).lt(ethers.BigNumber.from(ethers.utils.parseEther(amount)))){
            alert('Insufficient balance')
            return
        }
        const txHash = await eth.sendEther(recipient, amount)
        addTransaction({from: address, to: recipient, value: ethers.BigNumber.from(ethers.utils.parseEther(amount)), id: txHash, timestamp: 0})
        setScreen(ScreensType.Success)
    }

    return (
        <div className="flex flex-wrap flex-col justify-between h-600px-4rem pt-4">
            <div className="px-4">
                <TxFormField label="Recipient" placeholder="Enter Public Address" value={recipient} onChange={(e: any) => setRecipient(e.target.value)} />
                <TxFormField label="Amount" placeholder="Enter Amount" className="mt-7" value={amount} onChange={(e: any) => setAmount(e.target.value)} />
            </div>
            <Row className="flex flex-wrap justify-between border-t p-4">
                <button onClick={handleCancel} className="w-5/12 h-10 rounded-md border shadow">Cancel</button>
                <button onClick={handleNext} className="w-5/12 h-10 rounded-md border shadow text-white bg-blue-400">Send</button>
            </Row>
        </div>
    )
}
export default TxForm

const TxFormField = ({label, placeholder, value, onChange, className}: ITxFormField) => {
    return (
        <div className={`w-full ${className}`}>
            <label className="text-gray-600 ">{label}</label>
            <input required className="placeholder-gray-500 w-full pb-1 mt-1 border-b-2 border-gray-700 outline-none focus:outline-none" onChange={onChange} value={value} placeholder={placeholder}/>
        </div>
    )
}
