import { LiaWindSolid } from "react-icons/lia";
import { WiHumidity } from "react-icons/wi";
import { GiPressureCooker } from "react-icons/gi";
const CurrentWeather = ({ weatherData }) => {
  console.log("weatherData ===> ", weatherData);

  return (
    <>
      <div className="place">
        <span>
          <img
            src={`${import.meta.env.VITE_IMG_URL}/${
              weatherData.weather[0].icon
            }.png`}
            alt={weatherData.weather[0].description}
          />
        </span>
        {weatherData.name}
      </div>
      <div className="weather-desc">{weatherData.weather[0].description}</div>
      <div className="main-temp">{Math.floor(weatherData.main.temp)}°</div>
      <div className="icon-values">
        <div className="value">
          <WiHumidity /> {weatherData.main.humidity}%
        </div>
        <div className="value">
          <LiaWindSolid />
          {weatherData.wind.speed} m/s
        </div>
        <div className="value">
          <GiPressureCooker />
          {weatherData.main.pressure} N
        </div>
      </div>
    </>
  );
};

export default CurrentWeather;
