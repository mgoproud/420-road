import React, { useState, useEffect } from 'react';

import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';

import './App.css';


export default function App() {

  // const [foodMenu, setFoodMenu] = useState([])
  const [activePage, setActivePage] = useState(window.sessionStorage.getItem('active-page') || 'Home')


  useEffect(() => {
    window.sessionStorage.setItem('active-page', activePage)
  }, [activePage])


  const changeActivePage = (pageName) => {
    setActivePage(pageName)
  }


  return (
    <div className="App">
      <Header
        onclick={changeActivePage}
      // navLinks={['Home', 'Menu', 'Our Story', 'Events', 'Contact']}
      />
      <Main 
      // data={foodMenu} 
      activePage={activePage} 

      />
      <Footer />
    </div>
  );
}