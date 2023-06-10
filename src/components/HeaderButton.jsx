import '../styles/header-button.css'


export default function HeaderButton({children = 'кнопка', onClick}) {
    return (
        <button id='header-button' onClick={onClick}>
            {children}
        </button>
    );
}