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
import { AuthRoute } from './authService/PrivateRoute';
import { Role } from './helpers/role';
import { EditProfile } from './view/EditProfile/EditProfile';
import { AdminPage } from './view/AdminPage/AdminPage/AdminPage';
import { OrderSummary } from './view/ShoppingCart/OrderSummary';

function App() {


  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<UserPage />} exact/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="/pizzeria" element={<UserPage />} />
        <Route path="/pizzeria/dish/:id" element={<DishPage />} />
        <Route path="/pizzeria/shopping_cart" element={<ShoppingCart />} />
      </Routes> */}
      <Routes>
        <Route exact path="/"
          element={<AuthRoute component={UserPage} role={Role.User} />}>
        </Route>
        <Route path="/login"
          element={<Login />}>
        </Route>
        <Route path="/register"
          element={<RegisterPage />}>
        </Route>
        <Route path="/pizzeria"
          element={<AuthRoute component={UserPage} role={Role.User} />}>
        </Route>
        <Route path="/edit/profile"
          element={<AuthRoute component={EditProfile} role={Role.User} />}>
        </Route>
        <Route path="/pizzeria/dish/:id"
          element={<AuthRoute component={DishPage} role={Role.User} />}>
        </Route>
        <Route path="/pizzeria/shopping_cart"
          element={<AuthRoute component={ShoppingCart} role={Role.User} />}>
        </Route>
        <Route path="/pizzeria/shopping_cart/summary"
          element={<AuthRoute component={OrderSummary} role={Role.User} />}>
        </Route>
        <Route path="/admin"
          element={<AuthRoute component={AdminPage} role={Role.Admin} />}>
        </Route>
        <Route path="*" element={<Login />} />


      </Routes>
    </div>
  );
}

export default App;
