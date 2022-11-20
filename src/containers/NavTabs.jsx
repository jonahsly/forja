import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import TMDA from "../pages/TMDA";

export default function NavTabs() {
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const eqtn2 = '$$\\LARGE\\mathsf{\\frac{1}{\\sqrt{f}}=-2\\log(\\frac{e}{3.7 d}+\\frac{2.51}{Re\\sqrt{f}})}$$';
  return (
    <Box sx={{ width: "auto", typography: "body1" }}>
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
            <TMDA />
        </TabPanel>
        <TabPanel value="2" align="center">
          
        </TabPanel>
        <TabPanel value="3">
          
        </TabPanel>
        <TabPanel value="4">
          
        </TabPanel>
      </TabContext>
    </Box>
  );
}