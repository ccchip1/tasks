import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    let [name, setName] = useState<string>("Your Name");
    let [student, setStudent] = useState<boolean>(true);
    let [EditMode, setMode] = useState<boolean>(false);

    function changeName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        setMode(event.target.checked);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <Form.Check
                    type="switch"
                    id="edit-mode"
                    label="Edit Mode"
                    checked={EditMode}
                    onChange={updateMode}
                />
                <Form.Check
                    type="checkbox"
                    id="student-check"
                    label="Are you a Student?"
                    checked={student}
                    onChange={updateStudent}
                    disabled={!EditMode}
                    hidden={!EditMode}
                />
                <Form.Group controlId="Given Answer">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        value={name}
                        onChange={changeName}
                        disabled={!EditMode}
                        hidden={!EditMode}
                    />
                    <Form.Label>
                        {name} is {student ? "a student" : "not a student"}
                    </Form.Label>
                </Form.Group>
            </div>
        </div>
    );
}
