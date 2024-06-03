# Hotel Pricing Engine: Approach and Decisions

## Introduction

The Hotel Pricing Engine is a web application designed to dynamically adjust hotel room prices based on historical data, competitor prices, and user-defined parameters such as occupancy rate, base price, minimum price, and price factor. This document provides a detailed explanation of the approach and decisions made during the development of this application, covering aspects such as the algorithm, tech stack, design choices, and overall solution.

## Algorithm

### Approach

The core algorithm for the Hotel Pricing Engine is based on predefined rules that adjust room prices dynamically. The primary factors influencing the adjusted price include the current occupancy rate, average historical occupancy, and competitor prices. The algorithm is designed to be flexible, allowing users to set parameters and observe how these adjustments impact the final room price.

### Steps

1. **Base Price Initialization:**
   - The algorithm starts with a base price set by the user.

2. **Occupancy Rate Adjustments:**
   - If the current occupancy rate exceeds 80%, the price increases by 20%.
   - If the current occupancy rate is below 50%, the price decreases by 20%.

3. **Historical Data Consideration:**
   - The algorithm considers the average occupancy from historical data. If the average occupancy is above 75%, the price increases by an additional 10%.

4. **Competitor Prices:**
   - Competitor prices are included in the historical data to provide context for pricing adjustments.

5. **Price Factor:**
   - A price factor multiplier is applied to the base price, allowing for additional adjustments based on user-defined strategies.

6. **Minimum Price Enforcement:**
   - The final adjusted price is checked against the minimum price set by the user to ensure it does not go below this threshold.

### Example

For instance, if the base price is $100, the current occupancy is 85%, and the price factor is 1.2, the adjusted price would be calculated as follows:

- Initial base price: $100
- Occupancy adjustment: $100 * 1.2 = $120 (20% increase due to high occupancy)
- Price factor adjustment: $120 * 1.2 = $144
- Final adjusted price: $144 (ensured to be above the minimum price)

## Tech Stack

### Backend

- **Node.js:** Chosen for its non-blocking, event-driven architecture, making it suitable for handling multiple simultaneous requests.
- **Express:** A lightweight web application framework for Node.js, used to create the API endpoints.
- **SQLite:** A self-contained, serverless SQL database engine, used to store historical data and competitor prices. Its simplicity and ease of use made it an ideal choice for this project.

### Frontend

- **React:** A popular JavaScript library for building user interfaces, chosen for its component-based architecture and efficient rendering.
- **Material-UI:** A React component library that implements Google's Material Design, used to create a visually appealing and responsive user interface.
- **Chart.js:** A flexible JavaScript charting library, used to visualize historical data and occupancy rates.

## Design Choices

### User Interface

- **Input Form:** The form includes sliders for adjusting occupancy rate, base price, minimum price, and price factor. Sliders provide an intuitive way for users to set these parameters and immediately see the impact on prices.
- **Price List:** Displays the adjusted price for a single room, reflecting the user's input. This straightforward approach makes it easy for users to understand the effect of their adjustments.
- **Historical Data Chart:** Two separate panes with a shared X-axis but different Y-axes show competitor prices and occupancy rates. This layout provides a clear visualization of the correlation between these variables.

### Data Handling

- **Historical Data and Competitor Prices:** Stored in SQLite, allowing for simple queries and data manipulation. The data was used to simulate real-world scenarios.
- **Real-time Adjustments:** The application uses React's state management to update prices in real-time as users adjust the sliders. This provides immediate feedback and a seamless user experience.

## Development Approach

### Step-by-Step Process

1. **Initial Setup:**
   - Set up the project structure with separate directories for the backend and frontend.
   - Initialize Node.js and React applications and install necessary dependencies.

2. **Backend Development:**
   - Create an Express server to handle API requests.
   - Set up SQLite to store historical data and competitor prices.
   - Implement API endpoints to fetch historical data and calculate adjusted prices based on user inputs.

3. **Frontend Development:**
   - Create React components for the input form, price list, and chart.
   - Integrate Material-UI for a responsive and visually appealing design.
   - Use Chart.js to visualize historical data and occupancy rates in a dual-pane chart.

4. **Integration and Testing:**
   - Connect the frontend to the backend via API calls.
   - Test the application to ensure real-time updates and accurate price calculations.
   - Refine the user interface for better usability and aesthetics.

5. **Final Adjustments:**
   - Ensure that the slider values and adjusted prices persist across page refreshes using local storage.
   - Update the README.md and WRITEUP.md files with detailed documentation and explanations.

## Future Improvements

- **Multiple Room Support:** Extend the application to handle multiple rooms with unique pricing adjustments.
- **Machine Learning Integration:** Incorporate machine learning models to predict optimal prices based on historical trends and competitor analysis.
- **Advanced Analytics:** Provide detailed analytics and reports to help users make informed pricing decisions.