import { StartPage } from './view/startPage/StartPage';
import React, { useState} from 'react';
import {UserPage} from './view/userPage/UserPage';
import routes from './utils/routes';
import { Login } from './components/Login/Login';
import './AppStyles.css'

import {Routes, Route} from 'react-router-dom';
import { RegisterPage } from './view/RegisterPage/RegisterPage';
import { DishPage } from './view/DishPage/DishPage';
import { ShoppingCart } from './view/ShoppingCart/ShoppingCart';

function App() {

  // const [isLogged, setIsLogged] = useState(false);

  return (
    <div className="App">
      <Routes>
        {/* {routes.map((element)=> (
          <Route path={element.url} element={element.element}/>
        ))} */}
        <Route path="/" element={<UserPage />} exact/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/pizzeria" element={<UserPage />} />
        <Route path="/pizzeria/dish/:id" element={<DishPage />} />
        <Route path="/pizzeria/shopping_cart" element={<ShoppingCart />} />
      </Routes>
    </div>
  );
}

export default App;
