import React from 'react';
import {
    makeStyles,
} from '@material-ui/core/styles';
import Superman from '../../imgs/superman.jpeg';
import Flash from '../../imgs/flash.png';
import Aquaman from '../../imgs/aquaman.png';

const useStyles = makeStyles((theme) => ({
    imgContainer: {
        borderRadius: "20px",
        padding:"2%",
    },
    imgWrapper: {
        maxWidth: "25%",
        display: "inline-block",
        flexWrap: "wrap",
        margin: "1%",
        '& img': {
            width: "200px",
            borderRadius: "15%"
        }
   },
}));

export default function Images() {
    const classes = useStyles();
    return(
        <>
            <div className={classes.imgContainer}>
                <div className = {classes.imgWrapper}>
                    <img src ={Flash} alt="Flash"/>
                </div>
                <div className = {classes.imgWrapper}>
                    <img src ={Aquaman} alt="Aquaman"/>
                </div>
                <div className = {classes.imgWrapper}>
                    <img src ={Superman} alt="Superman"/>
                </div>
                <div className = {classes.imgWrapper}>
                    <img src ={Flash} alt="Flash"/>
                </div>
                <div className = {classes.imgWrapper}>
                    <img src ={Aquaman} alt="Aquaman"/>
                </div>
                <div className = {classes.imgWrapper}>
                    <img src ={Superman} alt="Superman"/>
                </div>
                <div className = {classes.imgWrapper}>
                    <img src ={Flash} alt="Flash"/>
                </div>
                <div className = {classes.imgWrapper}>
                    <img src ={Aquaman} alt="Aquaman"/>
                </div>
                <div className = {classes.imgWrapper}>
                    <img src ={Superman} alt="Superman"/>
                </div>
            </div>      
        </>
    );
}