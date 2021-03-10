import CardHeader from "./CardHeader";

const SendHeader = () => {
    return (
        <CardHeader className="border-b justify-between">
            <span className="pl-4">Send Ether</span>
            <span className="pr-4">Balance: 0.1 ETH</span>
        </CardHeader>
    )
}

export default SendHeader