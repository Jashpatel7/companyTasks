import '../styles/custom.css';
import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import Info from './Tabcomponents/Info';
import Images from './Tabcomponents/Images';
import Pricing from './Tabcomponents/Pricing';
import Shipping from './Tabcomponents/Shipping';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  paperContainer: {
      maxWidth: "95%",
      alignItems: "center",
      margin: "auto",
      borderRadius: "25px 25px 2px 2px",
      top: "4%",
  },
  tabStyle: {
      marginTop:"-4.5%",
      borderBottom: "2px solid black",
      marginBottom: "0px"
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
      setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Header/>
      <Paper elevation = {2} className = {classes.paperContainer}>      
        <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="white"
              variant="fullWidth"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
              className = {classes.tabStyle}
            >
            <Tab label="Basic Info" {...a11yProps(0)}/>
            <Tab label="Images" {...a11yProps(1)} />
            <Tab label="Pricing" {...a11yProps(2)} />
            <Tab label="Shipping" {...a11yProps(3)} />
          </Tabs>
        
          <TabPanel value={value} index={0}>
            <Info/>
          </TabPanel>

          {/* Images */}
          <TabPanel value={value} index={1}>
            <Images/>
          </TabPanel>
          
          {/* Pricing */}
          <TabPanel value={value} index={2}>
            <Pricing/>
          </TabPanel>
          
          {/* Shipping */}
          <TabPanel value={value} index={3}>
            <Shipping/>
          </TabPanel>
      </Paper>
  </div>
  );
}
