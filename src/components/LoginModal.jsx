import Input from './Input';
import Button from './Button';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLoginState, setLoggedInEmail } from '../redux/actions';

import '../styles/loginModal.css';

export default function LoginModal({active, setActive}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState('Почта не может быть пустой')
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым')
    const [formValid, setFormValid] = useState(false)
    
    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError])
    
    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }





    const dispatch = useDispatch();
    const loginState = useSelector(state => state.loginState);

    const handleInputEmailChange = (e) => {
        setEmail(e.target.value);
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некоректный адрес электроной почты')
        } else {
            setEmailError('')
        }
    }
    const handleInputPasswordChange = (e) => {
        setPassword(e.target.value);
        if(e.target.value.lenght < 3 || e.target.value.lenght > 32) {
            setPasswordError('Пароль должен быть больше 3 и меньше 32 символов')
        } else {
            setPasswordError('')
        }
    }
    
    const confirmLogin = () => {
        console.log('Email:', email);
        console.log('Password:', password);
        setActive(false);
        dispatch(setLoggedInEmail(email));
        dispatch(setLoginState(true));
    }

    

    return (
        <div className={active ? "login active" : "login"}>
            <div className='login_content' onClick={e => e.stopPropagation()}>
                <div className='flex-cls-button'>
                    <Button type='close' onClick={() => setActive(false)} >&times;</Button>
                </div>
                <div className='main-login-content'>
                    <h2>Вход</h2>
                    <p>Введите email</p>
                    {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}
                    <Input 
                        onBlur={e => blurHandler(e)}
                        name='email'
                        placeholder='Введите адрес электронной почты' 
                        type='email'
                        value={email}
                        onChange={handleInputEmailChange} />
                    <p>Введите пароль</p>
                    {(passwordDirty && passwordError) && <div style={{color:'red'}}>{passwordError}</div>}
                    <Input 
                        onBlur={e => blurHandler(e)}
                        name='password'
                        placeholder='Введите пароль' 
                        type='password'
                        value={password}
                        onChange={handleInputPasswordChange} />
                    <a href='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.meme-arsenal.com%2Fcreate%2Fmeme%2F4634771&psig=AOvVaw3Qq6NL8nxO5dR3pKwVyxPV&ust=1686487284396000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCLj8tfLcuP8CFQAAAAAdAAAAABAE'>Забыл пароль</a>
                </div>
                <div className='for-confirm-button'>
                    <Button disabled={!formValid} type='confirm' onClick={confirmLogin}>Войти</Button>
                </div>
            </div>
        </div>
    )
}