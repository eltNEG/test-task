import { useEffect, useState } from 'react';
import Screen from './screens'
import eth from './ethereum';
import { useStateContext } from './context/background/AppContext';

const App = () => {
  const [screen, setScreen] = useState(3)
  const { setState } = useStateContext()
  useEffect(() => {
    (async () => {
      const isUnlocked = await eth.init(setState)
      if (isUnlocked) (
        setScreen(0)
      )
    })()
    // eslint-disable-next-line 
  }, [])
  return (
    <div className="mt-6 md:mt-20 mx-auto md:shadow-md w-96 h-600px md:rounded-md">
      <Screen screen={screen} setScreen={(_screen) => setScreen(_screen)} />
    </div>
  );
};

export default App;
