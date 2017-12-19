import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import Checkbox from '../checkbox/checkbox';
import '../../styles/components/layer-item.scss';

import { toggleVisibleLayer } from '../../reducer/mapview/actions';

export const LayerItem = ({
  id,
  label,
  dispatch,
  visible,
}) => {
  const handleClick = () => {
    const action = toggleVisibleLayer(id);
    dispatch(action);
  };

  return (
    <div className="layer-item pointer" onClick={handleClick}>
      <Checkbox visible={visible} />
      <div className="layer-item-label">{label}</div>
    </div>
  );
};

LayerItem.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
  visible: PropTypes.bool,
};

LayerItem.defaultProps = {
  visible: false,
};

// const mapStateToProps = (state, ownProps) => ({
//   visible: state.mapview.visibleLayers.indexOf(ownProps.layer.id) > -1,
// });
const mapStateToProps = ({ mapview: { visibleLayers } }, ownProps) => ({
  visible: visibleLayers.indexOf(ownProps.id) > -1,
});

export default connect(mapStateToProps)(LayerItem);
