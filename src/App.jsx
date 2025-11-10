import SplashPage from "./components/SplashPage";
import BoardGames from "./components/BoardGames";
import "./App.css";
import { useState } from "react";

function App() {
  const [current, setCurrent] = useState("home");

  const [userEmail, setUserEmail] = useState("");

  return (
    <>
      {current === "home" && (
        <SplashPage setPage={setCurrent} setUserEmail={setUserEmail} />
      )}
      {current === "boardgames" && (
        <BoardGames setPage={setCurrent} userEmail={userEmail} />
      )}
    </>
  );
}

export default App;
