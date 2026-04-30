import React, { useEffect, useState } from "react";

import MemorizeSquare from "../components/MemorizeSquare";

import '../styles/pageStyles.css'
import StopWatch from "../components/StopWatch";
import HeartDisplay from "../components/HeartDisplay";
import DifficultySelector from "../components/DifficultySelector";
import EndOfMemoryGameModal from "../components/models/EndOfMemoryGameModal";
import { Button } from "react-bootstrap";



export default function Memorization(props) {


    const [squares, setSquares] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])
    const [squareImages, setSquareImages] = useState([0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7])

    //Holds the indices of the squares whos images are shown. If not in the list, their is a squation mark.
    const [vissibleSquares, setVisibleSquares] = useState([])

    //Holds the pairs that are already solved
    const [solvedImagePairs, setSolvedImagePairs] = useState([])

    //Image Value for the clicked square used for determining match
    const [clickedSquareValue, setClickedSquareValue] = useState(null)
    const [clickedSquareIndex, setClickedSquareIndex] = useState(null)

    //Variables that manage game state
    const [gameOver, setGameOver] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);
    const [countDownRunning, setCountDownRunning] = useState(false);

    const [countDownTime, setCountDownTime] = useState(10);
    const [time, setTime] = useState(0);

    //Hearts
    const [hearts, setHearts] = useState(3);
    const [heartArray, setHeartArry] = useState([1, 1, 1]); //Could not figure out how to do this with a number

    //High score values
    const [finalScore, setFinalScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [difficultyScoreFactor, setDifficultyScoreFactor] = useState(3)
    const MAX_SCORE = 1000000;

    //Game modes
    const [gameMode, setGameMode] = useState("Easy");

    //Modal View
    const [showEndOfGame, setShowEndOfGame] = useState(false)

    //Game Initialization
    useEffect(() => {

        const fetchedHighScore = localStorage.getItem("MEM_HighScore")
        if(fetchedHighScore){
            setHighScore(fetchedHighScore)
        }
        generateImagePairs();
    }, [])

    // Adjusts game settings depending on difficulty
    useEffect(() => {
        switch (gameMode) {
            case ("Easy"):
                setHearts(3);
                setHeartArry([1, 1, 1]);
                setCountDownTime(10);
                setDifficultyScoreFactor(3);
                break;

            case ("Medium"):
                setHearts(3);
                setHeartArry([1, 1, 1]);
                setCountDownTime(7);
                setDifficultyScoreFactor(2);
                break;

            case ("Hard"):
                setHearts(2);
                setHeartArry([1, 1, 0]);
                setCountDownTime(5);
                setDifficultyScoreFactor(1);
                
                break;
        }

    }, [gameMode])


    //Checking for game state conditions
    useEffect(() => {

        if (solvedImagePairs.length == 8) {
            setGameOver(true)
        }

    }, [solvedImagePairs])


    useEffect(() => {
        if(gameOver){

            const wonGame = (solvedImagePairs.length == 8);
            setGameStarted(false);

            if(wonGame){
                //May add more multipliers, like 
                const calculatedScore = MAX_SCORE / (difficultyScoreFactor * time);
                setFinalScore(calculatedScore.toFixed());
            }
            else{
                setFinalScore(0)
            }

            setShowEndOfGame(true);
        }


    }, [gameOver])

    //Closses model
    function handleEndOfGameClose(closedEndScreen){

        setVisibleSquares([]);
        setSolvedImagePairs([]);
        setClickedSquareIndex(null);
        setClickedSquareValue(null);
        setGameOver(false);
        setTime(0);
        setGameMode("Easy");
        generateImagePairs();

        setShowEndOfGame(false);
    }

    //Randomizes the order of image pairs
    const generateImagePairs = () => {
        const newImageOrder = [...squareImages];
        newImageOrder.sort(function () {
            // Uses Math.random to get randomly generated negative, positive, and zero values for the sort function 
            return 0.5 - Math.random()
        })
        setSquareImages(newImageOrder)
    }

    const handleIncorrect = () => {

        if (gameMode == "Easy") {
            return
        }

        // Removing hearts
        const newHeartArray = [...heartArray];
        newHeartArray[hearts - 1] = 0;
        setHearts(hearts - 1);
        setHeartArry(newHeartArray);

        //If hearts run out end game
        if (hearts == 1) {
            setGameOver(true);
        }
    }


    const hideUnsolvedSquares = async (wait) => {

        function imageFilter(vissibleSquareIndex) {
            let imageNumber = squareImages[vissibleSquareIndex]
            return solvedImagePairs.includes(imageNumber)
        }

        const newVisibleSquares = vissibleSquares.filter(imageFilter);

        // If wait is true the function will wait one second before hiding the wrong card
        if (wait) {
            setTimeout(() => {
                setVisibleSquares(newVisibleSquares);
            }, 1000)
        }
        else {
            setVisibleSquares(newVisibleSquares);
        }


    }


    const handleClick = (imageValue, squareIndex) => {

        if (!gameStarted) {
            return;
        }


        //If this is the first square clicked
        if (clickedSquareIndex == null) {

            setClickedSquareIndex(squareIndex);
            setClickedSquareValue(imageValue);


            setVisibleSquares([...vissibleSquares, squareIndex])

        }
        //If the same square is clicked then remove from click list. I remove this, since you could just cheat...
        else if (clickedSquareIndex == squareIndex) {

            setClickedSquareIndex(null);
            setClickedSquareValue(null);


            hideUnsolvedSquares(false);
        }
        // Succesfully made a match
        else if (imageValue == clickedSquareValue) {

            setSolvedImagePairs([...solvedImagePairs, imageValue])
            setVisibleSquares([...vissibleSquares, squareIndex, clickedSquareIndex])

            setClickedSquareIndex(null);
            setClickedSquareValue(null);
        }
        else {
            setClickedSquareIndex();
            setClickedSquareValue();


            //Showing the user the incorrect card and then removing heart
            setVisibleSquares([...vissibleSquares, squareIndex])
            handleIncorrect();
            hideUnsolvedSquares(true);
        }
    }

    return <>
        <div>
            <h1 style={{ textAlign: "center" }}>Mendota Memorizer!</h1>
            <h5 style={{ textAlign: "center" }}>Quickly memorize the images on screen and match each pair without losing hearts</h5>
        </div>

        <div style={{ display: "flex", height: "80vh", padding: "20px" }} >
            <div className="game-area">
                <div className="memorization-grid">
                    {squares.map((square, index) => (
                        <MemorizeSquare
                            imageNumber={squareImages[index]}
                            index={index}
                            key={index}
                            handleClick={handleClick}
                            clicked={clickedSquareIndex == index}
                            vissible={
                                gameOver || countDownRunning ||
                                vissibleSquares.includes(index) || solvedImagePairs.includes(squareImages[index])
                            }
                        />
                    ))}
                </div>

                <EndOfMemoryGameModal
                    show={showEndOfGame}
                    onClose={handleEndOfGameClose}
                    score={finalScore}
                    highScore={highScore}
                    gameMode={gameMode}
                />
            </div>

            <div className="info-panel">

                <StopWatch
                    gameOver={gameOver}
                    setGameOver={setGameOver}

                    time={time}
                    setTime={setTime}

                    gameStarted={gameStarted}
                    setGameStarted={setGameStarted}

                    countDownRunning={countDownRunning}
                    setCountDownRunning={setCountDownRunning}
                    countDownTime={countDownTime}
                />

                {(gameMode != "Easy") ? <div className="heart-display">
                    {heartArray.map((heart, index) => (
                        <HeartDisplay
                            key={`Heart ${index}`}
                            available={heart}
                        />
                    ))}
                </div> : <h5>Change Difficulty For Hearts</h5>}

                <DifficultySelector
                    setGameMode={setGameMode}
                    gameMode={gameMode}
                />

            </div>
        </div>

    </>
}