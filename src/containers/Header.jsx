import Button from '../components/Button';
import Search from '../components/Search';
import LoginModal from '../components/LoginModal';


import { useState } from 'react';

import '../styles/header.css';





export default function Header({logo}) {
    const [loginActive, setLoginActive] = useState(false)
    return (
        <header>
          <LoginModal active={loginActive} setActive={setLoginActive}/>
          <div id='logowithbuttons'>
            <img src={logo} className='App-logo' alt='logo' />
            <div className='App-header-links'>
              <a href='./index.html'>Каталог</a>
              <a href='./index.html'>Преподавание</a>
            </div>
          </div>
          <div id='centersearch'>
            <Search placeholder='поиск'></Search>
          </div>
          <div className='App-header-buttons'>
            <Button type='header' onClick={() => setLoginActive(true)}>Войти</Button>
            <Button type='header'>Регистрация</Button>
          </div>
        </header>
    );
}