import L from "leaflet";

const IconLocation = L.icon({
  iconUrl: require("../../assets/venue_location_icon.svg"),
  shadowUrl: require("../../assets/venue_location_icon.svg"),
  className: "leaflet-venue-icon",
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [64, 56],
});

export default IconLocation;
