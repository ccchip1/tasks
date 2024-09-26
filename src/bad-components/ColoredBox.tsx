import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface colorProps {
    setcolor: (newColor: number) => void;
    color: number;
}

interface colorProp2 {
    color: number;
}

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

function ChangeColor({ setcolor, color }: colorProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setcolor((1 + color) % COLORS.length);
            }}
        >
            Next Color
        </Button>
    );
}

function ColorPreview({ color }: colorProp2): React.JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[color],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px",
            }}
        ></div>
    );
}

export function ColoredBox(): React.JSX.Element {
    let [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);

    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor
                    setcolor={setColorIndex}
                    color={colorIndex}
                ></ChangeColor>
                <ColorPreview color={colorIndex}></ColorPreview>
            </div>
        </div>
    );
}
