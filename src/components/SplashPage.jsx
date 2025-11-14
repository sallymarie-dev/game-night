import "../App.css";
import BoardGames from "./BoardGames";
import App from "../App";
import GameControllerImg from "../assets/GameController.png";
import scrabbleImg from "../assets/scrabble.jpeg";
import supabase from "../utils/supabase";

export default function SplashPage({ setPage, setUserEmail }) {
  const handleLoginGuest = (login) => {
    login.preventDefault();
    setPage("boardgames");
  };

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
    } else {
      data.user;
      setUserEmail(email);
      setPage("boardgames");
    }
  };

  const handleSignup = async (event) => {
    event.preventDefault();

    const { emailInput, passwordInput } = event.target.elements;

    const { error } = await supabase.auth.signUp({
      email: emailInput.value,
      password: passwordInput.value,
    });

    if (error) {
      alert("Signup failed: " + error.message);
    } else {
      alert("Check your email for a verification link!");
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
            Password: <input type="password" name="passwordInput" />
          </label>
          &nbsp;
          <button type="submit"> Login</button>
          &nbsp;
          <button onClick={handleLoginGuest} type="submit">
            Login as guest
          </button>
        </form>
      </div>

      <h2 className="home">No Account? Sign Up Below:</h2>
      <div>
        <form onSubmit={handleSignup}>
          <input
            type="email"
            name="emailInput"
            placeholder="Enter your email"
            required
          />
          <input
            type="password"
            name="passwordInput"
            placeholder="Enter your password"
            required
          />
          <button type="submit">Create Account</button>
        </form>
      </div>
      <div className="scrabble">
        <img src={scrabbleImg} />
      </div>
    </>
  );
}
