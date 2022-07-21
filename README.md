# React.js Weather App

## Tech Stack

- React.js
- Prettier
- OpenWeatherMap API
- GeoDB Cities API

## Download the repository:

    git clone https://github.com/ajithpmohan/react-weather-app.git

## Set Environment Variables

Here, We are using **GeoDB Cities API** and **OpenWeatherMap API** services. So before running the application subscribe the services and grab the API Key's from [RapidAPI](https://rapidapi.com/wirefreethought/api/geodb-cities/) and [OpenWeatherMap.org](https://home.openweathermap.org/api_keys). Then store the corresponding API key's to a file called **.env.development** as `REACT_APP_GEO_API_KEY` and `REACT_APP_WEATHER_API_KEY`.

## Available Scripts

#### Build the Services

    docker-compose build

#### Starting App

    docker-compose up -d

#### Access the services in the development mode.

Open [http://localhost:5000](http://localhost:5000) to view Weather App in the browser.
