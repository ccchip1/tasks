import React, { useState } from "react";
import { Button } from "react-bootstrap";

export type Holiday =
    | "Holiday: 🐉"
    | "Holiday: 🏮"
    | "Holiday: 🏔️"
    | "Holiday: 💤"
    | "Holiday: 🎁";

//🐉 = Dragon Boat Festival = 5th day, 5th month of Chinese lunisolar calendar, June 10th
//🏮 = Lanturn Festival = 15th day, 1st month of Chinese lunisolar calendar, Febuary 24th
//🏔️ = Mountain Day = August 11th
//💤 = National Sleepy Head Day = July 27th
//🎁 = Chirstmas = December 25th

export function CycleHoliday(): React.JSX.Element {
    let [holiday, setHoliday] = useState<Holiday>("Holiday: 🐉");

    const AlphaOrder: Record<Holiday, Holiday> = {
        "Holiday: 🎁": "Holiday: 🐉",
        "Holiday: 🐉": "Holiday: 🏮",
        "Holiday: 🏮": "Holiday: 🏔️",
        "Holiday: 🏔️": "Holiday: 💤",
        "Holiday: 💤": "Holiday: 🎁",
    };

    const YearOrder: Record<Holiday, Holiday> = {
        "Holiday: 🏮": "Holiday: 🐉",
        "Holiday: 🐉": "Holiday: 💤",
        "Holiday: 💤": "Holiday: 🏔️",
        "Holiday: 🏔️": "Holiday: 🎁",
        "Holiday: 🎁": "Holiday: 🏮",
    };

    function Alphabet(): void {
        const newHoliday = AlphaOrder[holiday];
        setHoliday(newHoliday);
    }

    function Year(): void {
        const newHoliday = YearOrder[holiday];
        setHoliday(newHoliday);
    }

    return (
        <div>
            <Button onClick={Alphabet}>Advance by Alphabet</Button>
            <Button onClick={Year}>Advance by Year</Button>
            <span>{holiday}</span>
        </div>
    );
}
