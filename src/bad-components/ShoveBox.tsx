import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface Prop1 {
    setPos: (newPos: number) => void;
    Pos: number;
}

interface Prop2 {
    Pos: number;
}

function ShoveBoxButton({ setPos, Pos }: Prop1) {
    return (
        <Button
            onClick={() => {
                setPos(4 + Pos);
            }}
        >
            Shove the Box
        </Button>
    );
}

function MoveableBox({ Pos }: Prop2): React.JSX.Element {
    return (
        <div
            data-testid="moveable-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: "lightblue",
                border: "1px solid blue",
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: Pos + "px",
            }}
        ></div>
    );
}

export function ShoveBox(): React.JSX.Element {
    let [position, setPosition] = useState<number>(10);

    return (
        <div>
            <h3>Shove Box</h3>
            <span>The box is at: {position}</span>
            <div>
                <ShoveBoxButton
                    setPos={setPosition}
                    Pos={position}
                ></ShoveBoxButton>
                <MoveableBox Pos={position}></MoveableBox>
            </div>
        </div>
    );
}
