const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
app.use(cors());
app.use(express.json());

const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run("CREATE TABLE historical_data (id INTEGER PRIMARY KEY, date TEXT, occupancy INTEGER)");
  db.run("CREATE TABLE competitor_prices (id INTEGER PRIMARY KEY, date TEXT, price INTEGER)");

  // Insert mock data with clear correlation between occupancy and prices
  const insertData = db.prepare("INSERT INTO historical_data (date, occupancy) VALUES (?, ?)");
  const competitorData = db.prepare("INSERT INTO competitor_prices (date, price) VALUES (?, ?)");
  
  for (let i = 1; i <= 30; i++) {
    const date = `2023-05-${i.toString().padStart(2, '0')}`;
    const occupancy = Math.floor(Math.random() * 60) + 10; // Random occupancy between 10% and 70%
    const price = 100 + (occupancy * 1.5) + (Math.random() * 20 - 10); // Prices correlated with occupancy with some randomness
    insertData.run(date, occupancy);
    competitorData.run(date, price);
  }

  insertData.finalize();
  competitorData.finalize();
});

app.get('/api/data', (req, res) => {
  db.all("SELECT historical_data.date, historical_data.occupancy, competitor_prices.price FROM historical_data INNER JOIN competitor_prices ON historical_data.date = competitor_prices.date", [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

app.get('/api/prices', (req, res) => {
  const { occupancy, minPrice, basePrice, priceFactor } = req.query;

  // Fetch data for more complex algorithm
  db.all("SELECT * FROM historical_data", [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }

    let adjustedPrice = basePrice; // Start with base price

    // Rule-based adjustments
    if (occupancy > 80) {
      adjustedPrice *= 1.20; // Increase by 20%
    } else if (occupancy < 50) {
      adjustedPrice *= 0.80; // Decrease by 20%
    }

    // Additional factors: average occupancy and competitor prices
    const avgOccupancy = rows.reduce((sum, row) => sum + row.occupancy, 0) / rows.length;
    const avgCompetitorPrice = rows.reduce((sum, row) => sum + row.price, 0) / rows.length;
    
    if (avgOccupancy > 75) {
      adjustedPrice *= 1.10; // Increase by 10% if average occupancy is high
    }

    adjustedPrice *= priceFactor; // Apply price factor

    adjustedPrice = Math.max(adjustedPrice, minPrice); // Apply minimum price

    res.json([adjustedPrice.toFixed(2)]);
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));