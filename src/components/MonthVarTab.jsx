import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createTabOne(
  month: string,
  cars: number,
  trucknbus: number,
) {
  return { month, cars, trucknbus};
}

const rows = [
  createTabOne('Lunes', 0.58, 2.05),
  createTabOne('Martes', 0.19, 6.61),
  createTabOne('Miercoles', 0.44, 10.25),
  createTabOne('Jueves', 0, 6.83),
  createTabOne('Viernes', 0.14, 8.43),
  createTabOne('Sábado', 0.51, 8.2),
  createTabOne('Domingo', 2.33, 6.61),
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 400 }} size="small">
        <TableHead>
          <TableRow >
            <TableCell />
            <TableCell align="center">Variación Mensual</TableCell>
            <TableCell />
          </TableRow>
          <TableRow>
            <TableCell align="center">Mes</TableCell>
            <TableCell align="center">Autos</TableCell>
            <TableCell align="center">Camiones/Ómnibus</TableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {rows.map((row) => (
            <TableRow
              key={row.month}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
            >
              <TableCell align="center" component="th" scope="row">
                {row.month}
              </TableCell>
              <TableCell align="center">{row.cars}</TableCell>
              <TableCell align="center">{row.trucknbus}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}