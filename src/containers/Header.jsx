import Button from '../components/Button';
import Search from '../components/Search';
import LoginModal from '../components/LoginModal';


import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLoginState, setLoggedInEmail } from '../redux/actions';

import '../styles/header.css';


export default function Header({ logo }) {
    const [loginModalActive, setLoginModalActive] = useState(false);
    const loginState = useSelector(state => state.loginState);
    const loggedInEmail = useSelector(state => state.loggedInEmail);
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(setLoginState(false));
        dispatch(setLoggedInEmail(''));
    }

    return (
        <header>
          <LoginModal active={loginModalActive} setActive={setLoginModalActive}/>
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
            {loggedInEmail ? (
              <div className='user'>
                <p className='loggedInEmail'>{loggedInEmail}</p>
                <Button type='logout' onClick={handleLogout}>Выйти</Button>
              </div>
            ) : (
              <>
                <Button type='header' onClick={() => setLoginModalActive(true)}>Войти</Button>
                <Button type='header'>Регистрация</Button>
              </>
            )}
          </div>
        </header>
    );
}