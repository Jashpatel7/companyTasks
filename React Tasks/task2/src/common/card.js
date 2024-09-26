import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../styles/custom.css';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { grey, yellow, blue, green } from '@material-ui/core/colors';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import '../fonts/Poppins/stylesheet.css';
import { Link } from 'react-router-dom';

// Whole Page CSS
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    margin: "auto",
    borderRadius: "20px",
  },
  appbarStyle: {
    backgroundColor: "#252F3E",
    textAlign: "justify",
    padding: "4% 11.8%",
    '& h1':{
      fontWeight: "600",
      fontSize: "50px",
      letterSpacing: "1px",
      marginBottom: "0",
      marginTop: "0",
    },
    '& p':{
      marginBottom: "0",
      marginTop: "1.5%",
      color: "rgba(255,255,255,0.8)"
    },
  },
  Container: {
    position: "relative",
  },
  gridContainer: {
    margin: 'auto',
    width: "80%",
    marginBottom: "2%",
  },
  cardWrapper: {
    maxWidth: "30%",
    margin: "15px",
  },

  // First Style
  headerStyle1: {
      backgroundColor: blue[500],
      color:"#fff",
  },
  cardContent1: {
    position: "relative", 
    padding: "0",
    '& p': {
        marginBottom: "5px",
        fontWeight: "600",
        letterSpacing: "1px",
        marginTop: "10%",
        fontSize: "18px"
    },
    '& span': {
        color: "rgba(0,0,0,.6)",
        paddingBottom: "3%"
    },
    '& button': {
        cursor: "pointer",
        display: "block",
        background: "transparent",
        padding: "2.5% 13%",
        borderRadius: "20px",
        border: "1px solid rgba(0,0,0,0.5)",
        fontWeight: "600",
        letterSpacing: "1px",
        margin: "auto",
        marginTop: "10%",
        marginBottom: "5%",
        transition: "1s",
        '&:hover': {
            transform: "scale(1.2)"
        }
    },
    '& div':{
      position: "absolute",
      height: "5px",
      display: "block",
      width: "100%",
      bottom: "0",
      backgroundColor: blue[500],
    },
  },

  //Second Style
  headerStyle2: {
      backgroundColor: green[500],
      color: "#fff",
  },
  cardContent2: {
      position: "relative",
      padding: "0",
      '& p': {
        marginBottom: "5px",
        fontWeight: "600",
        letterSpacing: "1px",
        marginTop: "10%",
        fontSize: "18px"
        },
      '& span': {
        color: "rgba(0,0,0,.6)",
        paddingBottom: "3%"
      },
      '& button': {
        cursor: "pointer",
        display: "block",
        background: "transparent",
        padding: "2.5% 13%",
        borderRadius: "20px",
        border: "1px solid rgba(0,0,0,0.5)",
        fontWeight: "600",
        letterSpacing: "1px",
        margin: "auto",
        marginTop: "10%",
        marginBottom: "5%",
        transition: "1s",
        '&:hover': {
          transform: "scale(1.2)"
        }
      },
        '& div': {
          position: "absolute",
          height: "5px",
          display: "block",
          width: "100%",
          bottom: "0",
          backgroundColor: green[400],
        },
  },

  // Third Style
  headerStyle3: {
      backgroundColor: yellow[700],
      color: "#fff",
  },
  cardContent3: {
      position: "relative",
      padding: "0",
      '& p': {
        marginBottom: "5px",
        fontWeight: "600",
        letterSpacing: "1px",
        marginTop: "10%",
        fontSize: "18px"
        },
      '& span': {
        color: "rgba(0,0,0,.6)",
        paddingBottom: "3%"
      },
      '& button': {
        cursor: "pointer",
        display: "block",
        background: "transparent",
        padding: "2.5% 13%",
        borderRadius: "20px",
        border: "1px solid rgba(0,0,0,0.5)",
        fontWeight: "600",
        letterSpacing: "1px",
        margin: "auto",
        marginTop: "10%",
        marginBottom: "5%",
        transition: "1s",
        '&:hover': {
          transform: "scale(1.2)"
        }
      },
      '& div': {
          position: "absolute",
          height: "5px",
          display: "block",
          width: "100%",
          bottom: "0",
          backgroundColor: yellow[600],
        },
  },

  // Fourth Style
  headerStyle4: {
      backgroundColor: grey[700],
      color: "#fff",
  },
  cardContent4: {
      position: "relative",
      padding: "0",
      '& p': {
        marginBottom: "5px",
        fontWeight: "600",
        letterSpacing: "1px",
        marginTop: "10%",
        fontSize: "18px"
        },
      '& span': {
        color: "rgba(0,0,0,.6)",
        paddingBottom: "3%"
      },
      '& button': {
        cursor: "pointer",
        display: "block",
        background: "transparent",
        padding: "2.5% 13%",
        borderRadius: "20px",
        border: "1px solid rgba(0,0,0,0.5)",
        fontWeight: "600",
        letterSpacing: "1px",
        margin: "auto",
        marginTop: "10%",
        marginBottom: "5%",
        transition: "1s",
        '&:hover': {
          transform: "scale(1.2)"
        }
      },
      '& div': {
          position: "absolute",
          height: "5px",
          display: "block",
          width: "100%",
          bottom: "0",
          backgroundColor: grey[700],
        },
  },
  textFieldWrapper: {
      width: "100%",
      margin: "2% 0",
  },
  textfieldStyle: {
      width: "47%",
      margin: "2% 0%",
      right: "4%",
  },
  formControl: {
      width: "47.5%",
      margin: "2% 0%",
      right: "0%",
      '& selectStyle': {
        fontStyle: "italic",
      },
      '& option': {
        fontSize: "15px",
      },
  },
    customAll: {
        fontStyle: "italic",
    },
    iconStyle1: {
      position: "absolute",
      top: "14px",
      right: "17%",
      opacity: "0.9"
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

export default function RecipeReviewCard() {
  const classes = useStyles();
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  return (
    <div class="contentWrapper">

      {/* AppBar */}
        <AppBar position = "static" className = {classes.appbarStyle}>
            <h1>Welcome to Academy</h1>
            < p > Our courses will step you through the Process of building a small application, or adding a new feature to an existing application.Our courses will step you through the process of building a small application, or adding a new feature to an existing application. </p>
        </AppBar>
        
      {/* Text Fields */}
        <Grid container xs = {12} className = {classes.textFieldWrapper}>
          <Grid item xs={6}>
            <FormControl variant="outlined" className = {classes.textfieldStyle}>
              {/* < InputLabel htmlFor = "outlined-search for a-course-native-simple" > Search for a Course </InputLabel> */}
              <TextField variant = "outlined"  placeholder = "Enter a Keyword..." native label = "Search For a Course"/>
            </FormControl>
          </Grid>
           <Grid item xs={6}>
             <FormControl variant="outlined" className={classes.formControl}>
                < InputLabel htmlFor = "outlined-categories-native-simple" > Categories </InputLabel>
                    <Select native label = "Categories" className = {classes.selectStyle}
                        inputProps={{
                            name: 'age',
                            id: 'outlined-age-native-simple',
                        }} >
                      <option aria-label="Choose" value="Choose Category" selected className = {classes.customAll}>All</option>
                      <option value={"and"}>Android</option>
                      <option value={"cloud"}>Cloud</option>
                      <option value={"web"}>Web</option>
                      <option value={"fire"}>Firebase</option>
                    </Select>
                </FormControl>
          </Grid>
        </Grid>
                        
      {/* Web Cards */}
        <Grid container xs = {12} className = {classes.gridContainer}>
      <Grid item xs={4} className = {classes.cardWrapper}>
        <Card className={classes.root} elevation = {5}>
          <div className = {classes.Container}>
              <CardHeader className = {classes.headerStyle1}
                  action={<AccessTimeIcon className = {classes.iconStyle1} />}
                  title="Web"
                  subheader="30 min"
              />
          </div>
          <CardContent className = {classes.cardContent1}>
            <p>Basics Of Angular</p>
            <span>Jun 28, 2017</span>
            <button>Start</button>
            <div></div>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={4} className = {classes.cardWrapper}>
        <Card className={classes.root} elevation = {5}>
          <div className = {classes.Container}>
              <CardHeader className = {classes.headerStyle1}
                  action={<AccessTimeIcon className = {classes.iconStyle1} />}
                  title="Web"
                  subheader="60 min"
              />
          </div>
          <CardContent className = {classes.cardContent1}>
            <p>Basics Of Typescript</p>
            <span>Jun 28, 2017</span>
            <button>Continue</button>
            <div></div>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={4} className = {classes.cardWrapper}>
        <Card className={classes.root} elevation = {5}>
          <div className = {classes.Container}>
              <CardHeader className = {classes.headerStyle1}
                  action={<AccessTimeIcon className = {classes.iconStyle1} />}
                  title="Web"
                  subheader="90 min"
              />
          </div>
          <CardContent className = {classes.cardContent1}>
            < p > Building Beautiful UIs with Flutter </p>
            <span>Nov 15, 2017</span>
            <button>Start</button>
            <div></div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>

      { /* Android Cards */}
        <Grid container xs = {12} className = {classes.gridContainer}>
      <Grid item xs={4} className = {classes.cardWrapper}>
        <Card className={classes.root} elevation = {5}>
          <div className = {classes.Container}>
              <CardHeader className = {classes.headerStyle2}
                  action={<AccessTimeIcon className = {classes.iconStyle1} />}
                  title="Android"
                  subheader="30 min"
              />
          </div>
          <CardContent className = {classes.cardContent2}>
            < p > Android N: Quick Settings </p>
            <span>Jun 28, 2017</span>
            <button>Start</button>
            <div></div>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={4} className = {classes.cardWrapper}>
        <Card className={classes.root} elevation = {5}>
          <div className = {classes.Container}>
              <CardHeader className = {classes.headerStyle2}
                  action={<AccessTimeIcon className = {classes.iconStyle1} />}
                  title="Android"
                  subheader="60 min"
              />
          </div>
          <CardContent className = {classes.cardContent2}>
            < p >Sensitive Data Safe and Private </p>
            <span>Jun 28, 2017</span>
            <button>Continue</button>
            <div></div>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={4} className = {classes.cardWrapper}>
        <Card className={classes.root} elevation = {5}>
          <div className = {classes.Container}>
              <CardHeader className = {classes.headerStyle2}
                  action={<AccessTimeIcon className = {classes.iconStyle1} />}
                  title="Android"
                  subheader="90 min"
              />
          </div>
          <CardContent className = {classes.cardContent2}>
            <p> Firebase Android </p>
            <span>Nov 15, 2017</span>
            <button>Start</button>
            <div></div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    
      {/* Firebase Cards */}
        <Grid container xs = {12} className = {classes.gridContainer}>
      <Grid item xs={4} className = {classes.cardWrapper}>
        <Card className={classes.root} elevation = {5}>
          <div className = {classes.Container}>
              <CardHeader className = {classes.headerStyle3}
                  action={<AccessTimeIcon className = {classes.iconStyle1} />}
                  title="Firebase"
                  subheader="30 min"
              />
          </div>
          <CardContent className = {classes.cardContent3}>
            < p > Firebase User Management </p>
            <span>Jun 28, 2017</span>
            <button>Start</button>
            <div></div>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={4} className = {classes.cardWrapper}>
        <Card className={classes.root} elevation = {5}>
          <div className = {classes.Container}>
              <CardHeader className = {classes.headerStyle3}
                  action={<AccessTimeIcon className = {classes.iconStyle1} />}
                  title="Firebase"
                  subheader="60 min"
              />
          </div>
          <CardContent className = {classes.cardContent3}>
            < p > Cloud Functions for Firebase </p>
            <span>Jun 28, 2017</span>
            <button>Continue</button>
            <div></div>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={4} className = {classes.cardWrapper}>
        <Card className={classes.root} elevation = {5}>
          <div className = {classes.Container}>
              <CardHeader className = {classes.headerStyle3}
                  action={<AccessTimeIcon className = {classes.iconStyle1} />}
                  title="Firebase"
                  subheader="90 min"
              />
          </div>
          <CardContent className = {classes.cardContent3}>
            < p > Cloud Firestore </p>
            <span>Nov 15, 2017</span>
            <button>Start</button>
            <div></div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    
      {/* Cloud Cards */}
        <Grid container xs = {12} className = {classes.gridContainer}>
      <Grid item xs={4} className = {classes.cardWrapper}>
        <Card className={classes.root} elevation = {5}>
          <div className = {classes.Container}>
              <CardHeader className = {classes.headerStyle4}
                  action={<AccessTimeIcon className = {classes.iconStyle1} />}
                  title="Cloud"
                  subheader="30 min"
              />
          </div>
          <CardContent className = {classes.cardContent4}>
            < p > Launch Cloud Datalab </p>
            <span>Jun 28, 2017</span>
            <button>Start</button>
            <div></div>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={4} className = {classes.cardWrapper}>
        <Card className={classes.root} elevation = {5}>
          <div className = {classes.Container}>
              <CardHeader className = {classes.headerStyle4}
                  action={<AccessTimeIcon className = {classes.iconStyle1} />}
                  title="Cloud"
                  subheader="60 min"
              />
          </div>
          <CardContent className = {classes.cardContent4}>
            < p > gRPC Service with Java </p>
            <span>Jun 28, 2017</span>
            <button>Continue</button>
            <div></div>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={4} className = {classes.cardWrapper}>
        <Card className={classes.root} elevation = {5}>
          <div className = {classes.Container}>
              <CardHeader className = {classes.headerStyle4}
                  action={<AccessTimeIcon className = {classes.iconStyle1} />}
                  title="Cloud"
                  subheader="90 min"
              />
          </div>
          <CardContent className = {classes.cardContent4}>
            < p > Campaign Finance with BigQuery </p>
            <span>Nov 15, 2017</span>
            <button>Start</button>
            <div></div>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    <div className={classes.buttonWrapper}>
        <Link to="/table">Go to Table</Link>
        <Link to="/">Go to Home</Link>
    </div>
    </div>
  );
}
