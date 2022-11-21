import { Locations } from "../Geolocation/getGeolocation";

export const generateQuery = (location: Locations) => {
  const query = {
    lat: location.lat,
    lng: location.lng,
    range: "5",
    format: "json",
  };

  return new URLSearchParams(query);
};
