import React, { useState } from "react";

import { Button, Row, Col, Container } from "react-bootstrap";
import { } from "react-router-dom";
import Timer from "../components/timer";
import BuckySquare from "../components/BuckySquare";




export default function WhackAMole(props) {

    const [gameOver, setGameOver] = useState(false);

    const [score, setScore] = useState(0);

    const [squares, setSquares] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])


    return (
        <>
            <h1>Whack a Mole!</h1>


            <Container style={{ minHeight: '80vh' }}>
                <Row style={{ height: '80vh' }}>
                    {squares.map((square) => (
                        <Col key={square} xs={3} style={{ height: '25%', width: '25%', display: 'flex' }}>
                            <BuckySquare
                                number={square}
                                gameState={gameOver}
                            />
                        </Col>
                    ))}
                </Row>
                <Row>
                    <Col>
                        <Timer
                            gameState={gameOver}
                            endGame={setGameOver}
                        />
                    </Col>
                    <Col>
                        {gameOver && <h3>Game Over!</h3>}
                    </Col>
                </Row>
            </Container>
        </>
    )

}