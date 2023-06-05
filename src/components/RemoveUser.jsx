import { useEffect, useRef, useState } from 'react'
import './styles/removeUser.css'

const RemoveUser = ({ removedUser, setFormDelete, formDelete, deletedNameUser }) => {


    //! Para cerrar Create/Update users al tocar el ≈background ()
    const formRef = useRef(null)

    const handleClick = (e) => {
        if (!formRef.current.classList.contains('close')) {
            if (!e.target.closest('.form')) {
                handleExit()
            }
        }
    }

    const handleExit = () => {
        setFormDelete(true)
    }

    return (
        <div className={`form-container ${formDelete ? 'close' : ''}`} ref={formRef} onClick={handleClick}>
            <article className='form'>
                <span className='form__exit' onClick={handleExit}> <i className='bx bx-arrow-back'></i></span>

                <h3 className='form__title'> Eliminar usuario </h3>
                <h4 className='form__message'>User <span>{removedUser}</span> was removed</h4>
                <button className='form__btn' onClick={handleExit}> Accept </button>
            </article>
        </div>
    )
}

export default RemoveUser 