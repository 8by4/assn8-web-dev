export default function PlayerThrow({ onSelect, playerChoice }) {
    const throws = ["rock", "paper", "scissors"];

    return (
        <div className="player-throw">
            {throws.map((t) => (
                <img
                    key={t}
                    src={`public/images/${t}.png`}
                    alt={t}
                    className={playerChoice === t ? "selected" : ""}
                    onClick={() => onSelect(t)}
                />
            ))}
        </div>
    );
}