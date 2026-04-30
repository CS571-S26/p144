import React, { useState } from "react";

import heart from "../assets/heart.png"
import usedHeart from "../assets/usedHeart.png"

import { useSearchParams } from "react-router-dom";

/**
 * Displays a heart or a used heart 
 * 
 * @param {object} props
 * @param {boolean} props.available - True if a heart has not been used yet
 * 
 */

export default function HeartDisplay(props) {


    return <div className="heart-box">
        <img
            src={props.available ? heart : usedHeart}
            alt={"Heart"}
            style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
            }}
        />
    </div>


}