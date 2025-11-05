import { useState } from "react";
import supabase from "../utils/supabase";

export default function BoardGames() {
  const [games, setGames] = useState([]);
  const [selectedCategory, setSelectedCategory]=useState('All');
  // Fetch all games
  async function handleFetchGames() {
    console.log("Fetching games...");
    const { data, error } = await supabase.from("family_board_games").select();
    if (error) {
      console.error("Fetch failed:", error);
    } else {
      console.log("Fetched data:", data);
      setGames(data);
    }
  }
const filteredGames =
    selectedCategory === "All"
      ? games
      : games.filter((game) => game.game_category === selectedCategory);

  const categories = ["All", "Strategy", "Family", "Party", "Card", "Word", "Trivia"];

  const gamesDisplay = filteredGames.map((game) => (
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


  async function handleAddGame(event) {
    event.preventDefault();
    console.log("Submitting new game...");

    const form = event.target.elements;

    const newGame = {
      game_name: form.gameName.value,
      minimum_players: parseInt(form.minPlayers.value),
      maximum_players: parseInt(form.maxPlayers.value),
      game_time: form.gameTime.value,
      year_released: parseInt(form.yearReleased.value),
      game_mechanics: form.gameMechanics.value,
      game_category: form.gameCategory.value,
      game_designer: form.gameDesigner.value,
    };

    console.log("New Game:", newGame);

    const { data, error } = await supabase.from("family_board_games").insert(newGame);

    if (error) {
      console.error("Insert failed:", error);
    } else {
      console.log("Game added successfully:", data);

      handleFetchGames();
      event.target.reset();
    }
  }

  return (
    <>
      <h1>Family Game Night Library</h1>

      <button onClick={handleFetchGames}>Show All Games</button>

<div className="category-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            className={selectedCategory === cat ? "active" : ""}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <ul>{gamesDisplay}</ul>

      <h2>Add a New Game</h2>
      <form onSubmit={handleAddGame}>
        <label>
          Game Name: <input type="text" name="gameName" required />
        </label>
        <br />

        <label>
          Minimum Players: <input type="number" name="minPlayers" required />
        </label>
        <br />

        <label>
          Maximum Players: <input type="number" name="maxPlayers" required />
        </label>
        <br />

        <label>
          Game Time: <input type="text" name="gameTime" placeholder="e.g. 45 min" required />
        </label>
        <br />

        <label>
          Year Released: <input type="number" name="yearReleased" required />
        </label>
        <br />

        <label>
          Game Mechanics: <input type="text" name="gameMechanics" placeholder="e.g. Dice rolling" required />
        </label>
        <br />

        <label>
          Game Category:
          <select name="gameCategory" defaultValue="" required>
            <option value="" disabled>Select a category</option>
            <option value="Strategy">Strategy</option>
            <option value="Family">Family</option>
            <option value="Party">Party</option>
            <option value="Card">Card</option>
            <option value="Word">Word</option>
            <option value="Trivia">Trivia</option>
          </select>
        </label>
        <br />

        <label>
          Game Designer: <input type="text" name="gameDesigner" required />
        </label>
        <br />

        <button type="submit">Add Game</button>
      </form>
    </>
  );
}




