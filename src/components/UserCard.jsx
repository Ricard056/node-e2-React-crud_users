import './styles/userCard.css'

import React, { useState } from 'react'

const UserCard = ({ user, deleteUserById, setUpdateInfo, setFormDelete, formDelete, setdeletedNameUser }) => {

    //! handleDelete version 1
    // const handleDelete = () => {
    //     deleteUserById(user.id)  // const urlDelete = `${url}${id}/`
    // }

    //! set datos del usuario par editar con boton "Update User"
    const handleUpdate = () => {
        setUpdateInfo(user)
    }

    //! Remover User y Mensaje al borrar User
    // const [showRemoveUser, setShowRemoveUser] = useState(false)
    const removedUser = `${user.first_name} ${user.last_name}`
    
    //! handleDelete version 2
    const handleDelete = () => {
        setdeletedNameUser(removedUser)
        deleteUserById(user.id)  //! Comentar para testear block de mensaje
        setFormDelete(false)
    }





    return (
        <article className='user'>
            <h2 className='user__name'>{user.first_name} {user.last_name} </h2>
            <ul className='user__list'>
                <li className='user__item'>
                    <span className='user__label'>Email: </span>
                    <span className='user__value'>{user.email}</span>
                </li>
                <li className='user__item'>
                    <span className='user__label'>Birthday: </span>
                    <span className='user__value'>{user.birthday}</span>
                </li>
            </ul>
            <footer className='user__footer'>
            <button className='user__btn user__delete' onClick={handleDelete}>
                    <i className="bx bx-trash user__icon" ></i>
                </button>
                <button className='user__btn user__update' onClick={handleUpdate}>
                    <i className="bx bx-edit-alt user__icon"></i>
                </button>
            </footer>
        </article>
    )
}

export default UserCard 