# Hotel Pricing Engine

## Overview

The Hotel Pricing Engine is a web application that dynamically adjusts hotel room prices based on historical data, competitor prices, and user-defined parameters such as occupancy rate, base price, minimum price, and price factor. This application allows users to experiment with different inputs and see how they impact the adjusted room prices.

## Features

- Dynamic price adjustments based on predefined rules and historical data
- Interactive sliders for adjusting occupancy rate, base price, minimum price, and price factor
- Visualization of historical prices and occupancies
- Display of adjusted prices for a single room

## Algorithm

The algorithm adjusts room prices based on the following rules:

1. **Occupancy Rate Adjustments:**
   - If occupancy exceeds 80%, prices increase by 20%.
   - If occupancy is below 50%, prices decrease by 20%.

2. **Average Occupancy and Competitor Prices:**
   - If the average occupancy is above 75%, prices increase by an additional 10%.

3. **Price Factor:**
   - The price factor multiplier is applied to the base price.

4. **Minimum Price:**
   - The adjusted price will not go below the minimum price set by the user.

### Calculation Steps:

1. Start with the base price.
2. Apply occupancy rate adjustments.
3. Consider average occupancy and competitor prices.
4. Apply the price factor multiplier.
5. Ensure the adjusted price is not below the minimum price.

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Backend Setup

1. **Navigate to the backend directory:**

   ```bash
   cd backend
   ```

2. **Install the dependencies:**

   ```bash
   npm install
   ```

3. **Start the backend server:**

   ```bash
   node server.js
   ```

   The backend server will start on port 5000.

### Frontend Setup

1. **Navigate to the frontend directory:**

   ```bash
   cd frontend
   ```

2. **Install the dependencies:**

   ```bash
   npm install
   ```

3. **Start the frontend server:**

   ```bash
   npm start
   ```

   The frontend server will start on port 3000.

### Running the Application

1. **Start the backend server (if not already started):**

   ```bash
   cd backend
   npm install
   node server.js
   ```

2. **Start the frontend server (if not already started):**

   ```bash
   cd frontend
   npm install
   npm start
   ```

3. **Open your web browser and navigate to:**

   ```
   http://localhost:3000
   ```

   You should see the Hotel Pricing Engine application.

## Usage Instructions

1. **Adjust the Sliders:**

   - **Occupancy Slider:** Adjust the current occupancy percentage. Higher occupancy generally increases prices.
   - **Base Price Slider:** Set the base price for the rooms. This is the starting point before any adjustments.
   - **Minimum Price Slider:** Set the minimum price for the rooms. Prices will not go below this value.
   - **Price Factor Slider:** Multiplier applied to the price. This can be used to adjust prices based on additional factors or desired pricing strategy.

2. **View Adjusted Prices:**
   - The adjusted price will be updated automatically based on the slider inputs and displayed in the price list.

3. **Historical Data:**
   - Historical prices and occupancies are shown in the chart at the bottom of the site. The adjusted prices are influenced by these historical values, with higher average occupancies leading to higher prices.

## File Structure

```
hotel-pricing-engine/
├── backend/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Chart.js
│   │   │   ├── InputForm.js
│   │   │   ├── PriceList.js
│   │   │   └── InfoBox.js
│   │   ├── App.js
│   │   └── index.js
│   ├── public/
│   ├── package.json
│   └── README.md
└── README.md
```