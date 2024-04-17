import { useRef, useState } from "react";

const HourlyForecast = ({ hourlyData }) => {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.clientX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;
    const x = event.clientX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1; // Adjust the multiplier for faster or slower scrolling
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };
  return (
    <div
      ref={containerRef}
      className="hourly-weather"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      {hourlyData?.list.slice(0, 24).map((hour, index) => (
        <div key={index} className="mr-3 mb-2 each-temp">
          <img
            src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
            alt={hour.weather[0].description}
          />
          <div className="time">
            {new Date(hour.dt * 1000)
              .toLocaleTimeString()
              .replace(/:\d\d /, " ")}
          </div>
          <div className="temp">{Math.floor(hour.main.temp)}°C</div>
        </div>
      ))}
    </div>
  );
};

export default HourlyForecast;
