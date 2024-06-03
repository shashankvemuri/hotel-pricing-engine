import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const PriceList = ({ prices, adjustedPrice }) => {
  return (
    <div>
      <Typography variant="h6" component="h2" gutterBottom>
        Adjusted Prices
      </Typography>
      <Grid container spacing={2}>
        {prices.map((price, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">Basic Room</Typography>
                <Typography variant="body1">${price}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PriceList;