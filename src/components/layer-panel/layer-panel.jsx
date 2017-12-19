import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import LayerItem from '../layer-item/layer-item';

export const LayerPanel = ({ mapLayers }) => {
  const layerList = mapLayers.map(l => (
    <LayerItem key={l.id} id={l.id} label={l.label} />
  ));

  return (
    <div className="layer-panel-container">
      {layerList}
    </div>
  );
};

LayerPanel.propTypes = {
  mapLayers: PropTypes.array.isRequired,
};

const mapStateToProps = ({ mapview: { layers } }) => ({
  mapLayers: layers,
});

export default connect(mapStateToProps)(LayerPanel);
