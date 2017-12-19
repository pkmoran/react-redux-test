import React from 'react';
// import { connect } from 'react-redux';
// import { PropTypes } from 'prop-types';

import Mapview from './mapview/mapview';
import LayerPanel from './layer-panel/layer-panel';
import LayerInfoPanel from './layer-info-panel/layer-info-panel';

const App = () => (
  <div className="container">
    <Mapview />
    <LayerPanel />
    <LayerInfoPanel />
  </div>
);

// App.propTypes = {
//   layers: PropTypes.array,
// };

// App.defaultProps = {
//   layers: [],
// };

// const mapStateToProps = ({ mapview: { layers } }) => ({
//   mapLayers: layers,
// });

export default App;
