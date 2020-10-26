const h3 = require("h3-js");

// Convert a lat/lng point to a hexagon index at resolution 7
const h3Index = h3.geoToH3(37.3615593, -122.0553238, 7);
console.log('h3Index:', h3Index)
// -> '87283472bffffff'

// Get the center of the hexagon
const hexCenterCoordinates = h3.h3ToGeo(h3Index);
console.log('hexCenterCoordinates:', hexCenterCoordinates)
// -> [37.35171820183272, -122.05032565263946]

// Get the vertices of the hexagon
const hexBoundary = h3.h3ToGeoBoundary(h3Index);
console.log('hexBoundary:', hexBoundary)
// -> [ [37.341099093235684, -122.04156135164334 ], ...]
