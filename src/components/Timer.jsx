import React, { useEffect, useState } from "react";
import { Button, Row, Col, Container } from "react-bootstrap";


export default function Timer(props) {

    const [time, setTime] = useState(60);
    const [isRunning, setRunning] = useState(false);

    useEffect(() => {

        if (time === 0) {
            setRunning(false);
            props.endGame(true);
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


    const handleIsRunning = () => {
        setRunning(!isRunning)
    }

    return (        
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <span>Time Remaining: {time}</span>
            <Button onClick={handleIsRunning} disabled={props.gameState}>
                {isRunning ? "Stop" : "Start"}
            </Button>
        </div>
    )
}