import { useEffect, useState } from 'react'
import './App.css'
import useUserCrud from './hooks/useUserCard'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'
import RemoveUser from './components/RemoveUser' 

function App() {

  const [updateInfo, setUpdateInfo] = useState()
  const [formClose, setFormClose] = useState(true) //Para cerrar o abrir el Create new user
  const [formDelete, setFormDelete] = useState(true) //Para cerrar o abrir el Message al borrar User
  const [deletedNameUser, setdeletedNameUser] = useState('') //set() in UserCard and state in RemoveUser


  const {
    users,
    getAllUsers,
    createNewUser,
    deleteUserById,
    updateUserById
  } = useUserCrud()

  useEffect(() => {
    getAllUsers()
  }, [])


  //! Encargado del boton principal de Create/Update en Portada
  const handleOpenForm = () => {
    setFormClose(false)
  }


  return (
    <div className="app">
      <header className='app__header'>
        <h1 className='app__title'>Users</h1>
        <button className='app__btn' onClick={handleOpenForm}>{updateInfo ? 'Update User' : 'Create New User'}</button>
      </header>

      <FormUser
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUserById={updateUserById}
        setUpdateInfo={setUpdateInfo}

        setFormClose={setFormClose}
        formClose={formClose}
      />

      <RemoveUser
        removedUser={deletedNameUser}
        setFormDelete={setFormDelete}
        formDelete={formDelete}
      />

      <div className='app__user-container'>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              setUpdateInfo={setUpdateInfo}

              setFormDelete={setFormDelete}
              formDelete={formDelete}

              setdeletedNameUser={setdeletedNameUser}
            />
          ))
        }
      </div>

    </div>
  )
}

export default App


//! Sugerencias a mejorar:
/* 
-Colocar una clase a la ultima carta seleccionada, asi sabria que datos tengo en Update
-El boton principal de Crear/Update funciona, pero es incomodo perder el boton de Crear 
una vez que obtengo el boton Update.
-Si sobra tiempo, agregar mas estilos.
*/
