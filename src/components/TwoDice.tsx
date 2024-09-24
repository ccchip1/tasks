import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    let [leftdie, setFirst] = useState<number>(2);
    let [rightdie, setSecond] = useState<number>(5);

    function rollLeft(): void {
        setFirst(d6());
    }

    function rollRight(): void {
        setSecond(d6());
    }

    return (
        <div>
            <Button onClick={rollLeft}>Roll Left</Button>
            <Button onClick={rollRight}>Roll Right</Button>
            <div>
                Left Die: <span data-testid="left-die">{leftdie}</span>
            </div>
            <div>
                Right Die: <span data-testid="right-die">{rightdie}</span>
            </div>
            <div>
                {leftdie === rightdie ?
                    leftdie === 1 ?
                        <span>Lose</span>
                    :   <span>Win</span>
                :   ""}
            </div>
        </div>
    );
}
