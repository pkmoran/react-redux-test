import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { initMap } from '../../reducer/mapview/actions';

export class MapView extends Component {
  componentDidMount() {
    // const { dispatch } = this.props;
    // const action = initMap(this.mapview);
    // dispatch(action);
    this.props.initMap(this.mapview);
  }

  render() {
    const { error } = this.props;
    return (
      <div className="mapview-container">
        {error && <div>There was an error loading the MapView</div>}
        {!error && <div
          className="mapview"
          ref={(ref) => { this.mapview = ref; }}
        />}
      </div>
    );
  }
}

MapView.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  initMap: PropTypes.func.isRequired,
  error: PropTypes.bool,
};

MapView.defaultProps = {
  error: false,
};

const mapStateToProps = ({ mapview: { layers, error } }) => ({
  mapLayers: layers,
  error,
});

export default connect(mapStateToProps, { initMap })(MapView);
