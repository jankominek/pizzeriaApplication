import { StartPage } from './view/startPage/StartPage';
import React, { useState} from 'react';
import {UserPage} from './view/userPage/UserPage';
function App() {

  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className="App">
        <UserPage  />
    </div>
  );
}

export default App;
