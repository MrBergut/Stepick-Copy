import Input from './Input';
import Button from './Button';

import '../styles/loginModal.css';

export default function loginModal({active, setActive}) {
    return (
        <div className={active ? "login active" : "login"}>
            <div className='login_content' onClick={e => e.stopPropagation()}>
                <div className='flex-cls-button'>
                    <Button type='close' onClick={() => setActive(false)} >&times;</Button>
                </div>
                <div className='main-login-content'>
                    <h2>Вход</h2>
                    <p>Введите email</p>
                    <Input placeholder='Введите адрес электронной почты' type='email' />
                    <p>Введите пароль</p>
                    <Input placeholder='Введите пароль' type='password' />
                    <a href='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.meme-arsenal.com%2Fcreate%2Fmeme%2F4634771&psig=AOvVaw3Qq6NL8nxO5dR3pKwVyxPV&ust=1686487284396000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCLj8tfLcuP8CFQAAAAAdAAAAABAE' onClick={console.log('а кому сейчас легко')}>Забыл пароль</a>
                </div>
                <div className='for-confirm-button'>
                    <Button type='confirm' onClick={() => setActive(false)}>Войти</Button>
                </div>
            </div>
        </div>
    )
}