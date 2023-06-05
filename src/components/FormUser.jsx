import { useForm } from 'react-hook-form'
import defaultValues from '../utils/defaultsValues'
import { useEffect, useRef } from 'react'
// import './styles/userCard.css'
import './styles/formUser.css'

const FromUser = ({ createNewUser, updateInfo, updateUserById, setUpdateInfo, setFormClose, formClose }) => {

    const { register, handleSubmit, reset } = useForm()

    useEffect(() => {
        reset(updateInfo)
    }, [updateInfo])


    const submit = data => {  //NOTA 2 // console.log(data) //
        if (updateInfo) {
            //Update
            updateUserById(updateInfo.id, data)  // const updateUserById = (id, data) => { ... }
            setUpdateInfo()
        } else {
            //Create
            createNewUser(data)
        }
        reset(defaultValues)
    }

    


    //! Para abrir o cerrar el Create New User
    const handleExit = () => {
        setFormClose(true)
    }

    //! Para cerrar Create/Update users al tocar el ≈background ()
    const formRef = useRef(null);

    const handleClick = (e) => {
        if (!formRef.current.classList.contains('close')) {
            if (!e.target.closest('.form')) { // if (!e.target.classList.contains('form')) {   //NO
                handleExit();
            }
        }
    };



    return (
        <div className={`form-container ${formClose ? 'close' : ''}`} ref={formRef} onClick={handleClick}>

            <form className='form' onSubmit={handleSubmit(submit)}>
                <h3 className='form__title'>{updateInfo ? 'Update User Information' : 'Create New User'}</h3>
                <span className='form__exit' onClick={handleExit}>
                    <i className='bx bx-arrow-back'></i></span>
                <div className='form__item'>
                    <label className='form__label' htmlFor="email">Email: </label>
                    <input className='form__input' {...register('email')} type="email" id="email" />
                </div>
                <div className='form__item'>
                    <label className='form__label' htmlFor="password">Password: </label>
                    <input className='form__input' {...register('password')} type="password" id="password" />
                </div>
                <div className='form__item'>
                    <label className='form__label' htmlFor="first_name">First name: </label>
                    <input className='form__input' {...register('first_name')} type="text" id="first_name" />
                </div>
                <div className='form__item'>
                    <label className='form__label' htmlFor="last_name">Last name: </label>
                    <input className='form__input' {...register('last_name')} type="text" id="last_name" />
                </div>
                <div className='form__item'>
                    <label className='form__label' htmlFor="birthday">Birthday: </label>
                    <input className='form__input' {...register('birthday')} type="date" id="birthday" />
                </div>
                <button className='form__btn' onClick={handleExit}>{updateInfo ? 'Update' : 'Create'}</button>
            </form>

        </div>
    )
}

export default FromUser