import React from 'react';
import { Box, Grid, Tab, Tabs, Typography } from '@mui/material';
import eatrice from '../images/rice.svg';
import eatnoodles from '../images/noodles.svg';
import eatsoup from '../images/soup.svg';
import koththu from '../images/koththu.svg';
import nrice from '../images/nrice.svg';
import pudding from '../images/pudding.svg';
import brownie from '../images/brownies.svg';
import hopper from '../images/hopper.svg';
import shoppers from '../images/shoppers.svg';
import backImage from '../images/Rectangle.svg';
import FoodCard from '../components/FoodCard';
import Topbar from '../components/Topbar';
import PropTypes from 'prop-types';
import { styled } from '@mui/system';
import Footer from '../components/Footer';

const styles = {
    sectionS: {
      paddingRight: '20px',
      paddingLeft: '20px',
      paddingTop: '30px',
      paddingBottom: '30px'
    },
    heading: {
        paddingTop: '30px',
        fontWeight: 'bold',
        fontSize: '30px',
        display: 'block',
        textAlign: 'center',
        margin: '0 auto',
    },
    button: {
        backgroundColor: '#FFA500',
        color: 'black',
        boxShadow: 'none',
    },
    buttonPosition: {
        display: 'flex', 
        justifyContent: 'center'
    },
    buttonPosition1: {
        display: 'flex', 
        justifyContent: 'left',
        paddingTop: '50px',
        paddingLeft: '450px'
    },
    backImage: {
        backgroundImage: `url(${backImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginBottom: '50px'
    },
    lastDesc: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: '52px',
        color: 'white',
        margin: '0px 350px 0px 450px'
    },
    menuContainer: {
        backgroundColor: "#F4C95D",
        maxWidth: 'none',
        borderRadius: '40px',
        padding: '50px',
      },
      wrapper: {
        backgroundColor: "#FFFFFF",
        paddingRight: '80px',
        paddingLeft: '80px',
        paddingTop: '10px',
        paddingBottom: '30px'
      },
      foodcard: {
        marginBottom: '10px'
      }
};

const StyledTabIndicator = styled('span')(({ theme }) => ({
    backgroundColor: 'red',
  }));

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 5 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export default function Menu() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
    <Box>
        <Topbar/>
        <Box style={styles.wrapper}>
        <Grid container style={styles.menuContainer}>
            <span style={styles.heading}>Our Menu</span>

           <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="food items"  
                    textColor="black"
                    indicatorColor="black"
                    TabIndicatorProps={{
                        component: StyledTabIndicator,
                        sx: { height: '3px', backgroundColor: '#FFA500' },
                    }}>
                    <Tab label="All" {...a11yProps(0)} />
                    <Tab label="Breakfast" {...a11yProps(1)} />
                    <Tab label="Lunch" {...a11yProps(2)} />
                    <Tab label="Dinner" {...a11yProps(3)} />
                    <Tab label="Dessert" {...a11yProps(4)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={styles.sectionS} justifyContent={'space-around'}>
                        <FoodCard
                            image={eatrice}
                            title="EAT ME SPECIAL FRIED RICE"
                            description="Rs 1200"
                        />
                        <FoodCard
                            image={eatnoodles}
                            title="EAT ME SPECIAL NOODLES"
                            description="Rs 800"
                        />
                        <FoodCard
                            image={eatsoup}
                            title="EAT ME SPECIAL SOUP"
                            description="Rs 1000"
                        />
                        <FoodCard
                            image={koththu}
                            title="KOTHTHU"
                            description="Rs 600"
                        />
                        <FoodCard
                            image={hopper}
                            title="5 HOPPERS"
                            description="Rs 100"
                        />
                        <FoodCard
                            image={shoppers}
                            title="50 STRING HOPPERS"
                            description="Rs 100"
                        />
                        <FoodCard
                            image={nrice}
                            title="RICE & CURRY"
                            description="Rs 300"
                        />
                        <FoodCard
                            image={brownie}
                            title="BROWNIES"
                            description="Rs 100"
                        />
                        <FoodCard
                            image={pudding}
                            title="PUDDING"
                            description="Rs 200"
                        />
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={styles.sectionS} justifyContent={'space-around'}>
                        <FoodCard
                            image={hopper}
                            title="5 HOPPERS"
                            description="Rs 100"
                        />
                        <FoodCard
                            image={shoppers}
                            title="50 STRING HOPPERS"
                            description="Rs 100"
                        />
                        <FoodCard
                            image={nrice}
                            title="RICE & CURRY"
                            description="Rs 300"
                        />
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={styles.sectionS} justifyContent={'space-around'}>
                        <FoodCard
                            image={eatrice}
                            title="EAT ME SPECIAL FRIED RICE"
                            description="Rs 1200"
                        />
                        <FoodCard
                            image={eatnoodles}
                            title="EAT ME SPECIAL NOODLES"
                            description="Rs 800"
                        />
                        <FoodCard
                            image={eatsoup}
                            title="EAT ME SPECIAL SOUP"
                            description="Rs 1000"
                        />
                          <FoodCard
                            image={nrice}
                            title="RICE & CURRY"
                            description="Rs 300"
                        />
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={styles.sectionS} justifyContent={'space-around'}>
                        <FoodCard
                            image={eatrice}
                            title="EAT ME SPECIAL FRIED RICE"
                            description="Rs 1200"
                        />
                        <FoodCard
                            image={eatnoodles}
                            title="EAT ME SPECIAL NOODLES"
                            description="Rs 800"
                        />
                        <FoodCard
                            image={eatsoup}
                            title="EAT ME SPECIAL SOUP"
                            description="Rs 1000"
                        />
                        <FoodCard
                            image={koththu}
                            title="KOTHTHU"
                            description="Rs 600"
                        />
                          <FoodCard
                            image={nrice}
                            title="RICE & CURRY"
                            description="Rs 300"
                        />
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={styles.sectionS} justifyContent={'space-around'}>
                        <FoodCard
                            image={brownie}
                            title="BROWNIES"
                            description="Rs 100"
                        />
                        <FoodCard
                            image={pudding}
                            title="PUDDING"
                            description="Rs 200"
                        />
                    </Grid>
                </TabPanel>
            </Box>
            </Grid>
        </Box>
        <Footer/>
    </Box>
  );
}
