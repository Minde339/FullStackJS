import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import { getList } from '../../Services/getCompanies';

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
});

export default function CustomPaginationActionsTable() {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
const [list, setList] = useState([]);
    
    useEffect(() => {
        getList(setList);
    }, []);
    

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, list.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="custom pagination table">
              <TableHead>
                  <TableRow>
                    <StyledTableCell align="left">Tinklas</StyledTableCell>
                    <StyledTableCell align="left">Miestas</StyledTableCell>
                    <StyledTableCell align="left">Gyvenviete</StyledTableCell>
                    <StyledTableCell align="left">Gatve</StyledTableCell>
                    <StyledTableCell align="left">Namas</StyledTableCell>
                    <StyledTableCell align="left">Butas</StyledTableCell>
                    <StyledTableCell align="left">Kliento pavadinimas</StyledTableCell>
                    <StyledTableCell align="left">Asm/Įmonės Kodas</StyledTableCell>
                    <StyledTableCell align="right">Paslaugų planas</StyledTableCell>
                    <StyledTableCell align="right">Mėnesinis mokestis</StyledTableCell>
                    <StyledTableCell align="right">Ab kodas</StyledTableCell>
                    <StyledTableCell align="right">Veiklos sritis</StyledTableCell>
                    <StyledTableCell align="right">Segmentas</StyledTableCell>
                    <StyledTableCell align="right">Darbuotojų kiekis</StyledTableCell>
                    <StyledTableCell align="right">Pardavimo pajamos</StyledTableCell>
                    <StyledTableCell align="right">Įmonės Dydis</StyledTableCell>
          </TableRow>
              </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? list.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : list
                  ).map((item) => (
            <TableRow key={item._id}>
              <TableCell component="th" scope="row">
                {item.network}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {item.city}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {item.settlement}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                {item.street}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                {item.houseNumber}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                {item.flatNumber}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                {item.name}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                {item.servicesPlan}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                {item.services}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                {item.monthlyPayment}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                {item.customerCode}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                {item.segment}
                  </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                {item.activityType}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                {item.employees}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                {item.salesIncome}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                {item.sizeOfCompany}
              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
                  )}
                  <TableRow>
                      <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={11}
              count={list.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
                      />
                  </TableRow>
              </TableBody>
      </Table>
    </TableContainer>
  );
}