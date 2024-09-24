import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    let [quiz, setQuiz] = useState<boolean>(false);
    let [attempts, setAttempts] = useState<number>(4);

    function takeMulligan(): void {
        setAttempts((attempts += 1));
    }

    function Start(): void {
        setQuiz(true);
        setAttempts((attempts -= 1));
    }

    function Stop(): void {
        setQuiz(false);
    }

    return (
        <div>
            <Button onClick={Start} disabled={quiz || attempts === 0}>
                Start Quiz
            </Button>
            <Button onClick={Stop} disabled={!quiz}>
                Stop Quiz
            </Button>
            <Button onClick={takeMulligan} disabled={quiz}>
                Mulligan
            </Button>
            <div>
                Quiz status:{" "}
                {quiz ?
                    <span>In Progress</span>
                :   <span>On Standby</span>}
            </div>
            <div>
                Attempts Remaining: <span>{attempts}</span>
            </div>
        </div>
    );
}
