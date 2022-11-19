import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

export default function TMDA() {
    const [tmda, setTMDA] = React.useState({
        month: "may",
        day: 2,
        since_hs: 8,
        till_hs: 12,
        censusC: 0,
        censusT: 0,
    });
    const handleTMDA = (event) => {
        const value = event.target.value;
        const name = event.target.name;
            if (name == 'month' || name == 'day') {
                setTMDA({
                    ...tmda,
                    [name]: value,
                })
                return;
            }
            setTMDA({
                ...tmda,
                [name]: parseFloat(value),
            })
    };
    const censusCars = tmda.censusC;
    const percCarshour = [0.58,0.19,0.44,0,0.14,0.51,2.33,5.31,5.9,4.88,5.46,4.44,4.22,6.19,6.91,8.15,7.79,9.97,7.21,6.91,5.02,3.78,2.33,1.24];
    const percCarsday = [84.01,81.19,85.35,83.12,83.98,123,91];
    const percCarsmonth = [111.33,112.36,105.85,99,95.57,92.49,90.1,98.04,88.73,94.89,104.79,106.85];
    
    const censusTrucks = tmda.censusT;
    const percTruckshour = [0.33,0,0.46,0,0,0.8,2.05,6.61,10.25,6.83,8.43,8.2,6.61,7.06,8.2,8.66,8.43,6.83,4.1,2.73,1.59,0.91,0.46,0.46];
    const percTrucksday = [108.69,110.55,105.27,114.27,111.85,109.86,39.51];
    const percTrucksmonth = [117.27,129.43,127.26,100.47,84.84,82.6,82.6,84.84,89.3,96,107.16,98.23];
    const calcHourC = () => {
        let sum = 0;
        for (let index = tmda.since_hs; index < tmda.till_hs; index++) {
        sum += percCarshour[index];
        }
        return sum;
    };
    const calcDayC = () => {
        let week = [ 0, 1, 2, 3, 4, 5, 6 ];
        for (let index = 0; index < 7; index++) {
        if (tmda.day == week[index]) {
            return percCarsday[index];
        }
        }
    };
    const calcMonthC = () => {
        let year = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ];
        for (let index = 0; index < 12; index++) {
        if (tmda.month == year[index]) {
            return percCarsmonth[index];
        }
        }
    };
    const calcHourT = () => {
        let sum = 0;
        for (let index = tmda.since_hs; index < tmda.till_hs; index++) {
        sum += percTruckshour[index];
        }
        return sum;
    };
    const calcDayT = () => {
        let week = [ 0, 1, 2, 3, 4, 5, 6 ];
        for (let index = 0; index < 7; index++) {
        if (tmda.day == week[index]) {
            return percTrucksday[index];
        }
        }
    };
    const calcMonthT = () => {
        let year = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ];
        for (let index = 0; index < 12; index++) {
        if (tmda.month == year[index]) {
            return percTrucksmonth[index];
        }
        }
    };
    const tmda1 = () => {
    let result = Math.round( censusCars * (100 / calcHourC()) * (100 / calcDayC()) * (100 / calcMonthC()) );
    
    if (Boolean(result) == true ) {
        return result;
      }
      else{
        return 0;
      }
    } 
    const tmda2 = () => {
        let result = Math.round( censusTrucks * (100 / calcHourT()) * (100 / calcDayT()) * (100 / calcMonthT()) );
        
        if (Boolean(result) == true ) {
            return result;
          }
          else{
            return 0;
          }
    } 

    return (
        <>
            <Box sx={{display: "flex",
                    flexDirection:'column',
                    justifyContent: "space-around",
                    placeItems: "center",
                    width: 'auto',
                    m: 0,
                    p: 0,
            }}>
                <Paper
                    elevation={6}
                    sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        placeItems: "center",
                        width: "auto",
                        height: 'auto',
                    }}
                >
                    <TableContainer >
                        <Table sx={{ maxWidth: 'auto' }}>
                            <TableBody>
                                <TableRow>
                                    <TableCell align="left" sx={{ p: 0, m: 0 }}>
                                        <FormControl variant="standard">
                                            <TextField
                                                name="censusC"
                                                label="Nº de Autos"
                                                sx={{ m: 1, width: '20ch' }}
                                                InputProps={{
                                                    endAdornment:<InputAdornment position="end">veh.</InputAdornment>,
                                                }}
                                                onChange={handleTMDA}
                                            />
                                        </FormControl>
                                    </TableCell>
                                    <TableCell align="left" sx={{ p: 0, m: 0 }}>
                                        <FormControl sx={{ m: 1 }} variant="standard">
                                            <TextField 
                                                name="censusT"
                                                label="Nº de Cam./Bus"
                                                sx={{ m: 1, width: '24ch' }}
                                                InputProps={{
                                                    endAdornment:<InputAdornment position="end">veh.</InputAdornment>,
                                                }}
                                                onChange={handleTMDA}                                            
                                            />
                                        </FormControl>
                                    </TableCell>
                                    <TableCell align="center" sx={{ p: 0, m: 0 }}>
                                        <FormControl fullWidth sx={{ m: 1, width: 'auto', minWidth: 120 }}>
                                            <InputLabel id="init-hour-select-label">
                                                Hora inicio
                                            </InputLabel>
                                            <Select
                                                name="since_hs"
                                                label="Hora inicio"
                                                onChange={handleTMDA}
                                            >
                                                <MenuItem value={0}>00:00</MenuItem>
                                                <MenuItem value={1}>01:00</MenuItem>
                                                <MenuItem value={2}>02:00</MenuItem>
                                                <MenuItem value={3}>03:00</MenuItem>
                                                <MenuItem value={4}>04:00</MenuItem>
                                                <MenuItem value={5}>05:00</MenuItem>
                                                <MenuItem value={6}>06:00</MenuItem>
                                                <MenuItem value={7}>07:00</MenuItem>
                                                <MenuItem value={8}>08:00</MenuItem>
                                                <MenuItem value={9}>09:00</MenuItem>
                                                <MenuItem value={10}>10:00</MenuItem>
                                                <MenuItem value={11}>11:00</MenuItem>
                                                <MenuItem value={12}>12:00</MenuItem>
                                                <MenuItem value={13}>13:00</MenuItem>
                                                <MenuItem value={14}>14:00</MenuItem>
                                                <MenuItem value={15}>15:00</MenuItem>
                                                <MenuItem value={16}>16:00</MenuItem>
                                                <MenuItem value={17}>17:00</MenuItem>
                                                <MenuItem value={18}>18:00</MenuItem>
                                                <MenuItem value={19}>19:00</MenuItem>
                                                <MenuItem value={20}>20:00</MenuItem>
                                                <MenuItem value={21}>21:00</MenuItem>
                                                <MenuItem value={22}>22:00</MenuItem>
                                                <MenuItem value={23}>23:00</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </TableCell>
                                    <TableCell align="center" sx={{ p: 0, m: 0 }}>
                                        <FormControl fullWidth sx={{ m: 1, width: 'auto', minWidth: 120 }}>
                                            <InputLabel id="final-hour-select-label">
                                                Hora final
                                            </InputLabel>
                                            <Select
                                                name="till_hs"
                                                label="Hora final"
                                                onChange={handleTMDA}
                                            >
                                                <MenuItem value={0}>00:00</MenuItem>
                                                <MenuItem value={1}>01:00</MenuItem>
                                                <MenuItem value={2}>02:00</MenuItem>
                                                <MenuItem value={3}>03:00</MenuItem>
                                                <MenuItem value={4}>04:00</MenuItem>
                                                <MenuItem value={5}>05:00</MenuItem>
                                                <MenuItem value={6}>06:00</MenuItem>
                                                <MenuItem value={7}>07:00</MenuItem>
                                                <MenuItem value={8}>08:00</MenuItem>
                                                <MenuItem value={9}>09:00</MenuItem>
                                                <MenuItem value={10}>10:00</MenuItem>
                                                <MenuItem value={11}>11:00</MenuItem>
                                                <MenuItem value={12}>12:00</MenuItem>
                                                <MenuItem value={13}>13:00</MenuItem>
                                                <MenuItem value={14}>14:00</MenuItem>
                                                <MenuItem value={15}>15:00</MenuItem>
                                                <MenuItem value={16}>16:00</MenuItem>
                                                <MenuItem value={17}>17:00</MenuItem>
                                                <MenuItem value={18}>18:00</MenuItem>
                                                <MenuItem value={19}>19:00</MenuItem>
                                                <MenuItem value={20}>20:00</MenuItem>
                                                <MenuItem value={21}>21:00</MenuItem>
                                                <MenuItem value={22}>22:00</MenuItem>
                                                <MenuItem value={23}>23:00</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </TableCell>
                                    <TableCell align="center" sx={{ p: 0, m: 0 }}>
                                        <FormControl fullWidth sx={{ m: 1, width: 'auto', minWidth: 120 }}>
                                            <InputLabel id="day-select-label">Día</InputLabel>
                                            <Select
                                                name="day"
                                                label="Día"
                                                onChange={handleTMDA}
                                            >
                                                <MenuItem value={0}>Lunes</MenuItem>
                                                <MenuItem value={1}>Martes</MenuItem>
                                                <MenuItem value={2}>Miercoles</MenuItem>
                                                <MenuItem value={3}>Jueves</MenuItem>
                                                <MenuItem value={4}>Viernes</MenuItem>
                                                <MenuItem value={5}>Sábado</MenuItem>
                                                <MenuItem value={6}>Domingo</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </TableCell>
                                    <TableCell align="center" sx={{ p: 0, m: 0 }}>
                                        <FormControl sx={{ m: 1, width: 'auto', minWidth: 120 }}>
                                            <InputLabel id="month-label">Mes</InputLabel>
                                            <Select
                                                name="month"
                                                label="Mes"
                                                onChange={handleTMDA}
                                            >
                                                <MenuItem value={0}>Enero</MenuItem>
                                                <MenuItem value={1}>Febrero</MenuItem>
                                                <MenuItem value={2}>Marzo</MenuItem>
                                                <MenuItem value={3}>Abril</MenuItem>
                                                <MenuItem value={4}>Mayo</MenuItem>
                                                <MenuItem value={5}>Junio</MenuItem>
                                                <MenuItem value={6}>Julio</MenuItem>
                                                <MenuItem value={7}>Agosto</MenuItem>
                                                <MenuItem value={8}>Setiembre</MenuItem>
                                                <MenuItem value={9}>Octubre</MenuItem>
                                                <MenuItem value={10}>Noviembre</MenuItem>
                                                <MenuItem value={11}>Diciembre</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </TableCell>
                                    <TableCell align="right" sx={{ p: 0, m: 0 }}>
                                        <TextField
                                            id="outlined-read-only-input"
                                            label="TMDA-Auto"
                                            sx={{ m: 1, width: '16ch' }}
                                            value={tmda1()}
                                            InputProps={{
                                                readOnly: true,
                                                endAdornment:<InputAdornment position="end">veh.</InputAdornment>,
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell align="right" sx={{ p: 0, m: 0 }}>
                                        <TextField
                                            id="outlined-read-only-input"
                                            label="TMDA-Cam./Bus"
                                            sx={{ m: 1, width: '16ch' }}
                                            value={tmda2()}
                                            InputProps={{
                                                readOnly: true,
                                                endAdornment:<InputAdornment position="end">veh.</InputAdornment>,
                                            }}
                                        />
                                    </TableCell>                            
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Box>
        </>
    );
}
