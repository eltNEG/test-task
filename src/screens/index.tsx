import Connect from './Connect'
import Home from './Home'
import Send from './Send'
import Success from './Success'

const screenMap: {[key: number]: ({setScreen}: {setScreen: setScreenFunc}) => JSX.Element} = {
    0: Home,
    1: Send,
    2: Success,
    3: Connect
}
const Screen = ({screen, setScreen}: IScreens) => {
    const CurrenctScreen = screenMap[screen]
    return (
        <CurrenctScreen setScreen={setScreen} />
    )
}
export default Screen
