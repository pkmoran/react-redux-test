import React from 'react';

import Mapview from './mapview/mapview';
import LayerPanel from './layer-panel/layer-panel';
import LayerInfoPanel from './layer-info-panel/layer-info-panel';

import '../styles/components/app.scss';

const App = () => (
  <div className="container">
    <Mapview />
    <LayerPanel />
    <LayerInfoPanel />
  </div>
);

export default App;
