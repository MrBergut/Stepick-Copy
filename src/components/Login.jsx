import './styles/login.css'
import React from 'react'

export default function Login({active, setActive}) {
    return (
        <div className={active ? "login active" : "login"}>
            <div className='login_content' onClick={e => e.stopPropagation()}>
                <div className='flex-cls-button'>
                    <button className='cls-button' onClick={() => setActive(false)} >&times;</button>
                </div>
                <div className='main-login-content'>
                    <h2>Вход</h2>
                    <p>Введите email</p>
                    <input placeholder='Введите адрес электронной почты' type='email' />
                    <p>Введите пароль</p>
                    <input placeholder='Введите пароль' type='password' />
                    <a href='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.meme-arsenal.com%2Fcreate%2Fmeme%2F4634771&psig=AOvVaw3Qq6NL8nxO5dR3pKwVyxPV&ust=1686487284396000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCLj8tfLcuP8CFQAAAAAdAAAAABAE' onClick={console.log('а кому сейчас легко')}>Забыл пароль</a>
                </div>
                <div className='for-confirm-button'>
                    <button className='confirm-button' onClick={() => setActive(false)}>Войти</button>
                </div>
            </div>
        </div>
    )
}