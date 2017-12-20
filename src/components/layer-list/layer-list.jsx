import React from 'react';
import { PropTypes } from 'prop-types';

import LayerItem from '../layer-item/layer-item';

/*
** This component doesn't do anything. It just
** gets it's props and renders the layer items
*/

export const LayerList = ({ mapLayers, visibleLayers, handleLayerClick }) => (
  <div className="layer-list-container">
    {mapLayers.map(l => (
      <LayerItem
        key={l.id}
        label={l.label}
        visible={visibleLayers.indexOf(l.id) > -1}
        onClick={() => handleLayerClick(l.id)}
      />
    ))}
  </div>
);

LayerList.propTypes = {
  mapLayers: PropTypes.array.isRequired,
  visibleLayers: PropTypes.array.isRequired,
  handleLayerClick: PropTypes.func.isRequired,
};

export default LayerList;
