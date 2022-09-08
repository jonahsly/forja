import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function createTabOne(
  hour: string,
  cars: number,
  trucknbus: number,
) {
  return { hour, cars, trucknbus};
}

const rows = [
  createTabOne('00:00', 0.58, 2.05),
  createTabOne('01:00', 0.19, 6.61),
  createTabOne('02:00', 0.44, 10.25),
  createTabOne('03:00', 0, 6.83),
  createTabOne('04:00', 0.14, 8.43),
  createTabOne('05:00', 0.51, 8.2),
  createTabOne('06:00', 2.33, 6.61),
  createTabOne('07:00', 5.31, 7.06),
  createTabOne('08:00', 5.9, 8.2),
  createTabOne('09:00', 4.88, 8.66),
  createTabOne('10:00', 5.46, 8.43),
  createTabOne('11:00', 4.44, 6.83),
  createTabOne('12:00', 4.22, 4.1),
  createTabOne('13:00', 6.19, 2.73),
  createTabOne('14:00', 6.91, 1.59),
  createTabOne('15:00', 8.15, 0.91),
  createTabOne('16:00', 7.79, 0.46),
  createTabOne('17:00', 9.97, 0.46),
  createTabOne('18:00', 7.21, 0.33),
  createTabOne('19:00', 6.91, 0),
  createTabOne('20:00', 5.02, 0.46),
  createTabOne('21:00', 3.78, 0),
  createTabOne('22:00', 2.33, 0),
  createTabOne('23:00', 1.24, 0.8),
];


export default function CollapsibleTable() {

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
            Variación Horaria
          </TableCell>
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
                        key={row.hour}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                      >
                        <TableCell align="center" component="th" scope="row">
                          {row.hour}
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



