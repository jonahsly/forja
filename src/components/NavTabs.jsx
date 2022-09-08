import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TMDA from "../pages/TMDA";
import Collapsivetabs from "./collapsivetabs";
import HourVarTab from "../components/HourVarTab";
import DayVarTab from "../components/DayVarTab";
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
          </TabList>
        </Box>
        <TabPanel value="1">
          <TMDA />
          Tablas de variación porcentual
          
          <Collapsivetabs />
          <HourVarTab />
          <DayVarTab />
          <MonthVarTab />
        </TabPanel>
        <TabPanel value="2" align="center">
          
        </TabPanel>
        <TabPanel value="3">
          <Collapsivetabs />
        </TabPanel>
      </TabContext>
    </Box>
  );
}