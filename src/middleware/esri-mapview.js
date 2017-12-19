import Map from 'esri/Map'; // eslint-disable-line
import MapView from 'esri/views/MapView'; // eslint-disable-line
import FeatureLayer from 'esri/layers/FeatureLayer'; // eslint-disable-line
import Legend from 'esri/widgets/Legend'; // eslint-disable-line

import {
  INIT_MAP,
  MAPVIEW_LOAD_ERROR,
} from '../constants/action-types';

import appConfig from '../appConfig';

const arcgis = {};

window.arcgis = arcgis;

const esriMiddleware = () => next => (action) => {
  switch (action.type) {
    case INIT_MAP: {
      if (!action.container) break;

      if (arcgis.container) {
        action.container.appendChild(arcgis.container);
        break;
      }

      const map = new Map({ basemap: 'dark-gray' });
      arcgis.map = map;

      arcgis.container = document.createElement('DIV');
      action.container.appendChild(arcgis.container);

      arcgis.mapView = new MapView({
        map: arcgis.map,
        container: arcgis.container,
        center: [-77.0910, 38.8816],
        zoom: 13,
      });

      const mapLayers = [];

      appConfig.layers.forEach((l) => {
        const layer = new FeatureLayer({ url: l.url });
        mapLayers.push(layer);
      });

      map.addMany(mapLayers);

      arcgis.legend = new Legend({
        view: arcgis.mapView,
      });

      arcgis.mapView.ui.add(arcgis.legend, 'top-right');

      return arcgis.mapView.when(() => {
        next({ ...action, mapLayers });
      }, (e) => {
        console.error(e);
        next({
          type: MAPVIEW_LOAD_ERROR,
          hasError: true,
          error: e,
        });
      });
    }
    default:
      next(action);
  }
  return Promise.resolve();
};

export default esriMiddleware;
