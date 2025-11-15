import { useState, useEffect } from "react";


export default function ComputerThrow({ playerChoice, onComputerChoice }) {
    const [displayImg, setDisplayImg] = useState("/public/images/question.png");

    useEffect(() => {
        if (!playerChoice) return;

        const options = ["rock", "paper", "scissors"];
        let i = 0;

        const interval = setInterval(() => {
            setDisplayImg(`/public/images/${options[i % 3]}.png`);
            i++;
        }, 500);

        const timeout = setTimeout(() => {
            clearInterval(interval);
            const final = options[Math.floor(Math.random() * 3)];
            setDisplayImg(`/public/images/${final}.png`);

            onComputerChoice(final);
        }, 3000);

        return () => {
            clearInterval(interval);
            clearTimeout(timeout);
        };
    }, [playerChoice]);

    return (
        <div className="computer-throw">
            <img src={displayImg} alt="computer throw" />
        </div>
    );
}
