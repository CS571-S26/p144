import React, { useEffect, useState } from "react";

import MemorizeSquare from "../components/MemorizeSquare";

import '../styles/pageStyles.css'
import StopWatch from "../components/StopWatch";



export default function Memorization(props) {



    const [squares, setSquares] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])
    const [squareImages, setSquareImages] = useState([0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7])


    //Holds the indices of the squares whos images are shown. If not in the list, their is a squation mark.
    const [vissibleSquares, setVisibleSquares] = useState([])

    //Holds the pairs that are already solved
    const [solvedImagePairs, setSolvedImagePairs] = useState([])


    //Variables that manage game state
    const [gameOver, setGameOver] = useState(false);
    const [gameStarted, setGameStarted] = useState(false);

    //High score values
    const [finalScore, setFinalScore] = useState();
    const [highScore, setHighScore] = useState(0);


    //Game Initialization
    useEffect(() => {
        generateImagePairs();
    }, [])


    //Testing function for logging
    useEffect(() => {
        console.log(squareImages)

    }, [squareImages])


    //Randomizes the order of image pairs
    const generateImagePairs = () => {
        const newImageOrder = [...squareImages];

        newImageOrder.sort(function () {
            // Uses Math.random to get randomly generated negative, positive, and zero values for the sort function 
            return 0.5 - Math.random()
        })
        setSquareImages(newImageOrder)
    }


    const handleClick = () => {




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
                            key={index}
                            handleClick={handleClick}

                        />
                    ))}
                </div>
            </div>
            <div className="info-panel">
                <h1>Info</h1>
                <StopWatch
                    gameOver={gameOver}
                    setGameOver={setGameOver}
                    setGameStarted={setGameStarted}
                />
            </div>
        </div>

    </>
}