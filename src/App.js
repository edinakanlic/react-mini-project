import React, {useState} from 'react';

import AddUser from './components/Users/AddUser';
import UsersLIst from './components/Users/UsersList';

function App() {

  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) =>{
   setUsersList (prevUsersList => {
     return [...prevUsersList, {name: uName, age:uAge, id:Math.random().toString()}];
   })
  }
  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersLIst users={usersList}/>
    </>
  );
}

export default App;
