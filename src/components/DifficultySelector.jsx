import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function DifficultySelector({setGameMode, gameMode}) {

    return <div className="difficulty-selector">
        <Button
            onClick={() =>  setGameMode("Easy") }
            active={(gameMode == "Easy")}
        >
            Easy
        </Button>

        <Button
            onClick={() =>  setGameMode("Medium") }
            active={(gameMode == "Medium")}
        >
            Medium
        </Button>

        <Button
            onClick={() =>  setGameMode("Hard") }
            active={(gameMode == "Hard")}
        >
            Hard
        </Button>

    </div>
}