# Weather Forecast Application

This is a simple weather forecast application built with React. It fetches weather data from an external API and displays it in a visually appealing manner.

## Features

- Geolocation functionality to automatically detect the user's location
- Display of current weather conditions including temperature, humidity, and wind speed
- Hourly forecast for the next 24 hours - 3hrs gap
- Integration with a weather API using OpenWeatherMap

## Technologies Used

- React: JavaScript library for building user interfaces
- TypeScript: Typed superset of JavaScript
- React Bootstrap: UI library for React applications
- Axios: Promise-based HTTP client for making API requests

## Installation

Clone the repository:

   git clone https://github.com/utsavthapa/utsav-weather-app.git

1. Navigate to the project directory:

  cd utsav-weather-app

2. Install dependencies:

  npm install

3.Start the development server:

  npm run dev

4. Open your browser and visit http://localhost:5173 to view the application.

## Configuration

You'll need to obtain an API key from OpenWeatherMap to fetch weather data. Once you have the API key, create a .env file in the root directory of the project and add the following line:

VITE_API_KEY=your_api_key_here
VITE_BASE_URL=your_base_url_here
VITE_IMG_URL=your_img_url_here

Usage
Upon launching the application, the weather data for your current location will be displayed.
You can view the hourly forecast for the next 24 hours by scrolling down the page.