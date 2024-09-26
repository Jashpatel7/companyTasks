import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import AppBar from '@material-ui/core/AppBar';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import ReceiptIcon from '@material-ui/icons/Receipt';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { grey } from "@material-ui/core/colors";
// import Switch from '@material-ui/core/Switch';
import '../styles/custom.css';


function createData(Id, ref, customer, total, payment, status, date) {
  return { Id, ref, customer, total, payment, status, date};
}

const rows = [
  createData(1, '70d4d7d0', 'Jon snow', 65.00, 'Credit-Card', 'on-pre-order', '2015/06/01'),
  createData(2, '70d4f7d1', 'Cersie Lanister', 89.00, 'Net Banking', 'Preparing Order', '2015/04/15'),
  createData(3, '60d4d7d0', 'Tyrion Lanister', 80.00, 'Cash', 'on-pre-order', '2015/03/25'), 
  createData(4, '70d5d7d0', 'Arya Stark', 123.00, 'Credit-Card', 'shipped', '2015/02/02'),
  createData(5, '40b4d7d0', 'Sansa Stark', 50.00, 'Cash', 'delievered', '2015/01/14'),
  createData(6, '50j4d7d0', 'Jermie Lanister', 15.00, 'Credit-Card', 'on-pre-order', '2015/04/25'),
  createData(7, '70e4d7d0', 'Daenerys Targaryen', 75.00, 'Paypal', 'Preparing Order', '2015/03/15'),
  createData(8, '60d4d7f0', 'Bran Stark', 53.00, 'Paypal', 'Cancelled', '2015/12/25'),
  createData(9, '71d4d7d0', 'Eddard Stark', 100.00, 'Credit-Card', 'delievered', '2015/07/25'),
  createData(10, '10d4d7d0', 'Robb Stark', 37.00, 'Net Banking', 'shipped', '2015/11/10'),
  createData(11, '30d4e7d0', 'Theon Greyjoy', 72.00, 'Paypal', 'Payment error', '2015/10/10'),
];

function descendingComparator(a, b, orderBy) {   
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'Id', numeric: true, disablePadding: false, label: 'ID' },
  { id: 'ref', numeric: false, disablePadding: false, label: 'Reference' },
  { id: 'customer', numeric: false, disablePadding: false, label: 'Customer' },
  { id: 'total', numeric: true, disablePadding: false, label: 'Total($)' },
  { id: 'payment', numeric: false, disablePadding: false, label: 'Payment' },
  { id: 'status', numeric: false, disablePadding: false, label: 'Status' },
  { id: 'date', numeric: false, disablePadding: false, label: 'Date' },
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    // Table Header
    <TableHead>
      <TableRow style = {{backgroundColor: "rgba(128,128,128,.091)",}}>
        <TableCell padding="checkbox">
          <Checkbox
            variant = "secondary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'center' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  appbarStyle: {
    backgroundColor: "#252F3E",
    textAlign: "justify",
    padding: "4% 7% 6%",

  },
  divContainer: {
    position: "relative",
    marginBottom: "10px",
    '& h2': {
      position: "absolute",
      fontWeight: "600",
      letterSpacing: "1px",
      left: "3%",
      margin: "0",
      fontSize:"27px"
    },
  },
  receiptIcon: {
    position: "absolute",
    display: "inline-block",
    top: "2%",
    margin: "5px 0",
    height: "30px"
  },
  paper: {
    width: '90%',
    marginBottom: theme.spacing(2),
    margin: "auto",
    marginTop: "-4%",
    borderRadius: "30px 30px 10px 10px",
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },

  // For Search Bar
  root2: {
      padding: '0px 9px',
      display: 'flex',
      alignItems: 'center',
      maxWidth: 500,
      position: "relative",
      marginLeft: "35%",
      marginTop: "0.35%",
      borderRadius: "25px"
    },
    input: {
      // marginLeft: theme.spacing(1),
      backgroundColor: "#fff",
      flex: 1,
      padding: "0px"
    },
    iconButton: {
      padding:"7px",
    },
    buttonWrapper:{
      margin:"20px 0",
      display:"flex",
      justifyContent:"space-evenly",
      "& a":{
          textTransform:"Capitalize",
          textDecoration:"none",
          color: grey[900],
          backgroundColor: "#22d3ee",
          padding:"8px 20px",
          borderRadius:25,
          fontWeight:600
      }
  }
}));

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.Id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, Id) => {
    const selectedIndex = selected.indexOf(Id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, Id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (Id) => selected.indexOf(Id) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>

      {/* AppBar */}
      <AppBar position = "static" className = {classes.appbarStyle}>
        <div className = {classes.divContainer}>
          <ReceiptIcon className = {classes.receiptIcon}/>
          <h2> Orders </h2>
          <Paper component="form" className={classes.root2}>
             <IconButton type="submit" className={classes.iconButton} aria-label="search">
                  <SearchIcon />
            </IconButton>
            <InputBase
            className={classes.input}
            placeholder="Search"
            inputProps={{ 'aria-label': 'search google maps' }}
          />
        </Paper>
           {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
        </div>
      </AppBar>
      
      {/* Table Body */}
      <Paper className={classes.paper} elevation = {3}>
        {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.Id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.Id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.Id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell align="center" component="th" id={labelId} padding="none" style = {{paddingLeft: "0px", paddingRight: "30px"}}>
                        {row.Id}
                      </TableCell>
                      <TableCell align="left">{row.ref}</TableCell>
                      <TableCell align="left">{row.customer}</TableCell>
                      <TableCell align="center" style = {{paddingLeft: "0px", paddingRight: "30px"}}>{row.total}</TableCell>
                      <TableCell align="left">{row.payment}</TableCell>
                      <TableCell align="left">{row.status}</TableCell>
                      <TableCell align="left">{row.date}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <div className={classes.buttonWrapper}>
        <Link to="/card">Go to Cards</Link>
        <Link to="/">Go to Home</Link>
      </div>
    </div>
  );
}
