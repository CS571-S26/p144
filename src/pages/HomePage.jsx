import React, { memo } from "react";
import Timer from "../components/timer";
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

        <h3>Memorization</h3>
        <p>
            Pairs of images will appear randomly in a grid for a brief moment. After this time the images will be hidden, and it is up to you to find each images match. The hearts displayed in
            the top left corner represent how many wrong guesses you can make before the game ends. Changing the difficulty in this game will shorten the amount of time you get to see the revealed 
            images as well as decrease your number of hearts. You score is calculated by the amount of time you took to match all the images
        </p>
        <h3>High Scores</h3>
        <p>
            Here you will find all sorts of information about the games you have played. Your all time best scores, session best scores, as well as other statistics about each game will 
            be displayed here!
        </p>

    </>



} export default memo(HomePage);