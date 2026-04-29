import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";


export default function StopWatch(props) {


    const [time, setTime] = useState(0);
    const [countDown, setCountDown] = useState(1);

    const [isRunning, setRunning] = useState(false);
    const [countDownRunning, setCountDownRunning] = useState(false)



    useEffect(() => {

        if (!isRunning) {
            return;
        }

        if (props.gameOver) {
            setRunning(false);
            //I need to change this to the initial value;
            setTime(0);
            props.setGameOver(true);
            return;
        }

        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTime(time + 0.01);
            }, 10);
        }

        return () => clearInterval(interval);

    }, [isRunning, time]);




    useEffect(() => {

        if (!countDownRunning) { return; }

        if (countDown === 0) {
            setCountDownRunning(false);
            setRunning(true);
            setCountDown(1);
            props.setGameStarted(true);
            return;
        }

        let interval;
        if (countDownRunning) {
            interval = setInterval(() => {
                setCountDown(countDown - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [countDownRunning, countDown]);


    const startTimer = () => {
        props.setGameStarted(false);
        props.setGameOver(false);
        setCountDownRunning(true);
    }


    return (
        <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            {countDownRunning && (<h5>Game Starts in: {countDown}</h5>)}
            {(!isRunning && !countDownRunning) &&
                <Button onClick={startTimer} disabled={isRunning}>
                    {props.gameOver ? "Play Again" : "Start Game!"}
                </Button>
            }
            <h5>Time Elapsed: {time.toFixed(2)}</h5>
        </div>
    )
}