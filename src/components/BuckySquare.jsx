import React from "react";

import { Button } from "react-bootstrap";


function BuckySquare(props) {


    const handleClick = (e) => {

        




    }


    return <Button
        className="rounded-0"
        style={{
            width: '100%',
            height: '100%',
            backgroundColor: "green",
            outlineColor: "black",
            outlineWidth: '5px',
            borderColor: "green",
            
        }}

        disabled={props.gameState}
    >
        {props.number}
    </Button>

} export default BuckySquare;