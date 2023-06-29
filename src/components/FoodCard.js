import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const CustomCardFood = ({ image, title, description }) => {
  return (
    <Card sx={{ boxShadow: 'none', paddingTop: '30px' , borderRadius: '20px'}}>
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
        <Typography gutterBottom component="div" sx={{ textAlign: 'center', fontSize: '20px' }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default function FoodCard({ image, title, description }) {
  return <CustomCardFood image={image} title={title} description={description} />;
}
