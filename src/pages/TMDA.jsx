import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TMDArow from "../components/TMDArow";
import Latex from "react-latex";
import PercTabs from "../containers/PercTabs";

export default function TMDA() {
    const eqtn1 = '$$\\Large\\mathsf{TMDA=nº_{censo}\\frac{100}{\\sum Hrs_{perc.}}\\frac{100}{Dia_{perc.}}\\frac{100}{Mes_{perc.}}}$$';
    return (
        <>
            <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
                <Paper elevation={6} sx={{width: '90%', height: 'auto', m: 0, p: 0,}} >
                    <TMDArow />
                </Paper>
                <Box>
                    <Paper elevation={6} sx={{
                        placeItems: "center", m: '20px', p: '8px', width: '30rem', height: '8rem',
                    }}>
                        <div>
                            <p>
                                El Tránsito Medio Diario Anual es el promedio de anual de
                                vehículos que pasan durante las 24 horas por un punto
                                determinado del camino, durante los 365 días del año. 
                            </p>
                        </div>
                    </Paper>
                    <Paper elevation={6}
                        sx={{
                            display: 'flex', justifyContent: 'center', placeItems: "center",
                            m: '20px', p: '8px', width: '30rem', height: '8rem',
                        }} >
                        <Latex align="center">
                            {eqtn1}
                        </Latex>
                    </Paper>
                </Box>
                <Paper elevation={6}
                    sx={{
                        display: 'flex', flexDirection: 'column', justifyContent: 'center', placeItems: "center",
                        m: '20px', p: '8px', width: '30rem', height: 'auto',
                    }} >
                    <PercTabs />
                </Paper> 
            </Box>
        </>
    );
}
