import Counter from './Components/Counter/Counter';
import Form from './Components/Form/Form';
import Login from './Components/Login/Login';
import NavbarComp from './Components/Navbar/Navbar';
import UserForm from './Components/UserForm/UserForm';
import UserList from './Components/UserList/UserList';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import userData from './data/User.json'
import { useEffect, useState } from 'react';
import UserPage from './Components/UserPage/UserPage';

function App() {
  const isLoggedInStr = localStorage.getItem("isLoggedIn");
  const isLoggedIn = JSON.parse(isLoggedInStr)
  console.log(isLoggedIn)

  const [users, setUsers] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  // ComponentDidMount + ComponentDidUpdate
  useEffect(() => {
    console.log("useeffect....")

    const fetchUsers = async () => {
      try {
        const usersRes = await fetch("https://dummyjson.com/users");
        const usersData = await usersRes.json()
        console.log("Fetched Results ", userData);

        setUsers(userData.users);
        setIsLoading(false)
      } catch (error) {
        console.log("Error: ", error)
      }

    };

    fetchUsers();
  }, [])
  //opt Arr - accepts dependancy

  function onFormSubmit(newUser) {
    console.log("FormSubmit called: ", newUser);
    const usersClone = [newUser, ...users];
    setUsers(usersClone)
  }

  console.log("Render starts ....")
  return <div>

    {/* <Form/> */}
    {/* <Counter/> */}
    {
      //Coditional Rendering...
      // isLoggedIn ? <UserList /> : <Login />
    }

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList isLoading={isLoading} users={users} setUsers={setUsers} />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/form" element={<Form />} />
        <Route path="/userform" element={<UserForm onAddUser={onFormSubmit} />} />
        <Route path="/users/:userId" element={<UserPage />} />
      </Routes>
    </BrowserRouter>

  </div>
}

export default App;
