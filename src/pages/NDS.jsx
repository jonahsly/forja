import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
//import Latex from "react-latex";
import NDSTabs from "../containers/NDSTabs";

export default function TMDA() {
    const eqtn1 = '$$\\Large\\mathsf{TMDA=nº_{censo}\\frac{100}{\\sum Hrs_{perc.}}\\frac{100}{Dia_{perc.}}\\frac{100}{Mes_{perc.}}}$$';
    return (
        <>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', }}>
                <Paper elevation={6}
                    sx={{
                        display: 'flex', flexDirection: 'column', justifyContent: 'center', placeItems: "center",
                        m: '20px', p: '8px', width: '30rem', minHeight: '19rem',
                }}>
                    <NDSTabs />
                </Paper> 
            </Box>
        </>
    );
}
