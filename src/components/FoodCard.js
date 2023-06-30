import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

const styles = {
    button: {
        borderColor: '#FFA500',
        color: 'black',
        boxShadow: 'none',
        fontSize: '12px'
    }
};

const CustomCardFood = ({ image, title, description }) => {
  return (
    <Card sx={{ boxShadow: 'none', padding: '30px 30px 0px 30px' , borderRadius: '20px', minWidth: '270px'}}>
      <CardMedia
        component="img"
        image={image}
        sx={{
          width: 200,
          height: 200,
          borderRadius: '50%',
          backgroundColor: '#FFEFE1',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          textAlign: 'center'
        }}
      />
      <CardContent>
        <Typography gutterBottom component="div" sx={{ textAlign: 'center', fontSize: '16px' }}>
          {title}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop:'20px' }}>
        <Typography variant="body2" color="black" sx={{ textAlign: 'center', fontSize: '12px', fontWeight: 'bold' }}>
          {description}
        </Typography>
        <Button variant="outlined" style={styles.button}>Add to Cart</Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default function FoodCard({ image, title, description }) {
  return <CustomCardFood image={image} title={title} description={description} />;
}
