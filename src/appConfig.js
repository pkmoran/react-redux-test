module.exports = {
  layers: [
    {
      url: 'https://gis.arlingtonva.us/arlgis/rest/services/public/Bike_Routes/MapServer/4',
      id: 'bike_routes',
      label: 'Bike Routes',
      visible: false,
    },
    {
      url: 'https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Recreation_WebMercator/MapServer/10',
      id: 'national_parks',
      label: 'National Parks',
      visible: true,
    },
    {
      url: 'https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Recreation_WebMercator/MapServer/0',
      id: 'tennis_courts',
      label: 'Tennis Courts',
      visible: false,
    },
  ],
};
