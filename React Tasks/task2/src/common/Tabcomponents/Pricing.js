import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles((theme) => ({
    outerWrapper: {
        borderRadius: "20px",
        padding:"2%",
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
}));

export default function Pricing() {
    const classes = useStyles();
    return(
        <React.Fragment>
            <div className={classes.outerWrapper} >
                <TextField id = "outlined-basic" label = "Tax Excluded Price" variant = "outlined" name = "name"
                placeholder = "10"
                type = "number" fullWidth className= {classes.fieldStyle} 
                InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
                    required/>

                <TextField
                    id="outlined-textarea"
                        label="Tax included Price"
                        type = "number"
                        placeholder="15" 
                        variant="outlined" fullWidth className= {classes.fieldStyle}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                        required/>
                <TextField
                    id="outlined-textarea"
                        label="Tax Rate"
                        type = "number"
                        placeholder="5"
                        variant="outlined" fullWidth className= {classes.fieldStyle}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                        required/>
                <TextField
                    id="outlined-textarea"
                        label="Compared Price"
                        type = "number"
                        placeholder="20"
                        variant="outlined" fullWidth className= {classes.fieldStyle}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        }}
                        required/>                    
                            
            </div>
        </React.Fragment>
    );

}