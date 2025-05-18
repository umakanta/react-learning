import Counter from './Components/Counter/Counter';
import Form from './Components/Form/Form';
import Login from './Components/Login/Login';
import NavbarComp from './Components/Navbar/Navbar';
import UserForm from './Components/UserForm/UserForm';
import UserList from './Components/UserList/UserList';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import userData from './data/User.json'
import { useState } from 'react';
import UserPage from './Components/UserPage/UserPage';

function App() {
  const isLoggedInStr = localStorage.getItem("isLoggedIn");
  const isLoggedIn = JSON.parse(isLoggedInStr)
  console.log(isLoggedIn)

  const [users, setUsers] = useState(userData.users)


  function onFormSubmit(newUser) {
    console.log("FormSubmit called: ", newUser);
    const usersClone = [newUser, ...users];
    setUsers(usersClone)
  }
  return <div>

    {/* <Form/> */}
    {/* <Counter/> */}
    {
      //Coditional Rendering...
      // isLoggedIn ? <UserList /> : <Login />
    }

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList users={users} setUsers={setUsers} />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/form" element={<Form />} />
        <Route path="/userform" element={<UserForm onAddUser={onFormSubmit} />} />
        <Route path="/users/:userId" element={ <UserPage />} />
      </Routes>
    </BrowserRouter>

  </div>
}

export default App;
