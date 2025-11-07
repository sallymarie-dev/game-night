import { useState } from "react";
import supabase from "../utils/supabase";
import "../App.css";


export default function BoardGames({ setPage }) {
  const [games, setGames] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const categories = [
    "Adventure", "Fighting", "Fantasy", "Card Game", "City Building", "Trivia",
  ];

  // Fetch all games
  async function handleFetchGames() {
    console.log("Fetching games...");
    const { data, error } = await supabase.from("family_board_games").select();
    if (error) {
      console.error("Fetch failed:", error);
    } else {
      console.log("Fetched data:", data);
      setGames(data);
      setSelectedCategory("");
      handleFetchReviews(); //fetch reviews
    }
  }
  //our filtered list//
  async function handleFetchByCategory(category) {
    console.log("Fetching games for:", category);
    setSelectedCategory(category);
    const { data, error } = await supabase
      .from("family_board_games")
      .select()
      .eq("game_category", category)
      .limit(30);

    if (error) {
      console.error("Fetch failed:", error);
    } else {
      setGames(data);
    }
  }

  // Aggregate games by category//
  const aggregateByCategory = categories.map((cat) => {
    const count = games.filter((game) => game.game_category === cat).length;
    return { category: cat, count };
  });


  const gamesDisplay = games.map((game) => (
    <li key={game.id}>
      <strong>{game.game_name}</strong> ({game.year_released})
      <br />
      {game.minimum_players}–{game.maximum_players} players, {game.game_time}
      <br />
      {game.game_mechanics}, {game.game_category}
      <br />
      Designed by {game.game_designer}
    </li>
  ));

  async function handleFetchReviews() {
    console.log("Fetching reviews...");
    const { data, error } = await supabase.from("user_review").select();
    if (error) {
      console.error("Review fetch failed:", error);
    } else {
      setReviews(data);
    }
  }

  async function handleReviewGame(event) {
    event.preventDefault();
    console.log("Submitting game review...");

    const form = event.target.elements;

    const reviewGame = {
      user_name: form.userName.value,
      game_name: form.gameName.value,
      review: form.review.value,
      game_category: form.gameCategory.value,
    };

    console.log("Game review:", reviewGame);

    const { data, error } = await supabase.from("user_review").insert(reviewGame).select();

    if (error) {
      console.error("Insert failed:", error);
    } else {
      console.log("Game added successfully:", data);
      setReviews((prevReviews) => [...prevReviews, ...data]);
      handleFetchGames();
      event.target.reset();
    }
  }

  return (
    <>
      <h1>Family Game Night Library</h1>
      <h4>Lets find you a fun family game night game</h4>

      <button onClick={handleFetchGames}>Show All Games</button>
      <div>
        <button onClick={() => setPage("home")}>Back to Home Page</button>
      </div>
      <h3>Choose your Favorite Category</h3>
      {categories.map((cat) => (
        <button key={cat} onClick={() => handleFetchByCategory(cat)}>
          {cat}
        </button>
      ))}

      {selectedCategory && <p>Showing {selectedCategory} Games</p>}

      <h4>Games Count by Category:</h4>
      <ul>
        {aggregateByCategory.map(({ category, count }) => (
          <li key={category}>
            {category}: {count} game(s)
          </li>
        ))}
      </ul>


      <ul>{gamesDisplay}</ul>

      <h2>Leave us a review </h2>
      <form onSubmit={handleReviewGame}>
        <label>
          Your Name: <input type="text" name="userName" required />
        </label>
        <br />

        <label>
          Game Name: <input type="text" name="gameName" required />
        </label>
        <br />

        <label>
          Your Review: <input type="text" name="review" required />
        </label>
        <br />

        <label>
          Game Category:
          <select name="gameCategory" defaultValue="" required>
            <option value="" disabled>Select a category</option>
            <option value="Adventure">Adventure</option>
            <option value="Fighting">Fighting</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Card Game">Card Game</option>
            <option value="City Building">City Building</option>
            <option value="Trivia">Trivia</option>
          </select>
        </label>
        <br />

        <button type="submit">Add My Review</button>
      <button onClick={handleFetchReviews}>Show All Reviews</button>
      </form>
      

      <h2>Recent Reviews</h2>
      <ul>
        {reviews.map((r) => (
          <li key={r.id}>
            <strong>{r.user_name}</strong> on <em>{r.game_name}</em> ({r.game_category})
            <br />
            {r.review}
          </li>
        ))}
      </ul>
    </>
  );
}
