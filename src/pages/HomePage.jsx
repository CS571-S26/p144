import React, { memo } from "react";
import Memorization from "./Memorization";


function HomePage(props) {
    return <>
        <h1 style={{textAlign: "center"}}>Badger Arcade</h1>

        <p>
            Welcome to Badger Arcade! Use the navigation bar to begin playing any of the games we offer, or check out your high scores on the leaderboard!
            More information about these fatures can be found bellow. 
        </p>

        <h3>Whack-A-Bucky</h3>
        <p>
            This is a spin on the classic arcade game, Whack-A-Mole. You must "whack" Bucky when he appears from the ground by clicking on him but you must be quick because he 
            does not stay above ground for long! While you are on your hunt watch out for any evil gophers because if you click one you will lose a point. Difficulty can be increased
            or decreased using the drop down menu. Harder difficulties make Bucky stay on screen for an even shorter amount of time but increase the amount of points yoou score.
        </p>
        <p>
            This is a spin on the classic arcade game, Whack-A-Mole. You must "whack" Bucky when he appears from the ground by clicking on him. Be careful though, because if you click 
            a hole that Bucky is not in you will lose a point! The goal is to get as many points as you can before time runs out!
        </p>

        <h3>Mendota Memorizer</h3>
        <p>
            Pairs of images will appear randomly in a grid for selectable amount of time. After this time the images will be hidden, and it is up to you to find each images match. The hearts displayed on
            the right of the screen represent how many wrong guesses you can make before the game ends. Changing the difficulty in this game will shorten the amount of time you get to see the revealed 
            images as well as decrease your number of hearts. Easy mode does not have any penalty for making incorrect guesses, but if you take the risk of harder dificulties you will have a higher score multiplier!
        </p>
        <h3>High Scores</h3>
        <p>
            Here you will find all sorts of information about the games you have played. Your all time best scores, when you got that high score, annd the difficulty you completed the game on!
        </p>
    </>

} export default memo(HomePage);