import L from "leaflet";

const IconLocation = L.icon({
  iconUrl: require("../../assets/venue_location_icon.svg"),
  iconSize: [38, 95],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
  shadowUrl: require("../../assets/venue_location_icon.svg"),
  shadowSize: [68, 95],
  shadowAnchor: [22, 94],
});

export default IconLocation;
