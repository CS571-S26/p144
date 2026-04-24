import React, { useEffect, useState } from "react";
import { Button, Row, Col, Container } from "react-bootstrap";


export default function Timer(props) {

    const [time, setTime] = useState(5);
    const [countDown, setCountDown] = useState(3);

    const [isRunning, setRunning] = useState(false);
    const [countDownRunning, setCountDownRunning] = useState(false)



    useEffect(() => {

        if(!isRunning){
            return;
        }

        if (time === 0) {
            setRunning(false);

            //I need to change this to the initial value;
            setTime(5);
            props.setGameOver(true);
            return;
        }

        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setTime(time - 1);
            }, 1000);
        }

        return () => clearInterval(interval);

    }, [isRunning, time]);




    useEffect(() => {

        if(!countDownRunning){
            return;
        }

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
                    {props.gameOver ? "Play Again" : "Start Game!"}
                </Button>
            }
            <h5>Time Remaining: {time}</h5>
        </div>
    )
}