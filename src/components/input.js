import './styles/input.css';
import searchlogo from './images/icons8search30.png';

export default function Search({placeholder = 'текст-подсказка'}) {
    return (
        <div id='search'>
              <input type='text' placeholder={placeholder}></input>
              <form action='./index.html' target='_top'>
                <button><img src={searchlogo} /></button>
              </form>
        </div>
    );
}
