import * as React from "react";
import HourTab from "../components/tmdaHourTab";
import DayTab from "../components/tmdaDayTab";
import MonthTab from "../components/tmdaMonthTab";

export default function PercTabs() {
    return (
        <>
            <h4>Tablas de variación porcentual</h4>
            <HourTab />
            <DayTab />
            <MonthTab />
        </>
    );
}