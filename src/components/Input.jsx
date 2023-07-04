import '../styles/input.css';

export default function Input({placeholder='текст-подсказка', type='text', value, onChange}) {
    return (
        <div>
            <input placeholder={placeholder} type={type} value={value} onChange={onChange} />
        </div>
    )
}