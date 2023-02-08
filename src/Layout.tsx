import React from "react";
import { Outlet } from "react-router-dom";
import BottomNavigator from "./components/bottom-navigation/BottomNavigator";

export default function Layout() {
    return (
        <div className="eq-app">
            <main>
                <Outlet />
            </main>
            <BottomNavigator />
        </div>
    );
}
