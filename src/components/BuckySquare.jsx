import React from "react";

import { Button } from "react-bootstrap";


function BuckySquare(props) {


    const handleClick = (e) => {


    }


    return <Button
        style={{
            width: '100%',
            height: '100%'
        }}

        disabled={props.gameState}
    >
        {props.number}
    </Button>

} export default BuckySquare;