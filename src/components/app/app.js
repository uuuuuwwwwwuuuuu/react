import React from 'react';
import {MainPage, CartPage} from '../pages';
import AppHeader from '../app-header';
import { Route, Routes } from 'react-router-dom';

import Background from './food-bg.jpg';

const App = () => {
    return (
        <div style={{background: `url(${Background}) center center/cover no-repeat`}} className="app">
            <AppHeader total={50}/>
            <Routes>
                <Route 
                    path='/'
                    Component={MainPage}
                    exact/>
                <Route 
                    path='/cart'
                    Component={CartPage}
                    exact/>
            </Routes>
            <MainPage/>
            <CartPage/>
        </div>
    )
}

export default App;