import React from 'react';
import { PropTypes } from 'prop-types';

import '../../styles/components/checkbox.scss';

export const Checkbox = ({ visible }) => (
  <div className={`layer-checkbox ${visible ? 'checked' : ''}`}>
    <svg className={`checkmark ${!visible ? 'hidden' : ''}`} viewBox="0 0 16 16">
      <g><path d="M6 10.78l-2.78-2.78-0.95 0.94 3.73 3.73 8-8-0.94-0.94z" /></g>
    </svg>
  </div>
);

Checkbox.propTypes = {
  visible: PropTypes.bool,
};

Checkbox.defaultProps = {
  visible: false,
};

export default Checkbox;
