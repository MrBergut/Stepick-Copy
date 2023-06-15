import '../styles/input.css';

export default function Input({placeholder='текст-подсказка', type='text'}) {
    return (
        <div>
            <input placeholder={placeholder} type={type} />
        </div>
    )
}