import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    outerWrapper: {
        borderRadius: "20px",
        padding:"2%",
    },
    gridContainer: {
        marginBottom: "1%",
        padding: "0 3.5%",
    },
    fieldStyleShip: {
        backgroundColor: "white",
        color: "black",
        width: "90%",
        '&:hover': {
            backgroundColor: "rgba(128,128,128,0.01)",
            oultline: "none",
        },
        '&:focus': {
            oultline: "none",
        }
    },
    fieldStyle: {
        backgroundColor: "white",
        color: "black",
        margin: "1%",
        width: "90%",
        '&:hover': {
            oultline: "none",
        },
        '&:focus': {
            oultline: "none",
        }
    },
    buttonWrapper:{
        marginTop:20,
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

export default function Shipping() {
    const classes = useStyles();
    return(
        // <React.Fragment>
            <div className={classes.outerWrapper} >
                <Grid container xs = {12} className = {classes.gridContainer}>
                    <Grid item xs={4}>
                        <TextField id = "outlined-basic" label = "Width" placeholder = "100" variant = "outlined" name = "name"type = "number" fullWidth required className = {classes.fieldStyleShip}
                        InputProps={{
                              startAdornment: <InputAdornment position="start">cm</InputAdornment>,
                        }}/>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id = "outlined-basic" label = "Height" placeholder = "100" variant = "outlined" name = "name"  type = "number"
                        required                         fullWidth
                        className = {classes.fieldStyleShip }
                        InputProps={{
                              startAdornment: <InputAdornment position="start">cm</InputAdornment>,
                            }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id = "outlined-basic" label = "Depth" placeholder = "3" variant = "outlined" name = "name"
                        type = "number"
                        fullWidth
                        required
                        className = { classes.fieldStyleShip }
                        InputProps={{
                            startAdornment: <InputAdornment position="start">cm</InputAdornment>,
                        }}
                        />
                    </Grid>
                </Grid>
                <TextField id = "outlined-basic" label = "Weight" placeholder = "2" variant = "outlined" name = "name"
                type = "number"
                fullWidth
                required
                className = { classes.fieldStyle }
                InputProps={{
                        startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                        }}
                />
                <TextField id = "outlined-basic" label = "Extra Shipping Fee" placeholder = "10" variant = "outlined" name = "name"
                    type = "number"
                    fullWidth required className = {
                    classes.fieldStyle
                    }
                    InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                />
                <div className={classes.buttonWrapper}>
                    <Link to="/table">Go to Table</Link>
                    <Link to="/card">Go to Cards</Link>
                </div>
            </div>      
        // </React.Fragment>
    );
}