import './styles/header.css';
import HeaderButton from './HeaderButton.js';
import Search from './input.js';
import Modal from './Modal';
import { useState } from 'react';

export default function Header({logo}) {
    const [modalActive, setModalActive] = useState(false)
    return (
        <header>
          <Modal active={modalActive} setActive={setModalActive}/>
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
            <HeaderButton onClick={() => setModalActive(true)}>Войти</HeaderButton>
            <HeaderButton>Регистрация</HeaderButton>
          </div>
        </header>
    );
}