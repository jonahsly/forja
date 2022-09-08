import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';

export default function TMDA() {
  const [tmda, setTMDA] = React.useState({
    month: "may",
    day: 2,
    since_hs: 8,
    till_hs: 12,
    censusC: 100,
    censusT: 60,
  });
  const handleTMDA = (event: SelectChangeEvent) => {
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
    console.log(value)
    console.log(name)
    console.log(tmda)
  };

  const censusCars = tmda.censusC;
  const percCarshour = [
    0.58, 0.19, 0.44, 0, 0.14, 0.51, 2.33, 5.31, 5.9, 4.88, 5.46, 4.44, 4.22,
    6.19, 6.91, 8.15, 7.79, 9.97, 7.21, 6.91, 5.02, 3.78, 2.33, 1.24,
  ];
  const percCarsday = [84.01, 81.19, 85.35, 83.12, 83.98, 123, 91];
  const percCarsmonth = [
    111.33, 112.36, 105.85, 99, 95.57, 92.49, 90.1, 98.04, 88.73, 94.89, 104.79,
    106.85,
  ];
  const calcHour = () => {
    let sum = 0;
    for (let index = tmda.since_hs; index < tmda.till_hs; index++) {
      sum += percCarshour[index];
    }
    return sum;
  };
  const calcDay = () => {
    let week = [ 0, 1, 2, 3, 4, 5, 6 ];
    for (let index = 0; index < 7; index++) {
      if (tmda.day == week[index]) {
        return percCarsday[index];
      }
    }
  };
  const calcMonth = () => {
    let year = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ];
    for (let index = 0; index < 12; index++) {
      if (tmda.month == year[index]) {
        return percCarsmonth[index];
      }
    }
  };
  const tmda1 = () => {
    let result = Math.round( censusCars * (100 / calcHour()) * (100 / calcDay()) * (100 / calcMonth()) );
    
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
                        placeItems: "center",}}>
                <Paper
                    elevation={6}
                    sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        placeItems: "center",
                        width: "100%",
                        height: 'auto',
                    }}
                >
                    <TableContainer>
                        <Table sx={{ minWidth: 650, maxWidth: '100%' }}>
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
                                            label="Nº de Cam./Ómnibus"
                                            sx={{ m: 1, width: '28ch' }}
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
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
            <Paper
                elevation={6}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    placeItems: "center",
                    width: 300,
                    height: 60,
                    m: '1rem',
                }}
            >    
                <Typography variant="h6" gutterBottom>
                    T.M.D.A. = {tmda1()} veh.(Autos)
                </Typography>
            </Paper>
        </Box>
    </>
  );
}
