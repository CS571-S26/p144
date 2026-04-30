import React, { useEffect, useState } from "react";

import { Button, Row, Col, Container } from "react-bootstrap";
import Timer from "../components/timer";
import BuckySquare from "../components/BuckySquare";

import EndOfWhackAMoleGameModal from "../components/models/EndOfWhackAMoleGameModal";
import DifficultySelector from "../components/DifficultySelector";

import '../styles/pageStyles.css'


export default function WhackAMole(props) {

    const [gameOver, setGameOver] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);

    const [squares, setSquares] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])
    const [activeSquares, setActiveSquares] = useState([]);

    const [score, setScore] = useState(0);
    const [finalScore, setFinalScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    const [showEndOfGame, setShowEndOfGame] = useState(false)

    const [gameMode, setGameMode] = useState("Easy");

    const [time, setTime] = useState(20);
    const [difficultyScoreFactor, setDifficultyScoreFactor] = useState(1);


    useEffect(() => {
        console.log(time);
            switch (gameMode) {
                case ("Easy"):
                    setTime(20)
                    setDifficultyScoreFactor(1);
                    break;
    
                case ("Medium"):
                    setTime(15)
                    setDifficultyScoreFactor(2);
                    break;
    
                case ("Hard"):
                    setTime(10)
                    setDifficultyScoreFactor(3);
                    break;
            }
    
        }, [gameMode])

    function handleEndOfGameClose(closedEndScreen) {

        setShowEndOfGame(false);
        if ((finalScore > highScore)) {
            setHighScore(finalScore)
        }
        setScore(0);
        setFinalScore(0);
    }

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
            setShowEndOfGame(true);
            setFinalScore(score * difficultyScoreFactor);
            setActiveSquares([]);
        }

    }, [gameOver])


    const handleWhack = () => {
        setScore(oldScore => oldScore + 1);
        generateNewSquare();
    }

    const handleMiss = () => {
        if (score === 0) {
            return;
        }
        generateNewSquare();
        setScore(oldScore => oldScore - 1);
    }

    const generateNewSquare = () => {
        const newActiveSquare = [Math.floor((Math.random() * 15) + 1)]
        setActiveSquares(newActiveSquare)
    }

    return (
        <>
            <div>
                <h1 style={{ textAlign: "center" }}>Whack a Bucky!</h1>
                <h5 style={{ textAlign: "center" }}> Click on bucky when he appears as many times as you can before the time runs out!</h5>
            </div>

            <div style={{ display: "flex", height: "80vh", padding: "20px" }} >
                <div className="game-area">
                    <div className="whackAMole-grid">
                        {squares.map((square, index) => (
                            <BuckySquare
                                key={`BuckySquare ${index}`}
                                gameOver={gameOver}
                                active={activeSquares.includes(square)}
                                onWhack={handleWhack}
                                onMiss={handleMiss}
                            />
                        ))}
                    </div>

                    <EndOfWhackAMoleGameModal
                        show={showEndOfGame}
                        onClose={handleEndOfGameClose}
                        score={finalScore}
                        highScore={highScore}
                        difficulty={gameMode}
                    />
                </div>

                <div className="info-panel">
                    <div style={{ margin: "20px" }}>
                        <h4>Score: {score}</h4>
                        <h4>High Score: {highScore}</h4>
                    </div>
                    <Timer
                        gameOver={gameOver}
                        setGameOver={setGameOver}
                        setGameStarted={setGameStarted}
                        time={time}
                        setTime={setTime}
                    />

                    <DifficultySelector
                        setGameMode={setGameMode}
                        gameMode={gameMode}
                    />

                </div>
            </div >
        </>
    )
}
