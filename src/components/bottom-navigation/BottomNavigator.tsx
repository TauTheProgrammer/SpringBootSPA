import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import EventNoteIcon from "@mui/icons-material/EventNote";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { ROUTES_BY_INDEX } from "../../constants";
import "./BottomNavigator.scss";

export default function BottomNavigator() {
    const [value, setValue] = useState<number>(0);
    const navigate = useNavigate();

    return (
        <div className="navigator">
            <BottomNavigation
                value={value}
                showLabels
                onChange={(
                    event: React.SyntheticEvent<Element, Event>,
                    newValue: number
                ) => {
                    setValue(newValue);
                    navigate(ROUTES_BY_INDEX[newValue]);
                }}
            >
                <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                <BottomNavigationAction
                    label="Journal"
                    icon={<EventNoteIcon />}
                />
                <BottomNavigationAction
                    label="Insight"
                    icon={<TipsAndUpdatesIcon />}
                />
            </BottomNavigation>
        </div>
    );
}
