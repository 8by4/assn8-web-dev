export default function ResultDisplay({ player, computer }) {
  if (!player || !computer) return null;

  const outcomes = {
    rock:     { rock: "Tie", paper: "Lose", scissors: "Win" },
    paper:    { rock: "Win", paper: "Tie", scissors: "Lose" },
    scissors: { rock: "Lose", paper: "Win", scissors: "Tie" }
  };

  const result = outcomes[player][computer];

  return <h2 className="result">You {result}!</h2>;
}
