import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import menuData from './menuData'
import './App.css';
// import { act } from 'react-dom/test-utils';

export default function App() {

  const [foodMenu, setFoodMenu] = useState([])
  const [activePage, setActivePage] = useState('Home')

  useEffect(() => {
    setFoodMenu(menuData)
  }, [])

  const changeActivePage = (pageName) => {
    setActivePage(pageName)
  }

  return (
    <div className="App">
      <Header
        onclick={changeActivePage}
      // navLinks={['Home', 'Menu', 'Our Story', 'Events', 'Contact']}
      />
      <Main data={foodMenu} activePage={activePage} />
      <Footer />
    </div>
  );
}