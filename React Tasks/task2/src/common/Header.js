import React from 'react';
import {
    makeStyles,
  } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { red, green, grey } from '@material-ui/core/colors';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Batman from '../imgs/vector-batman-logo2.jpg';

const useStyles = makeStyles((theme) => ({
    appbarStyle: {
        backgroundColor: "#252F3E",
        textAlign: "justify",
        padding: "2% 3% 6% 3%",
        '& h1':{
            fontWeight: "600",
            fontSize: "50px",
            letterSpacing: "1px",
            marginBottom: "0",
            marginTop: "0",
        },
    },
    divContainer: {
        position: "relative",
        '& h2': {
            position :"absolute",
            fontWeight: "600",
            letterSpacing: "1px",
            marginBottom: "0",
            marginTop: "0",
            top: "1%",
            left: "6%"
        },
        '& p': {
            position: "absolute",
            top : "40%",
            left: "6%",
            margin: "12px 1px 0 1px",
        },
    },
    buttons: {
        position: "absolute",
        top: "25%",
        right: "1%"
    },
    genButton: {
        color: "rgba(0,0,0,.87)",
        backgroundColor: "#22d3ee",
        textTransform: "none",
        borderRadius: "20px",
        padding: "8px 25px",
        transition: '.75s',
        '&:hover': {
          backgroundColor: red[600],
          color: "#fff",
        },
    },
    genButton2: {
      color: "rgba(0,0,0,.87)",
      backgroundColor: grey[300],
      textTransform: "none",
      borderRadius: "20px",
      padding: "8px 25px",
      transition: '.75s',
      margin: "0 0 0 10px",
      '&:hover': {
        backgroundColor: green[600],
        color: "#fff",
      },
    },
}));

export default function Header() {
    const classes = useStyles();
    return(
        <React.Fragment>
            <AppBar position = "static" className = {classes.appbarStyle}>
                <div className = {classes.divContainer}>
                    <Avatar alt="Batman" src={Batman} />
                    <h2> Braies Lake - Canvas Print </h2>
                    <p>Product Detail</p>
                    <div className = {classes.buttons}>
                        <Button variant="contained" color="primary" href="#contained-buttons" className = { classes.genButton}>
                        <DeleteOutlineIcon />&nbsp;&nbsp;Remove
                        </Button>
                        <Button variant="contained" color="primary" href="#contained-buttons" className = { classes.genButton2}>
                        Save
                        </Button>
                    </div>
                </div>
            </AppBar>      
        </React.Fragment>
    );
}