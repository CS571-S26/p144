import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";


/**
 * Stopwatch componenet for memorization game
 * 
 * @param {object} props
 * @param {boolean} props.gameOver - True if game has ended
 * @param {function} props.setGameOver - Sets gameOver
 * @param {boolean} props.gameStarted - True if countdown has ended and game has started 
 * @param {function} props.setGameStarted - Sets gameStarted
 * @param {boolean} props.countDownRunning - True if the countdown has begun
 * @param {function} props.setCountDownRunning - Sets countDownRunning
 * @param {number} props.countDownTime - The initial value for the countdown
 * @param {number} props.time - The time since the game ahs begun
 * @param {function} props.setTime - Sets time
 * 
 */
export default function StopWatch(props) {

    
    const [countDown, setCountDown] = useState(10);

    useEffect(() => {
        setCountDown(props.countDownTime)
    }, [props.countDownTime])
    

    useEffect(() => {

        if (!(props.gameStarted)) {
            return;
        }

        if (props.gameOver) {

            props.setGameStarted(false);
            props.setTime(0); 
            

            return;
        }

        let interval;
        if (props.gameStarted) {
            interval = setInterval(() => {
                props.setTime(props.time + 0.01);
            }, 10);
        }

        return () => clearInterval(interval);

    }, [props.gameStarted, props.time]);


    useEffect(() => {


    }, [props.gameOver])




    useEffect(() => {
        // Preventing changes in countdown if not running, and handling restarts
        if (!(props.countDownRunning)) { return; }

        if (countDown === 0) {

            props.setCountDownRunning(false);
            setCountDown(3);
            props.setGameStarted(true);

            return;
        }

        let interval;
        if (props.countDownRunning) {
            interval = setInterval(() => {
                setCountDown(countDown - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [props.countDownRunning, countDown]);


    const startGame = () => {
        props.setGameStarted(false);
        props.setGameOver(false);
        props.setCountDownRunning(true);
    }


    return (
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            {props.countDownRunning ? (<h5>Game Starts in: {countDown}</h5>) : (<h5>Memorization Time: {props.countDownTime}</h5>)}
            {(!props.gameStarted && !props.countDownRunning) &&
                <Button onClick={startGame} disabled={props.gameStarted}>
                    {props.gameOver ? "Play Again" : "Start Game!"}
                </Button>
            }
            <h5>Time Elapsed: {(props.time).toFixed(2)}</h5>
        </div>
    )
}