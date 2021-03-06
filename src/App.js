import React from 'react'
import { BrowserRouter,Route } from "react-router-dom"
import './scss/App.scss'
import Home from './pages/Home' 
import Hats from './pages/Hats'
import ScrollToTop from './components/common/scrollToTop'
import Item from './pages/Item'
import AddItems from './pages/AddItems'

function App() {
  return (
        <BrowserRouter>
          <Route path ="/" component={Home} exact />
          <ScrollToTop>
          <Route path ="/Hats" component={Hats} exact />
          <Route path ="/Hats/:id" component={Item} />
          <Route path ="/txisyvelirozmarinit1." component={AddItems}/>
          </ScrollToTop>
        </BrowserRouter>
  );
}

export default App;

