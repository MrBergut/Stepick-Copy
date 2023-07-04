import Input from './Input';
import Button from './Button';



import '../styles/search.css';
import searchlogo from '../assets/images/icons8search30.png';

export default function Search({}) {
    

    return (
        <div id='search'>
            <Input placeholder='поиск' />
            <form action='./index.html' target='_top'>
                <Button type='search'>
                    <img src={searchlogo} alt='saerchlogo' />
                </Button>    
            </form>
        </div>
    );
}