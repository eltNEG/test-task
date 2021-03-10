import AppState from './context/background/AppState';
import { useState } from 'react';
import Screen from './screens'

const App = () => {
  const [screen, setScreen] = useState(3)
  return (
    <AppState>
      <div className="mt-20 mx-auto shadow-md w-96 h-600px rounded-md">
        <Screen screen={screen} setScreen={(_screen) => setScreen(_screen)}/>
      </div>
    </AppState>
  );
};

export default App;
