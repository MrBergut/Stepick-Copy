import Input from './Input';
import Button from './Button';

import { useState, useCallback } from 'react';


import '../styles/search.css';
import searchlogo from '../assets/images/icons8search30.png';

export default function Search({}) {
    const [inputSearch, setInputSearch] = useState('');
    
    const logInputSearch = useCallback(() => {
        console.log(`Current request: ${inputSearch}`);
    }, [inputSearch]);
    const handleInputChange = (e) => {
        setInputSearch(e.target.value);
        logInputSearch();
    };
    const confirmSearch = () => {
        console.log(`request: ${inputSearch}`)
    };

    return (
        <div id='search'>
            <Input 
                placeholder='поиск'
                type='text'
                value={inputSearch}
                onChange={handleInputChange} />
                <Button type='search' onClick={confirmSearch}>
                    <img src={searchlogo} alt='saerchlogo' />
                </Button>    
        </div>
    );
}