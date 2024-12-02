import React, { useState } from 'react';
import Login from './components/loginpopup/Login';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AboutUs from './components/aboutus/AboutUs';
import ContactUs from './components/contact/ContactUs';


const App = () => {
  const [login, setLogin] = useState(false);
  return (
    <>
      {login ? <Login setLogin={setLogin} /> : <></>}

      <Routes>
        <Route path='/' element={<Header setLogin={setLogin} login={login} />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<ContactUs />} />
      </Routes>

    </>
  )
}

export default App;
