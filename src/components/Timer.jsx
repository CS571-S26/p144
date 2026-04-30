import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";


export default function Timer(props) {



    
    const [countDown, setCountDown] = useState(3);
    const [initialTime, setInitialTime] = useState(20)

    const [isRunning, setRunning] = useState(false);
    const [countDownRunning, setCountDownRunning] = useState(false);

    useEffect(() => {
        if(countDownRunning){
            setInitialTime(props.time)
        }

    }, [countDownRunning])


    useEffect(() => {

        if (!isRunning) {
            return;
        }

        if (props.time === 0) {
            setRunning(false);

            props.setTime(initialTime)

            props.setGameOver(true);
            return;
        }

        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                props.setTime(props.time - 1);
            }, 1000);
        }

        return () => clearInterval(interval);

    }, [isRunning, props.time]);




    useEffect(() => {

        if (!countDownRunning) { return; }

        if (countDown === 0) {
            setCountDownRunning(false);
            setRunning(true);
            setCountDown(3);
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
                    Start Game!
                </Button>
            }
            <h5>Time Remaining: {props.time}</h5>
        </div>
    )
}