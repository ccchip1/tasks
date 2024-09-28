import React, { useState } from "react";
import { Form } from "react-bootstrap";
export type Ans = "✔️" | "❌";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    let [given, setGiven] = useState<string>("");
    /*let [correct, setCorrect] = useState<Ans>("❌");*/

    function confirmAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setGiven(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <div>
                <Form.Group controlId="Given Answer">
                    <Form.Label>Answer:</Form.Label>
                    <Form.Control value={given} onChange={confirmAnswer} />
                    <Form.Label>
                        Your Answer is: {given === expectedAnswer ? "✔️" : "❌"}
                        .
                    </Form.Label>
                </Form.Group>
            </div>
        </div>
    );
}
