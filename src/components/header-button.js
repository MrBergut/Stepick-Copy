import './styles/header-button.css'


export default function LogButton({children = 'кнопка'}) {
    return (
        <button id='header-button'>
            {children}
        </button>
    );
}