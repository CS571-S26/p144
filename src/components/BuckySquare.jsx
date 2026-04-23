import React from "react";

import { Button, Card } from "react-bootstrap";

import holeNoBucky from "../assets/holeNoBucky.png"
import holeWithBucky from "../assets/holeWithBucky.png"


function BuckySquare(props) {

    const handleClick = (e) => {
        if ((!props.gameOver) && (props.active)) {
            props.onWhack(props.number);
        }
    }

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
            }}
            onClick={handleClick}
        >
            <img
                src={props.active ? holeWithBucky : holeNoBucky}
                alt={props.active ? "Bucky in hole" : "Empty hole"}
                draggable={false}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }}
            />
        </div>
    )











} export default BuckySquare;