import { useStateContext } from '../context/background/AppContext'
import CardHeader from './CardHeader'
import SecondaryText from './SecondaryText'
import UserLogo from './UserLogo'
const Account = () => {
    const {state} = useStateContext()
    const {address} = state
    return (
      <CardHeader>
        <UserLogo />
        <div className="ml-4">
          <div>Account</div>
          <SecondaryText text={formatAddress(address)} />
        </div>
      </CardHeader>
    )
}

export default Account

const formatAddress = (address: string) => {
  return `${address.substring(0, 6)}...${address.substring(address.length-6, address.length)}`
}