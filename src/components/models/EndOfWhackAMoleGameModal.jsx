import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';


export default function EndOfWhackAMoleGameModal(props) {


    const [newHighScore, setNewHighScore] = useState(false);

    useEffect(() => {

        if (props.show) {
            if(props.score > props.highScore){
                setNewHighScore(true);
                localStorage.setItem("WAB_HighScore", props.score)
                localStorage.setItem("WAB_HighScore_Date", new Date())
                localStorage.setItem("WAB_HighScore_Difficulty", new Date())
            }
        }
    }, [props.show])


    return (
        <Modal show={props.show} onHide={() => props.onClose()}>
            <Modal.Body>
                <h1 style={{ textAlign: "center" }}> {newHighScore ? "High Score!" : "Game Over!"}</h1>
                {newHighScore ?
                    <div>
                        <h3>Old High Score: {props.highScore}</h3>
                        <h3>New High Score: {props.score}</h3>
                    </div>
                    :
                    <div>
                        <h3>Final Score: {props.score}</h3>
                        <h3>High Score: {props.highScore}</h3>
                    </div>
                }

            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={() => props.onClose()}>
                    Play Again
                </Button>

            </Modal.Footer>

        </Modal>
    )




}