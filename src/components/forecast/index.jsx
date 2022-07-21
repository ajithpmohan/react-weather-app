import './style.css';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

const Forecast = ({ data }) => {
  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.map((item, idx) => {
          const forecastDate = new Date(item.dt_txt);
          const forecastDateToString = forecastDate.toLocaleDateString(
            'en-US',
            {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            }
          );
          return (
            <AccordionItem key={idx}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="daily-item">
                    <img
                      src={`icons/${item.weather[0].icon}.png`}
                      alt="weather"
                      className="icon-small"
                    />
                    <label className="day">{forecastDateToString}</label>
                    <label className="description">
                      {item.weather[0].description}
                    </label>
                    <label className="min-max">
                      {Math.round(item.main.temp_min)}℃ /
                      {Math.round(item.main.temp_max)}℃
                    </label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="daily-details-grid">
                  <div className="daily-details-grid-item">
                    <label>Pressure</label>
                    <label>{item.main.pressure} hpa</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Humidity</label>
                    <label>{item.main.humidity}%</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Clouds</label>
                    <label>{item.clouds.all}</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Wind</label>
                    <label>{item.wind.speed} m/s</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Sea level:</label>
                    <label>{item.main.sea_level} m</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Feels like</label>
                    <label>{Math.round(item.main.feels_like)}℃</label>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
};

export default Forecast;
