import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface DhProps {
    setDh: (newDh: number) => void;
    Dh: number;
}

function Doubler({ setDh, Dh }: DhProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDh(2 * Dh);
            }}
        >
            Double
        </Button>
    );
}

function Halver({ setDh, Dh }: DhProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDh(0.5 * Dh);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler setDh={setDhValue} Dh={dhValue}></Doubler>
            <Halver setDh={setDhValue} Dh={dhValue}></Halver>
        </div>
    );
}
