import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createTabOne(
  month: string,
  cars: number,
  trucknbus: number,
) {
  return { month, cars, trucknbus};
}

const rows = [
  createTabOne('Enero', 111.33, 117.27),
  createTabOne('Febreo', 112.36, 129.43),
  createTabOne('Marzo', 105.85, 127.26),
  createTabOne('Abril', 99, 100.49),
  createTabOne('Mayo', 95.57, 84.84),
  createTabOne('Junio', 92.49, 82.6),
  createTabOne('Julio', 90.1, 82.6),
  createTabOne('Agosto', 98.04, 84.84),
  createTabOne('Setiembre', 88.73, 89.3),
  createTabOne('Octubre', 94.89, 96),
  createTabOne('Noviembre', 104.79, 107.16),
  createTabOne('Diciembre', 106.85, 98.23),
];

export default function DenseTable() {
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
            Variación Mensual</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
             
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Hora</TableCell>
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
                </Box>
              </Collapse>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}



