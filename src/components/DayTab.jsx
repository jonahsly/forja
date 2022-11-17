import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';



function createTabOne(
  day: string,
  cars: number,
  trucknbus: number,
) {
  return { day, cars, trucknbus};
}

const rows = [
  createTabOne('Lunes', 84.01, 108.69),
  createTabOne('Martes', 81.19, 110.55),
  createTabOne('Miercoles', 85.38, 105.27),
  createTabOne('Jueves', 83.12, 114.27),
  createTabOne('Viernes', 83.98, 111.85),
  createTabOne('Sábado', 123.91, 109.86),
  createTabOne('Domingo', 158.41, 39.51),
];

export default function DayTable() {
  const [open, setOpen] = React.useState(false);
  return (
    <TableContainer sx={{ width: 'auto' }}>
      <Table sx={{ width: 'auto' }}>
        <TableBody>
          <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
            <TableCell>
              <IconButton
                size="medium"
                onClick={() => setOpen(!open)}
              >
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </TableCell>
            <TableCell component="th" scope="row">
              Variación Diaria
            </TableCell>
          </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>   
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Día</TableCell>
                      <TableCell align="center">Autos</TableCell>
                      <TableCell align="center">Camiones/Ómnibus</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody >
                    {rows.map((row) => (
                      <TableRow
                        key={row.day}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                      >
                      <TableCell align="center" component="th" scope="row">
                        {row.day}
                      </TableCell>
                      <TableCell align="center">{row.cars}</TableCell>
                      <TableCell align="center">{row.trucknbus}</TableCell>
                    </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}