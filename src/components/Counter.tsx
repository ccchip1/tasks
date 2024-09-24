import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function Counter(): React.JSX.Element {
    let [value, setValue] = useState<number>(0);

    function Increment(): void {
        setValue((value += 1));
    }

    return (
        <span>
            <Button onClick={Increment}>Add One</Button>
            to {value}.
        </span>
    );
}
