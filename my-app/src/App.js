import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavbarComp from './Components/Navbar/Navbar';
import UserList from './Components/UserList/UserList';
import userData from './data/User.json'
import { lazy, Suspense, useEffect, useState } from 'react';

const Counter = lazy(() => import("./Components/Counter/Counter"));
const Login = lazy(() => import("./Components/Login/Login"));
const UserForm = lazy(() => import("./Components/UserForm/UserForm"));
const Form = lazy(() => import("./Components/Form/Form"));
const UserPage = lazy(() => import("./Components/UserPage/UserPage"));
const TodoList = lazy(()=> import("./Components/TodoList/TodoList"))


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
        <Route path="/login" element={
          <Suspense fallback={<div>Loading Login Component....</div>}>
            <Login />
          </Suspense>
        } />
        <Route path="/counter" element={

          <Suspense fallback={<div>Loading Counter Component....</div>}>
            <Counter />
          </Suspense>

        } />
        <Route path="/form" element={
          <Suspense fallback={<div>Loading Form Component....</div>}>
            <Form />
          </Suspense>
        } />
        <Route path="/userform" element={
          <Suspense fallback={<div>Loading UserForm Component....</div>}>
            <UserForm onAddUser={onFormSubmit} />
          </Suspense>
        } />
        <Route path="/users/:userId" element={
          <Suspense fallback={<div>Loading UserForm Component....</div>}>
            <UserPage />
          </Suspense>
        } />

      <Route path="/todolist" element={
          <Suspense fallback={<div>Loading TodoList Component....</div>}>
            <TodoList />
          </Suspense>
        } />

      </Routes>

    </BrowserRouter>

  </div>
}

export default App;
