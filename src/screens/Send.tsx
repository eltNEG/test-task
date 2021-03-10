import SendHeader from '../components/SendHeader'
import TxForm from '../components/TxForm'

const Send = ({setScreen}: IScreen) => {
    return(
        <>
            <SendHeader />
            <TxForm setScreen={setScreen} />
        </>
    )
}
export default Send
