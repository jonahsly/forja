import * as React from "react";
import HourTab from "../components/HourTab";
import DayTab from "../components/DayTab";
import MonthTab from "../components/MonthTab";

export default function PercTabs() {
    return (
        <>
            <HourTab />
            <DayTab />
            <MonthTab />
        </>
    );
}