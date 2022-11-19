import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TMDA from "../pages/TMDA";
import Latex from "react-latex";
import Paper from '@mui/material/Paper';
import PercTabs from "./PercTabs";

export default function NavTabs() {
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const eqtn1 = '$$\\Large\\mathsf{TMDA=nº_{censo}\\frac{100}{\\sum Hrs_{perc.}}\\frac{100}{Dia_{perc.}}\\frac{100}{Mes_{perc.}}}$$';
  const eqtn2 = '$$\\LARGE\\mathsf{\\frac{1}{\\sqrt{f}}=-2\\log(\\frac{e}{3.7 d}+\\frac{2.51}{Re\\sqrt{f}})}$$';
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
        <TabPanel value="1" width="auto" align="center">
        <Paper
        elevation={6}
        sx={{
            display: "flex",
            justifyContent: "space-around",
            placeItems: "center",
            m: "10px",
            p: "6ch",
        }}
        >
          <Latex align="center">
              {eqtn1}
            </Latex>
        </Paper>
            <TMDA />
            Tablas de variación porcentual
            <PercTabs />
        </TabPanel>
        <TabPanel value="2" align="center">
          <PercTabs />
        </TabPanel>
        <TabPanel value="3">
        </TabPanel>
        <TabPanel value="4">
          <div>
            <Latex align="center">
              {eqtn2}
            </Latex>
          </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
}