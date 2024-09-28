import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    let [attempt, setAmount] = useState<number>(3);
    let [request, setRequest] = useState<string>("");

    function Increase(): void {
        setAmount((attempt -= 1));
    }

    function Decrease(): void {
        if (!isNaN(parseInt(request))) {
            setAmount((attempt += parseInt(request)));
        }
    }

    function confirm(event: React.ChangeEvent<HTMLInputElement>) {
        setRequest(event.target.value);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="formMovieReleased">
                <Form.Label>Attempts Left: {attempt}</Form.Label>
                <Form.Control
                    type="number"
                    value={request}
                    onChange={confirm}
                />
            </Form.Group>
            <Button onClick={Increase} disabled={attempt === 0}>
                Use
            </Button>
            <Button onClick={Decrease}>Gain</Button>
        </div>
    );
}
