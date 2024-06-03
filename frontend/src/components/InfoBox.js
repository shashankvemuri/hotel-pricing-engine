import React from 'react';
import { Typography, Box } from '@mui/material';

const InfoBox = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, textAlign: 'left' }}>
      <Typography variant="h6" component="h2">
        How It Works
      </Typography>
      <Typography variant="body1">
        This Hotel Pricing Engine allows you to dynamically adjust room prices based on the current occupancy rate, base price, minimum price, and price factor. Here's how it works:
      </Typography>
      <Box sx={{ pl: 2 }}>
        <Typography variant="body1" component="div">
          <strong>1. Use the sliders to set:</strong>
          <ul>
            <li><strong>Occupancy</strong>: Adjust the current occupancy percentage. Higher occupancy generally increases prices.</li>
            <li><strong>Base Price</strong>: Set the base price for the rooms. This is the starting point before any adjustments.</li>
            <li><strong>Minimum Price</strong>: Set the minimum price for the rooms. Prices will not go below this value.</li>
            <li><strong>Price Factor</strong>: Multiplier applied to the price. This can be used to adjust prices based on additional factors or desired pricing strategy.</li>
          </ul>
        </Typography>
        <Typography variant="body1" component="div">
          <strong>2. Adjusted Price Calculation:</strong>
          <ul>
            <li>If occupancy exceeds 80%, prices increase by 20%.</li>
            <li>If occupancy is below 50%, prices decrease by 20%.</li>
            <li>Average occupancy and competitor prices are also considered in the final pricing.</li>
          </ul>
        </Typography>
        <Typography variant="body1" component="div">
          <strong>3. Historical Data:</strong>
          <ul>
            <li>Historical prices and occupancies are shown in the chart below.</li>
            <li>The adjusted prices are influenced by these historical values, with higher average occupancies leading to higher prices.</li>
          </ul>
        </Typography>
        <Typography variant="body1" component="div">
          <strong>4. Adjusted Prices:</strong>
          <ul>
            <li>The current adjusted price is displayed in the price list, along with individual room prices.</li>
          </ul>
        </Typography>
      </Box>
    </Box>
  );
};

export default InfoBox;