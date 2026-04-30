import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";


export default function HighScores(props) {

    const [WAB_HighScore, setWAB_HighScore] = useState(0);
    const [WAB_Date, setWAB_Date] = useState(0);
    const [WAB_Difficulty, setWAB_Difficulty] = useState(null);

    const [MEM_HighScore, setMEM_HighScore] = useState(0);
    const [MEM_Date, setMEM_Date] = useState(0);
    const [MEM_Difficulty, setMEM_Difficulty] = useState(null);


    useEffect(() => {

        const WAB_Score = localStorage.getItem("WAB_HighScore") ?? 0;
        const WAB_Time = localStorage.getItem("WAB_HighScore_Date") ?? "No High Score Recorded";
        const WAB_Mode = localStorage.getItem("WAB_HighScore_Difficulty") ?? "No High Score Recorded";

        const MEM_Score = localStorage.getItem("MEM_HighScore") ?? 0;
        const MEM_Time = localStorage.getItem("MEM_HighScore_Date") ?? "No High Score Recorded";
        const MEM_Mode = localStorage.getItem("MEM_HighScore_Difficulty") ?? "No High Score Recorded";


        setWAB_HighScore(WAB_Score);
        setWAB_Date(WAB_Time);
        setWAB_Difficulty(WAB_Mode);

        setMEM_HighScore(MEM_Score);
        setMEM_Date(MEM_Time);
        setMEM_Difficulty(MEM_Mode);

    }, [])


    return <div>
        <h1 style={{ textAlign: "center" }}> High Scores</h1>
        <h5 style={{ textAlign: "center" }}> See your best scores and other statistics of each game</h5>

        <Table>
            <thead>
                <tr>
                    <th>Game</th>
                    <th>Score</th>
                    <th>Date and Time</th>
                    <th>Difficulty</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Whack-A-Bucky</td>
                    <td>{WAB_HighScore}</td>
                    <td>{WAB_Date}</td>
                    <td>{WAB_Difficulty}</td>
                </tr>
            <tr>
                <td>Mendota Memorizer</td>
                <td>{MEM_HighScore}</td>
                <td>{MEM_Date}</td>
                <td>{MEM_Difficulty}</td>
            </tr>
                
            </tbody>


        </Table>
    </div>
}