import './styles/modal.css'
import React from 'react'

export default function Modal({active, setActive}) {
    return (
        <div className={active ? "modal active" : "modal"}>
            <div className='modal_content' onClick={e => e.stopPropagation()}>
                <button className='cls-button' onClick={() => setActive(false)} >&times;</button>
            </div>
        </div>
    )
}