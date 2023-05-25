import React from 'react';
import './App.css';
import Header from "./components/header/header";
import {Route, Routes} from "react-router-dom";
import Product from "./components/Product/product";
import Basket from "./components/basket/basket";
import Favorites from "./components/page/favorites/favorites";

function App() {



  return (
    <div className="App">
     <Header/>
        <Routes>
            <Route path={"/basket"} element={ <Basket/> }/>
            <Route path={"/favorites"} element={ <Favorites/> }/>
        </Routes>
        <Product/>
    </div>
  );
}

export default App;
