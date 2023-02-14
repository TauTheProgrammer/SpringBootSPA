import React, { useState } from "react";
import Calendar from "../../components/calendar/calendar";
import DataRestService from "../../services/DataRestService";
import { EmotionalRecord } from "../../types";

const DATA_REST_SERVICE = new DataRestService();

export default function Journal() {
    const [journalEntry, setJournalEntry] = useState<EmotionalRecord>();

    async function requestJournalEntry(selectedDate: string) {
        const journalEntry = await DATA_REST_SERVICE.getJournalEntryByDate(
            selectedDate
        );
        setJournalEntry(journalEntry);
    }

    return (
        <div>
            <Calendar
                onSelectedDateChange={(date: string) =>
                    requestJournalEntry(date)
                }
            />
        </div>
    );
}
