import React from 'react';
import {
    withStyles,
    makeStyles,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
const CssTextField = withStyles({
root3: {
    '& label.Mui-focused': {
    color: 'green',
    },
    '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
    '& fieldset': {
        borderColor: 'red',
    },
    '&:hover fieldset': {
        borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
        borderColor: 'green',
    },
    },
},
})(TextField);

const useStyles = makeStyles((theme) => ({
    imgContainer: {
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

const myHeroes = [
    { 
        title: 'Iron Man', 
        universe: "Marvel" 
    },
    { 
        title: 'Hulk', 
        universe: "Marvel" 
    },
    {
        title: 'Black Widow',
        universe: "Marvel"
    },
    { 
        title: 'Captain America',
        universe:"Marvel" 
    },
    {
        title: 'Spider Man',
        universe: "Marvel"
    },
    {
        title: "Thor",
        universe: "Marvel"
    },
    {
        title: 'Loki',
        universe: "Marvel"
    },
    {
        title: 'Hawkye',
        universe: "Marvel"
    },
    {
        title: 'Antman',
        universe: "Marvel"
    },
    {
        title: 'Scarlet Witch',
        universe: "Marvel"
    },
    {
        title: 'Iron Fist',
        universe: "Marvel"
    },
    {
        title: 'Daredevil',
        universe: "Marvel"
    },
    {
        title: 'Punisher',
        universe: "Marvel"
    },
    {
        title: 'Jessica Jones',
        universe: "Marvel"
    },
    {
        title: 'Dr. Strange',
        universe: "Marvel"
    },
    {
        title: "Fury",
        universe: "Marvel"
    },
    {
        title: 'Winter Soldier',
        universe: "Marvel"
    },
    {
        title: 'Falcon',
        universe: "Marvel"
    },
    {
        title: 'Black panther',
        universe: "Marvel"
    },
    {
        title: 'Star Lord',
        universe: "Marvel"
    },
    {
        title: 'Nebula',
        universe: "Marvel"
    },
    {
        title: 'Rocket',
        universe: "Marvel"
    },
    {
        title: 'Groot',
        universe: "Marvel"
    },
    {
        title: "Wasp",
        universe: "Marvel"
    },
    { 
        title: 'Batman', 
        universe: 1997 
    },
    { 
        title: 'Superman', 
        universe: 1995 
    },
    { 
        title: 'Aquaman', 
        universe: 1994 
    },
    { 
        title: 'Flash', 
        universe: 2001 
    },
    { 
        title: 'Wonder Woman', 
        universe: 1998 
    },
    { 
        title: 'Supergirl', 
        universe: 1968 
    },
    { 
        title: 'Cyborg', 
        universe: 1998 
    },
    { 
        title: 'Oliver Queen', 
        universe: 2014 
    },
    { 
        title: 'Lois Lane', 
        universe: 1942 
    },
    { 
        title: 'Iris West', 
        universe: 1931 
    },
    { 
        title: 'Green Larten', 
        universe: 1960 
    },
];

export default function Basicinfo() {
    const classes = useStyles();
    return(
        <>
            <div className={classes.imgContainer}>
                <form className={classes.root3}>
                    <CssTextField 
                    label = "Product Name"
                    placeholder = "Coca-cola"
                    variant = "outlined"
                    name = "name"
                     type = "string" fullWidth 
                     className= {classes.fieldStyle}
                     required />
                    <TextField
                        id="outlined-textarea"
                            label="Description"
                            placeholder="Product Details"
                            multiline rows = {6}
                            variant="outlined" fullWidth className= {classes.fieldStyle}
                        />
                    <Autocomplete class = "myClass" multiple id="tags-outlined"  options={myHeroes}
                      getOptionLabel={(option) => option.title}
                      // defaultValue={[myHeroes[4]]}
                      filterSelectedOptions
                      renderInput={(params) => (
                      <TextField
                          {...params}
                          variant="outlined"
                          label="Categories"
                          InputLabelProps={{
                              shrink: true,
                          }}
                          placeholder="Select multiple categories..." fullWidth className= {classes.fieldStyle}
                        />
                      )}
                    />

                    <Autocomplete class = "myClass" multiple id="tags-outlined"  options={myHeroes}
                      getOptionLabel={(option) => option.title}
                      // defaultValue={[myHeroes[27]]}
                      filterSelectedOptions
                      renderInput={(params) => (
                      <TextField
                          {...params}
                          variant="outlined"
                          label="Tags"
                          InputLabelProps={{
                              shrink: true,
                          }}
                          placeholder="Select multiple tags..." fullWidth className= {classes.fieldStyle}
                      />
                      )}
                    />
            </form>
          </div>
        </>
    );

}