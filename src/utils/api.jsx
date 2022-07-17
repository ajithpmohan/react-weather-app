export const geoApiOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_GEO_API_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_GEO_API_HOST,
  },
};

export const GEO_API_URL = process.env.REACT_APP_GEO_API_URL;
