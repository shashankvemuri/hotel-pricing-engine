import React, { useState, useEffect } from 'react';
import { Container, Box, Typography, Grid, Paper } from '@mui/material';
import axios from 'axios';
import InputForm from './components/InputForm';
import PriceList from './components/PriceList';
import Chart from './components/Chart';
import InfoBox from './components/InfoBox';

function App() {
  const [occupancy, setOccupancy] = useState(0);
  const [minPrice, setMinPrice] = useState(100);
  const [basePrice, setBasePrice] = useState(100);
  const [priceFactor, setPriceFactor] = useState(1);
  const [prices, setPrices] = useState([]);
  const [data, setData] = useState([]);
  const [adjustedPrice, setAdjustedPrice] = useState(0);

  useEffect(() => {
    loadValuesFromLocalStorage();
    fetchData();
  }, []);

  useEffect(() => {
    fetchPrices();
  }, [occupancy, minPrice, basePrice, priceFactor]);

  const loadValuesFromLocalStorage = () => {
    const savedOccupancy = localStorage.getItem('occupancy');
    const savedMinPrice = localStorage.getItem('minPrice');
    const savedBasePrice = localStorage.getItem('basePrice');
    const savedPriceFactor = localStorage.getItem('priceFactor');
    const savedAdjustedPrice = localStorage.getItem('adjustedPrice');

    if (savedOccupancy) setOccupancy(Number(savedOccupancy));
    if (savedMinPrice) setMinPrice(Number(savedMinPrice));
    if (savedBasePrice) setBasePrice(Number(savedBasePrice));
    if (savedPriceFactor) setPriceFactor(Number(savedPriceFactor));
    if (savedAdjustedPrice) setAdjustedPrice(Number(savedAdjustedPrice));
  };

  const saveValuesToLocalStorage = (newAdjustedPrice) => {
    localStorage.setItem('occupancy', occupancy);
    localStorage.setItem('minPrice', minPrice);
    localStorage.setItem('basePrice', basePrice);
    localStorage.setItem('priceFactor', priceFactor);
    if (newAdjustedPrice !== undefined) {
      localStorage.setItem('adjustedPrice', newAdjustedPrice);
    }
  };

  const fetchPrices = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/prices', {
        params: { occupancy, minPrice, basePrice, priceFactor },
      });
      setPrices(response.data);
      setAdjustedPrice(response.data[0]);
      saveValuesToLocalStorage(response.data[0]);
    } catch (error) {
      console.error('Error fetching prices:', error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/data');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Container>
      <Box sx={{ my: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Hotel Pricing Engine
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2 }}>
              <InfoBox />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <InputForm
                occupancy={occupancy}
                setOccupancy={setOccupancy}
                minPrice={minPrice}
                setMinPrice={setMinPrice}
                basePrice={basePrice}
                setBasePrice={setBasePrice}
                priceFactor={priceFactor}
                setPriceFactor={setPriceFactor}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <PriceList prices={prices} adjustedPrice={adjustedPrice} />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ p: 2 }}>
              <Chart data={data} />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default App;