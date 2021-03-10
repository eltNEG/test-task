import CardHeader from './CardHeader'
import SecondaryText from './SecondaryText'
import UserLogo from './UserLogo'
const Account = () => {
    return (
      <CardHeader>
        <UserLogo />
        <div className="ml-4">
          <div>Account 1</div>
          <SecondaryText text="0xaddress" />
        </div>
      </CardHeader>
    )
}

export default Account