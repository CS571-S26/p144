import React, { useEffect, useState } from "react";

import { Button, Row, Col, Container } from "react-bootstrap";
import Timer from "../components/timer";
import BuckySquare from "../components/BuckySquare";

import '../styles/pageStyles.css'


export default function WhackAMole(props) {

    const [gameOver, setGameOver] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);


    const [score, setScore] = useState(0);


    const [squares, setSquares] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])

    const [activeSquares, setActiveSquares] = useState([]);
    const [bombSquares, setBombSquares] = useState([]);

    const [finalScore, setFinalScore] = useState();

    const [highScore, setHighScore] = useState();


    //Initial Set Up
    useEffect(() => {

        const currentHighScore = localStorage.getItem("WAB_HighScore")
        if (currentHighScore) {
            setHighScore(currentHighScore);
        }

    }, [])


    //Used to begin game
    useEffect(() => {

        if (gameStarted) {
            generateNewSquare();
        }

    }, [gameStarted])

    //Used for ending the game
    useEffect(() => {

        if (gameOver) {
            
            if((!highScore) || (score > highScore)){
                localStorage.setItem("WAB_HighScore", score)
            }
            
            setActiveSquares([]);
            setFinalScore(score);
            setScore(0);
        }

    }, [gameOver])


    const handleWhack = () => {
        setScore(oldScore => oldScore + 1);
        generateNewSquare();
    }

    const generateNewSquare = () => {
        const newActiveSquare = [Math.floor((Math.random() * 15) + 1)]
        setActiveSquares(newActiveSquare)
    }



    return (
        <>
            <h1 style={{ textAlign: "center" }}>Whack a Bucky!</h1>
            <h5 style={{ textAlign: "center" }}> Click on bucky when he appears as many times as you can before the time runs out!</h5>

            <div style={{ display: "flex", height: "80vh", padding: "20px" }} >
                <div className="game-area">
                    {!gameOver ?
                        <div className="game-grid">
                            {squares.map((square) => (
                                <BuckySquare
                                    key={square}
                                    number={square}
                                    gameOver={gameOver}
                                    active={activeSquares.includes(square)}
                                    onWhack={handleWhack}
                                />
                            ))}
                        </div>
                        :
                        <div className="game-over">
                            <h1>Game Over!</h1>
                            <h2>Score: {finalScore}</h2>
                            {(((highScore < finalScore)) || (!highScore)) &&
                                <h2>New High Score!!!</h2>
                            }
                        </div>
                    }
                </div>

                <div className="info-panel">
                    <Timer
                        gameOver={gameOver}
                        setGameOver={setGameOver}
                        setGameStarted={setGameStarted}
                        gameStarted={gameStarted}
                    />
                    <div>
                        <h4>Score: {score}</h4>
                    </div>
                </div>
            </div >
        </>
    )

}
