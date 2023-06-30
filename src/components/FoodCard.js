import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

const styles = {
  button: {
    borderColor: '#DD7230',
    color: 'black',
    boxShadow: 'none',
    fontSize: '12px'
  },
  selectedButton: {
    borderColor: '#DD7230',
    color: 'white',
    backgroundColor: '#DD7230',
    fontSize: '12px'
  }
};

const CustomCardFood = ({ image, title, description, inCart, onAddToCart }) => {
  return (
    <Card
      sx={{
        boxShadow: 'none',
        padding: '30px 30px 0px 30px',
        borderRadius: '20px',
        minWidth: '270px',
        marginBottom: '20px'
      }}
    >
      <CardMedia
        component="img"
        image={image}
        sx={{
          width: 200,
          height: 200,
          borderRadius: '50%',
          backgroundColor: '#F4C95D',
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
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px' }}>
          <Typography variant="body2" color="black" sx={{ textAlign: 'center', fontSize: '12px', fontWeight: 'bold' }}>
            {description}
          </Typography>
          {!inCart ? (
            <Button variant="outlined" style={styles.button} onClick={onAddToCart}>
              Add to Cart
            </Button>
          ) : (
            <Button variant="outlined" style={styles.selectedButton} disabled>
              Added to Cart
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default function FoodCard({ image, title, description }) {
  const [inCart, setInCart] = useState(false);

  const handleAddToCart = () => {
    setInCart(true);
  };

  return <CustomCardFood image={image} title={title} description={description} inCart={inCart} onAddToCart={handleAddToCart} />;
}
