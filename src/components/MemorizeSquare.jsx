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


/**
 * Square for the memorization game
 * 
 * @param {object} props
 * @param {number} props.imageNumber - A number (0 - 7) corresponding to an image in the images array
 * @param {number} props.index - The index of the square (0 - 17)
 * @param {boolean} props.clicked - True if the square has been clicked
 * @param {boolean} props.vissible - True if the squares image is shown, otherwise a question mark is shown
 * @param {function} props.handleClick - Function to determine correctness in clicks 
 * 
 */

function MemorizeSquare(props) {

    const images = [bascomHill, bucky, campRandall, captiol, crest, lakeMendota, redGym, terrace]
    const imageAlts = ["Bascom Hill", "Bucky the Badger", "Camp Randall Stadium", "Wisconsin Capitol Building", "University of Wisconsin-Madisons's Crest", "Lake Mendota", "The Red Gym at University of Wisconsin-Madisons", "The union terrace at University of Wisconsin-Madisons"]

    return <>
        <div className="memorization-square"

            onClick={() => props.handleClick(props.imageNumber, props.index)}
            style={{
                width: '100%',
                height: '100%',
                borderStyle: "solid",
                borderWidth: "3px",
                borderColor: props.clicked ? "Red": "Black" 
            }}

        >
            <img
                src={props.vissible ? images[props.imageNumber] : questionMark}
                alt={props.vissible ? imageAlts[props.imageNumber] : "Image hidden with a question mark"}
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