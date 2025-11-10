import "../App.css";
import BoardGames from "./BoardGames";
import App from "../App";
import GameControllerImg from "../assets/GameController.png";
import scrabbleImg from "../assets/scrabble.jpeg";
import supabase from "../utils/supabase";

export default function SplashPage({ setPage, setUserEmail }) {
  // const handleLogin =(login)=>{
  //     login.preventDefault()
  //     setPage("boardgames")

  const handleLogin = async (event) => {
    event.preventDefault();

    const email = event.target.elements.emailInput.value;
    const password = event.target.elements.passwordInput.value;

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      alert("Login failed:" + error.message);
    } else { (data.user)
      setUserEmail(email);
      setPage("boardgames");
    }
  };

  return (
    <>
      <div>
        <h1>Welcome to Family Game Night</h1>
        <div className="controller">
          <img src={GameControllerImg} />
        </div>
        <h2 className="home">Login/Sign up below:</h2>
        <form onSubmit={handleLogin}>
          <label>
            Email: <input type="text" name="emailInput" />
          </label>
          <br />
          <label>
            Password: <input type="text" name="passwordInput" />
          </label>
          &nbsp;
          <button type="submit"> Login</button>
        </form>
      </div>
      <div className="scrabble">
        <img src={scrabbleImg} />
      </div>
    </>
  );
}
