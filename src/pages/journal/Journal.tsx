import React, { useEffect, useState } from "react";
import "./DatePicker.css";
import { Calendar, DayValue } from "react-modern-calendar-datepicker";

export default function Journal() {
    const [selectedDay, setSelectedDay] = useState<DayValue | null>(null);

    // TODO: Add Dots to dates that have data already recorded
    return (
        <div>
            <h1>Step 1: Select Day</h1>
            <Calendar value={selectedDay} onChange={setSelectedDay} />
            {selectedDay && (
                <div>
                    <h1>Step 2: Load Data if exists, record</h1>
                </div>
            )}
        </div>
    );
}
