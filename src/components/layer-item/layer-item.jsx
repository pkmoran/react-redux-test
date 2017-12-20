import React from 'react';
import { PropTypes } from 'prop-types';

import Checkbox from '../checkbox/checkbox';
import '../../styles/components/layer-item.scss';

export const LayerItem = ({
  label,
  visible,
  onClick,
}) => (
  <div className="layer-item pointer" onClick={onClick}>
    <Checkbox visible={visible} />
    <div className="layer-item-label">{label}</div>
  </div>
);

LayerItem.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  visible: PropTypes.bool,
};

LayerItem.defaultProps = {
  visible: false,
};

export default LayerItem;
