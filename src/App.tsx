import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import logo from "./Checkmark.jpg";
console.log(logo);

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header" style={{ backgroundColor: "red" }}>
                <h1>
                    UD CISC275 with React Hooks and TypeScript Connor Chipoletti
                </h1>
                Hello World
            </header>

            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
                <img src={logo} alt="A picture of a checkmark" />
                <ol>
                    <li>Computer Science</li>
                    <li>Cognitive Science</li>
                    <li>Math</li>
                </ol>
            </p>
            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                height: 10,
                                width: 10,
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                backgroundColor: "red",
                                height: 10,
                                width: 10,
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
