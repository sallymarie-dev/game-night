import "../App.css";
import BoardGames from "./BoardGames";
import App from "../App";

export default function SplashPage({setPage}) {

    const handleLogin =(login)=>{
        login.preventDefault()
        setPage("boardgames")

        }
  return (
    <>
      <div>
        <h1>Welcome to Family Game Night</h1>
        <form onSubmit={handleLogin}>
          <label>
            Email: <input type="text" name="emailInput" />
          </label>
          <br />
          <label>
            Password: <input type="text" name="passwordInput" />
          </label>
          &nbsp;
          <button type="submit">
            {" "}
            Login
          </button>
        </form>
      </div>
    </>
  );
}
