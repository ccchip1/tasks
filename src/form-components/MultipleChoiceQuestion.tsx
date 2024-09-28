import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    let [choice, setChoice] = useState<string>(options[0]);

    function updateChoice(event: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(event.target.value);
    }

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="favoriteColors">
                <Form.Label>What is your favorite color?</Form.Label>
                <Form.Select value={choice} onChange={updateChoice}>
                    {options.map((var1: string) => (
                        <option key={var1} value={var1}>
                            {var1}
                        </option>
                    ))}
                </Form.Select>
                <Form.Label>
                    Your Answer is: {choice === expectedAnswer ? "✔️" : "❌"}.
                </Form.Label>
            </Form.Group>
        </div>
    );
}
