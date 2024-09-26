import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles';
import FlashLogo from '../imgs/flash.png';
import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms';
import Checkbox from '@material-ui/core/Checkbox';
import '../styles/login.css';

 const useStyles = makeStyles({
        paperStyle: {
            backgroundColor: "#FFF8FF",
            maxWidth: "400px",
            width: "auto",
            height: "auto",
            padding: "2% 0%",
            textAlign: "-webkit-center",
            position: "relative",
            margin: "auto",
            marginTop: "20px"
        },
        fieldStyle: {
            backgroundColor: "white",
            color: "black",
            marginBottom: "15px",
            width: "80%",
            '&:hover': {
                backgroundColor: "rgba(128,128,128,.1)",
                oultline: "none",
                },
            '&:focus': {
                oultline: "none",
                }
            },
        buttonStyle: {
            display: "block",
            fontWeight: "500",
            textTransform: "capitalize",
            letterSpacing: "1px",
            backgroundColor: "#f06292",
            transition: "1s",
            opacity: "0.95",
            padding: "2% 22%",
            '&:hover': {
                backgroundColor: "#f06292",
                boxShadow: "none",
                transform: "scale(1.2)",
                opacity: "1",
                },
        },
        headingStyle: {
            textAlign: "center",
            letterSpacing: "1px",
            fontWeight: "500",
        }, 
        imglogoStyle: {
            width: "100px",
            display: "block",
            marginBottom: "30px",
        },
        paraStyle: {
            margin: "0%",
            marginBottom: "25px",
            textAlign: "justify",
            marginLeft: "18%",
            marginBottom: "44px",
        },
        anchorStyle: {
            textDecoration: "none",
            color: "#f06292"
        }, 
        checkboxStyle: {
            display: "inline-block",
            position: "absolute",
            left: "8%",
            top: "-40%",
            oultlineOffset: "none !important"
        },
        spanStyle: {
            textAlign: "justify",
            marginLeft: "17%",
            letterSpacing: "0.5px",
            '& a':{
                textDecoration: "none",
                color: "#f06292"
            }
        },
        ordivStyle: {
            position: "relative",
        },
        line1: {
            position: "absolute",
            left: "36%",
            bottom: "31%",
            borderBottom: "2px solid rgba(0,0,0,0.5)",
            display: "inline-block",
            width: "10%",  
        },
        line2: {
            position: "absolute",
            left: "54%",
            bottom: "31%",
            borderBottom: "2px solid rgba(0,0,0,0.5)",
            display: "inline-block",
            width: "10%",
        },
        facebookStyle: {
            display: "block",
            fontWeight: "500",
            textTransform: "capitalize",
            letterSpacing: "1px",
            backgroundColor: "dodgerblue",
            transition: "1s",
            opacity: "0.95",
            padding: "2% 9%",
            marginBottom: "2%",
            '&:hover': {
                backgroundColor: "dodgerblue",
                boxShadow: "none",
                transform: "scale(1.2)",
                opacity: "1",
            }
        },
        googleStyle: {
            display: "block",
            fontWeight: "500",
            textTransform: "capitalize",
            letterSpacing: "1px",
            backgroundColor: "#f06292",
            transition: "1s",
            opacity: "0.95",
            padding: "2% 11%",
            marginBottom: "2%",
            '&:hover': {
                backgroundColor: "#f06292",
                boxShadow: "none",
                transform: "scale(1.2)",
                opacity: "1",
            },
        },

})
export default function LoginForm() {
    const classes = useStyles();

    return (
         <div className="form">
            <Paper elevation = {3} className = {classes.paperStyle} >
                < AccessAlarmsIcon />
                     <img src ={FlashLogo} className={classes.imglogoStyle} alt="Flash"/>
                        < h1 className = {
                            classes.headingStyle
                        } > Login into Account </h1>
                     <TextField id = "3"
                     label = "Enter Email"
                     placeholder = "edward@twilight.com"
                     name = "email"
                     type = "email"
                     variant = "outlined"
                     required
                     className = {classes.fieldStyle}/>

                <TextField id = "4"
                  placeholder = "Edward@123"
                    label="Password"
                    name="password"
                    type="password"
                    variant = "outlined"
                    required
                    errorMessages={['this field is required']}
                     className = {classes.fieldStyle}
                />
                <div class="checkDiv">
                        <Checkbox className = {classes.checkboxStyle}
                                color="secondary" 
                        /><p className = {classes.paraStyle}>Remember me<span className = {classes.spanStyle}><a href="#">Forgot Password?</a > </span></p >
                </div>

                <Button variant = "contained"
                      color = "primary"
                     className = {classes.buttonStyle}>Login 
                </Button>

                <div className = {classes.ordivStyle} >
                    <span className = {classes.line1}></span>
                    <p>Or</p>
                    <span className = {classes.line2}></span>
                </div>

                <Button variant = "contained"
                      color = "primary"
                     className = {classes.facebookStyle}>Login With facebook 
                </Button>

                <Button variant = "contained"
                      color = "primary"
                     className = {classes.googleStyle}>Login with Google
                </Button>

                 <div class="createDiv">                     
                    <p>Don't Have account?</p>
                    < span > <a href="#"> create one </a></span >
                </div>
            </Paper>
        </div>
    );
}