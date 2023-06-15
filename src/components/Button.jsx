import '../styles/button.css';

export default function Button({children = '', type = '', onClick}) {
    return (
        <button className={`button ${type}`} onClick={onClick}>
            {children}
        </button>        
    );
}