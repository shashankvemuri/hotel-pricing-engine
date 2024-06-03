import React from 'react';
import { Slider, Box, Typography } from '@mui/material';

const InputForm = ({ occupancy, setOccupancy, minPrice, setMinPrice, basePrice, setBasePrice, priceFactor, setPriceFactor }) => {
  const handleOccupancyChange = (event, newValue) => {
    setOccupancy(newValue);
  };

  const handleMinPriceChange = (event, newValue) => {
    setMinPrice(newValue);
  };

  const handleBasePriceChange = (event, newValue) => {
    setBasePrice(newValue);
  };

  const handlePriceFactorChange = (event, newValue) => {
    setPriceFactor(newValue);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h6" component="h2">
        Adjust Room Pricing
      </Typography>
      <Typography variant="body1">Occupancy: {occupancy}%</Typography>
      <Slider
        value={occupancy}
        onChange={handleOccupancyChange}
        aria-labelledby="occupancy-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={100}
      />
      <Typography variant="body1">Minimum Price: ${minPrice}</Typography>
      <Slider
        value={minPrice}
        onChange={handleMinPriceChange}
        aria-labelledby="min-price-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={50}
        max={500}
      />
      <Typography variant="body1">Base Price: ${basePrice}</Typography>
      <Slider
        value={basePrice}
        onChange={handleBasePriceChange}
        aria-labelledby="base-price-slider"
        valueLabelDisplay="auto"
        step={10}
        marks
        min={50}
        max={500}
      />
      <Typography variant="body1">Price Factor: {priceFactor}</Typography>
      <Slider
        value={priceFactor}
        onChange={handlePriceFactorChange}
        aria-labelledby="price-factor-slider"
        valueLabelDisplay="auto"
        step={0.1}
        marks
        min={0.5}
        max={2}
      />
    </Box>
  );
};

export default InputForm;