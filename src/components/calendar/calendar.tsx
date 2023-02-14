import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import {
    format,
    formatISO,
    startOfWeek,
    addDays,
    startOfMonth,
    endOfMonth,
    endOfWeek,
    isSameMonth,
    isSameDay,
    subMonths,
    addMonths,
} from "date-fns";
import "./calendar.scss";
import DataRestService from "../../services/DataRestService";
import { EmotionalRecord } from "../../types";

type CalendarPropTypes = {
    onSelectedDateChange: (date: string) => void;
};

// TODO: Add Dots to dates that have data already recorded
export default function Calendar(props: CalendarPropTypes) {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [activeDate, setActiveDate] = useState<Date>(new Date());

    // Load Data to show blips under days which the user has recorded data
    useEffect(() => {
        const dataRestService = new DataRestService();
        const fetchData = async () => {
            const data = await dataRestService.getSomething();
            console.debug(data);
        };
        const postData = async () => {
            const emotionalRecord: EmotionalRecord = {
                energy: "AVERAGE",
                season: "SPRING",
                sleep: "PLENTY",
                weather: "SUNNY",
            };
            const data = await dataRestService.postSomething(emotionalRecord);
            console.debug(data);
        };
        fetchData();
        postData();
    }, []);

    // TODO: Is this an improper way to lift state up?
    // Lift state up
    useEffect(() => {
        const { onSelectedDateChange } = props;
        onSelectedDateChange(formatISO(selectedDate));
    }, [props, selectedDate]);

    const getHeader = () => {
        return (
            <div className="header">
                <Button
                    className="todayButton"
                    onClick={() => {
                        setSelectedDate(new Date());
                        setActiveDate(new Date());
                    }}
                >
                    Today
                </Button>
                <ArrowBackIosRoundedIcon
                    className="navIcon"
                    onClick={() => setActiveDate(subMonths(activeDate, 1))}
                />
                <ArrowForwardIosRoundedIcon
                    className="navIcon"
                    onClick={() => setActiveDate(addMonths(activeDate, 1))}
                />
                <h2 className="currentMonth">
                    {format(activeDate, "MMMM yyyy")}
                </h2>
            </div>
        );
    };

    const getWeekDaysNames = () => {
        const weekStartDate = startOfWeek(activeDate);
        const weekDays = [];
        for (let day = 0; day < 7; day += 1) {
            const weekDay = format(addDays(weekStartDate, day), "E");
            weekDays.push(
                <div className="day weekNames" key={weekDay}>
                    {weekDay}
                </div>
            );
        }
        return <div className="weekContainer">{weekDays}</div>;
    };

    const generateDatesForCurrentWeek = (date: Date) => {
        let currentDate = date;
        const week = [];
        for (let day = 0; day < 7; day += 1) {
            const cloneDate = currentDate;
            week.push(
                <div
                    className={`day ${
                        isSameMonth(currentDate, activeDate)
                            ? ""
                            : "inactiveDay"
                    } ${
                        isSameDay(currentDate, selectedDate)
                            ? "selectedDay"
                            : ""
                    } ${isSameDay(currentDate, new Date()) ? "today" : ""}`}
                >
                    <Button
                        onClick={() => {
                            setSelectedDate(cloneDate);
                        }}
                    >
                        {format(currentDate, "d")}
                    </Button>
                </div>
            );
            currentDate = addDays(currentDate, 1);
        }
        return <div className="week">{week}</div>;
    };

    const getDates = () => {
        const startOfTheSelectedMonth = startOfMonth(activeDate);
        const endOfTheSelectedMonth = endOfMonth(activeDate);
        const startDate = startOfWeek(startOfTheSelectedMonth);
        const endDate = endOfWeek(endOfTheSelectedMonth);

        let currentDate = startDate;

        const allWeeks = [];

        while (currentDate <= endDate) {
            allWeeks.push(generateDatesForCurrentWeek(currentDate));
            currentDate = addDays(currentDate, 7);
        }

        return <div className="allWeeks">{allWeeks}</div>;
    };

    return (
        <div className="calendar">
            {getHeader()}
            {getWeekDaysNames()}
            {getDates()}
        </div>
    );
}
