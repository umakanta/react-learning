import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import WatchList from './Pages/WatchList/WatchList'
import Navbar from './Components/Navbar'
import Counter from './Pages/Counter/Counter'
import { Provider } from "react-redux";
import { store } from './Redux/Store/Store'
import TodoList from './Pages/ToDoList/TodoList'

export const WatchListContext = React.createContext()


function App() {

  //-----------
  const [watchList, setWatchList] = useState(getWatchListFromStorage());

  const addToWatchLiist = (movieObj) => {
    console.log("added to wl", movieObj.title)
    setWatchList([...watchList, movieObj])
  }
  const removeFromWatchList = (movieObj) => {
    console.log("removed from wl", movieObj.title)
    const filtered = watchList.filter((wlMovie) => {
      return movieObj.id != wlMovie.id
    })
    setWatchList(filtered)
  }
  //-----------

  useEffect(() => {
    localStorage.setItem("WATCHLIST", JSON.stringify(watchList))
  }, [watchList])
  function getWatchListFromStorage() {
    const watchListFromStorage = JSON.parse(localStorage.getItem("WATCHLIST"));
    if (watchListFromStorage == null) {
      return [];
    }

    return watchListFromStorage;
  }

  return (
    <>
      <Provider store={store}>
        <WatchListContext.Provider value={{ watchList, addToWatchLiist, removeFromWatchList }}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/watchlist" element={<WatchList />}></Route>
              <Route path="/counter" element={<Counter />}></Route>
              <Route path="/todolist" element={<TodoList />}></Route>
            </Routes>
          </BrowserRouter>
        </WatchListContext.Provider>
      </Provider>
    </>
  )
}

export default App
