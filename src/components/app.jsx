import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import Mapview from './mapview/mapview';
import LayerPanel from './layer-panel/layer-panel';

const App = ({ layers }) => (
  <div className="container">
    <Mapview />
    <LayerPanel layers={layers} />
  </div>
);

App.propTypes = {
  layers: PropTypes.array,
};

App.defaultProps = {
  layers: [],
};

const mapStateToProps = ({ mapview: { layers } }) => ({
  mapLayers: layers,
});

export default connect(mapStateToProps)(App);
