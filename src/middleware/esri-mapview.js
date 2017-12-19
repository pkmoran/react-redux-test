import Map from 'esri/Map'; // eslint-disable-line
import MapView from 'esri/views/MapView'; // eslint-disable-line
import FeatureLayer from 'esri/layers/FeatureLayer'; // eslint-disable-line
import Legend from 'esri/widgets/Legend'; // eslint-disable-line

import {
  INIT_MAP,
  MAPVIEW_LOAD_ERROR,
  TOGGLE_VISIBLE_LAYER,
  LAYER_INFO_RECEIVED,
  FETCHING_LAYER_INFO,
} from '../constants/action-types';

import appConfig from '../appConfig';

const arcgis = {};

window.arcgis = arcgis;

const esriMiddleware = store => next => (action) => {
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
        zoom: 12,
      });

      const mapLayers = [];

      appConfig.layers.forEach((l) => {
        const layer = new FeatureLayer({
          url: l.url,
          id: l.id,
          label: l.label,
          visible: l.visible,
          outFields: ['*'],
        });
        mapLayers.push(layer);
      });

      map.addMany(mapLayers);

      arcgis.legend = new Legend({
        view: arcgis.mapView,
      });

      arcgis.mapView.ui.add(arcgis.legend, 'top-right');

      arcgis.mapView.when(() => {
        arcgis.mapView.on('click', (event) => {
          const fetchingAction = { type: FETCHING_LAYER_INFO };
          store.dispatch(fetchingAction);
          arcgis.mapView.hitTest(event).then((response) => {
            const attributes = (response.results
              && response.results.length > 0
              && response.results[0].graphic
              && response.results[0].graphic.attributes)
              || {};

            const infoReceivedAction = {
              type: LAYER_INFO_RECEIVED,
              attributes,
            };
            setTimeout(() => {
              store.dispatch(infoReceivedAction);
            }, 2000);
          });
        });
        next({ ...action, mapLayers });
      }, (e) => {
        console.error(e);
        next({
          type: MAPVIEW_LOAD_ERROR,
          hasError: true,
          error: e,
        });
      });
      break;
    }
    case TOGGLE_VISIBLE_LAYER: {
      if (!action.id) break;

      const layer = arcgis.map.findLayerById(action.id);
      layer.visible = !layer.visible;

      next(action);
      break;
    }
    default:
      next(action);
  }
  return null;
};

export default esriMiddleware;
