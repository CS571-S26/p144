import React, { useEffect, useState } from "react";

import { Button } from "react-bootstrap";

import holeNoBucky from "../assets/holeNoBucky.png"

import questionMark from "../assets/questionMark.png"

import bascomHill from "../assets/bascomHill.png"
import bucky from "../assets/bucky.png"
import campRandall from "../assets/campRandall.png"
import captiol from "../assets/capitol.png"
import crest from "../assets/crest.png"
import lakeMendota from "../assets/lakeMendota.png"
import redGym from "../assets/redGym.png"
import terrace from "../assets/terrace.png"


function MemorizeSquare({imageNumber, handleClick}) {


    const images = [bascomHill, bucky, campRandall, captiol, crest, lakeMendota, redGym, terrace, questionMark]
    
    

    return <>
        <div className="memorization-square"
            style={{
                width: '100%',
                height: '100%',
                borderStyle: "solid"
            }}

        >
            <img
                src={images[imageNumber]}
                alt="Empty hole"
                draggable={false}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                }}
            />
        </div>
    </>





} export default MemorizeSquare;