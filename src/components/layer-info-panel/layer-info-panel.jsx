import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import '../../styles/components/layer-info-panel.scss';

export const LayerInfoPanel = ({ fetchingLayerInfo, attributes }) => {
  const createAttributes = (attrs) => {
    const attrJSX = Object.keys(attrs).map(k => (
      <div key={k}>
        <p>{k}: {attrs[k]}</p>
      </div>
    ));
    return attrJSX;
  };

  return (
    <div className="layer-info-panel">
      <p>Click the map to see some info</p>
      {fetchingLayerInfo && <p>Getting info...</p>}
      {!fetchingLayerInfo && Object.keys(attributes).length > 0 && createAttributes(attributes)}
    </div>
  );
};

LayerInfoPanel.propTypes = {
  fetchingLayerInfo: PropTypes.bool,
  attributes: PropTypes.object,
};

LayerInfoPanel.defaultProps = {
  fetchingLayerInfo: false,
  attributes: {},
};

const mapStateToProps = ({ mapview: { layerInfo } }) => ({
  fetchingLayerInfo: layerInfo.fetchingLayerInfo,
  attributes: layerInfo.attributes,
});

export default connect(mapStateToProps)(LayerInfoPanel);
