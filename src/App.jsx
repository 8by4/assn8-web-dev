import { useState } from "react";
import PlayerThrow from "./components/PlayerThrowComponent";
import ComputerThrow from "./components/ComputerThrowComponent";
import ResultDisplay from "./components/DisplayResultComponent";

export default function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);

  console.log("computerChoice:", computerChoice);


  return (
    <main id="game_container">
      <h1>Rock Paper Scissors</h1>

      <PlayerThrow
        onSelect={(choice) => {
          setPlayerChoice(choice);
          setComputerChoice(null);
        }}
        playerChoice={playerChoice}
      />

      <ComputerThrow
        playerChoice={playerChoice}
        onComputerChoice={choice => {
          console.log("computerChoice:", choice);
          setComputerChoice(choice);
        }}
      />

      <ResultDisplay player={playerChoice} computer={computerChoice} />
    </main>
  );
}
