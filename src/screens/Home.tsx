import Account from '../components/Account'
import Balance from '../components/Balance'
import Transactions from '../components/Transactions'

const Home = ({setScreen}: IScreen) => {
    return <div className="w-full h-full p-4">
        <Account />
        <Balance setScreen={setScreen} />
        <Transactions />
    </div>
}

export default Home
