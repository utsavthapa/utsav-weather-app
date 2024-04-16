import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

const weatherApi = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}/weather`,
  params: {
    appid: API_KEY,
    units: "metric",
  },
});

export const fetchWeatherData = async (latitude: number, longitude: number) => {
  try {
    const response = await weatherApi.get("", {
      params: {
        lat: latitude,
        lon: longitude,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch weather data");
  }
};
