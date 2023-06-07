import './styles/header.css';
import LogButton from './header-button.js';
import Search from './input.js';


export default function Header({logo}) {
    return (
        <header>
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
            <LogButton>Войти</LogButton>
            <LogButton>Регистрация</LogButton>
          </div>
        </header>
    );
}