import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { CurrentWeather, ErrorComponent, HourlyForecast } from "./components";
import { fetchWeatherData, fetchHourlyWeatherData } from "./api";
import { Bars } from "react-loader-spinner";

export const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [weatherData, setWeatherData] = useState();
  const [weatherHourlyData, setWeatherHourlyData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const position = await getCurrentPosition();
      const { latitude, longitude } = position.coords;
      setError(null);
      try {
        const data = await fetchWeatherData(latitude, longitude);
        setWeatherData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
      try {
        const data = await fetchHourlyWeatherData(latitude, longitude);
        setWeatherHourlyData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getCurrentPosition = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };
  return (
    <>
      <Container>
        <div className="row my-5 align-items-center" style={{ height: "80vh" }}>
          <div className="col-12 col-md-5 text-center">
            Utsav Thapa | Weather App
          </div>
          <div className="col-12 col-md-7 weather-card-view">
            {loading && (
              <Bars
                height="80"
                width="80"
                color="#30727d"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            )}
            {error ? (
              <ErrorComponent message={error} />
            ) : (
              <>
                {weatherData && (
                  <div className="weather-card">
                    <CurrentWeather weatherData={weatherData} />
                    <HourlyForecast hourlyData={weatherHourlyData} />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </Container>
    </>
  );
};
