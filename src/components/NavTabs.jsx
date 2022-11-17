import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TMDA from "../pages/TMDA";
import HourTab from "../components/HourTab";
import DayTab from "./DayTab";
import MonthVarTab from "../components/MonthVarTab";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", padding: 0 }}>
          <TabList onChange={handleChange} centered>
            <Tab label="TMDA" value="1" />
            <Tab label="Nivel de Servicio" value="2" />
            <Tab label="Item Three" value="3" />
            <Tab label="Colebrook-White" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <TMDA />
          Tablas de variación porcentual
          
          <HourTab />
          <DayTab />
          <MonthVarTab />
        </TabPanel>
        <TabPanel value="2" align="center">
          <HourTab />
        </TabPanel>
        <TabPanel value="3">
        </TabPanel>
        <TabPanel value="4">

        </TabPanel>
      </TabContext>
    </Box>
  );
}