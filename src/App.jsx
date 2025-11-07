import SplashPage from './components/SplashPage';
import BoardGames from './components/BoardGames'
import './App.css'
import { useState } from 'react';

function App() {
  const[current, setCurrent] =useState("home")

  return (
    <>
    {current===  "home" && <SplashPage setPage={setCurrent}/>}
      {current=== "boardgames" &&<BoardGames setPage={setCurrent}/>}
    
    </>
  );
}

export default App
