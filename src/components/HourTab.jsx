import * as React from "react";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function createTabOne(hour, cars, trucknbus) {
    return { hour, cars, trucknbus };
}
const rows = [
  createTabOne("00:00", 0.58, 0.33),
  createTabOne("01:00", 0.19, 0),
  createTabOne("02:00", 0.44, 0.46),
  createTabOne("03:00", 0, 0),
  createTabOne("04:00", 0.14, 0),
  createTabOne("05:00", 0.51, 0.8), 
  createTabOne("06:00", 2.33, 2.05),
  createTabOne("07:00", 5.31, 6.61),
  createTabOne("08:00", 5.9, 10.25),
  createTabOne("09:00", 4.88, 6.83),
  createTabOne("10:00", 5.46, 8.43),
  createTabOne("11:00", 4.44, 8.2),
  createTabOne("12:00", 4.22, 6.61),
  createTabOne("13:00", 6.19, 7.06),
  createTabOne("14:00", 6.91, 8.2),
  createTabOne("15:00", 8.15, 8.66),
  createTabOne("16:00", 7.79, 8.43),
  createTabOne("17:00", 9.97, 6.83),
  createTabOne("18:00", 7.21, 4.1),
  createTabOne("19:00", 6.91, 2.73),
  createTabOne("20:00", 5.02, 1.59),
  createTabOne("21:00", 3.78, 0.91),
  createTabOne("22:00", 2.33, 0.46),
  createTabOne("23:00", 1.24, 0.46),
];
export default function HourTable() {
  const [open, setOpen] = React.useState(false);
  return (
      <Table sx={{ maxWidth: "40ch" }}>
          <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
            <TableCell >
              <IconButton size="large" onClick={() => setOpen(!open)}>
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </TableCell>
            <TableCell component="th" scope="row">
              Variación Horaria
            </TableCell>
          </TableRow>
           <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <Table size="small" aria-label="purchases">
                  <TableRow>
                    <TableCell align="center">Hora</TableCell>
                    <TableCell align="center">Autos</TableCell>
                    <TableCell align="center">Camiones/Ómnibus</TableCell>
                  </TableRow>
                  {rows.map((row) => (
                  <TableRow
                    key={row.hour}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell align="center" component="th" scope="row">{row.hour}</TableCell>
                    <TableCell align="center">{row.cars}</TableCell>
                    <TableCell align="center">{row.trucknbus}</TableCell>
                  </TableRow>
                  ))}
                </Table>
              </Collapse>
            </TableCell>
      </Table>
  );
}
