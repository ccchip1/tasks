import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    let [color, setColor] = useState<string>("red");

    return (
        <div>
            <h3>Change Color</h3>
            <Form.Check
                inline
                type="radio"
                name="color"
                onChange={(e) => {
                    setColor(e.target.value);
                }}
                id="red"
                label="red"
                value="red"
                checked={color === "red"}
            />
            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={(e) => {
                    setColor(e.target.value);
                }}
                id="orange"
                label="orange"
                value="orange"
                checked={color === "orange"}
            />
            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={(e) => {
                    setColor(e.target.value);
                }}
                id="yellow"
                label="yellow"
                value="yellow"
                checked={color === "yellow"}
            />
            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={(e) => {
                    setColor(e.target.value);
                }}
                id="green"
                label="green"
                value="green"
                checked={color === "green"}
            />
            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={(e) => {
                    setColor(e.target.value);
                }}
                id="blue"
                label="blue"
                value="blue"
                checked={color === "blue"}
            />
            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={(e) => {
                    setColor(e.target.value);
                }}
                id="purple"
                label="purple"
                value="purple"
                checked={color === "purple"}
            />
            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={(e) => {
                    setColor(e.target.value);
                }}
                id="pink"
                label="pink"
                value="pink"
                checked={color === "pink"}
            />
            <Form.Check
                inline
                type="radio"
                name="response"
                onChange={(e) => {
                    setColor(e.target.value);
                }}
                id="brown"
                label="brown"
                value="brown"
                checked={color === "brown"}
            />
            <div>You have chosen {color}</div>
            <div>
                <Form.Group
                    data-testid="colored-box"
                    style={{ backgroundColor: `${color}` }}
                >
                    <Form.Label>Color</Form.Label>
                    <Form.Control
                        as="textarea"
                        value={color}
                        onChange={(e) => {
                            setColor(e.target.value);
                        }}
                    />
                </Form.Group>
            </div>
        </div>
    );
}
