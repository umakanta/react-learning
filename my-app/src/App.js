import Login from './Components/Login/Login';
import NavbarComp from './Components/Navbar/Navbar';
import UserList from './Components/UserList/UserList';


function App() {
  const isLoggedInStr = localStorage.getItem("isLoggedIn");
  const isLoggedIn = JSON.parse(isLoggedInStr)
  console.log(isLoggedIn)
  return <div>
    <NavbarComp />
    {
      //Coditional Rendering...
      isLoggedIn ? <UserList /> : <Login />
    }

  </div>
}

export default App;
