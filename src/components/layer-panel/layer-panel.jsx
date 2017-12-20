import { connect } from 'react-redux';

import { toggleVisibleLayer } from '../../reducer/mapview/actions';

import LayerList from '../layer-list/layer-list';

const mapStateToProps = ({ mapview: { layers, visibleLayers } }) => ({
  mapLayers: layers,
  visibleLayers,
});

const mapDispatchToProps = dispatch => ({
  handleLayerClick: (id) => {
    dispatch(toggleVisibleLayer(id));
  },
});

const LayerPanel = connect(mapStateToProps, mapDispatchToProps)(LayerList);

export default LayerPanel;
