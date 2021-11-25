import { StartPage } from './view/startPage/StartPage';
import React, { useState} from 'react';
import {UserPage} from './view/userPage/UserPage';
import routes from './utils/routes';
import { Login } from './components/Login/Login';
import { Register } from './components/Register/Register';

import {Routes, Route} from 'react-router-dom';

function App() {

  const [isLogged, setIsLogged] = useState(false);

  return (
    <div className="App">
      {/* <Routes>
        {routes.map((element)=> (
          <Route path={element.url} element={element.element} />
        ))}
      </Routes> */}
      <UserPage />
    </div>
  );
}

export default App;
