import Account from '../components/Account'
import Balance from '../components/Balance'
import Transactions from '../components/Transactions'

const Home = ({setScreen}: IScreen) => {
    return <div className="w-full h-full p-4">
        <Account />
        <Balance ethBalance={"0.1"} usdBalance={"180"} setScreen={setScreen} />
        <Transactions />
    </div>
}

export default Home
