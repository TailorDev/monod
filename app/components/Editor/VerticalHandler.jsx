import PropTypes from 'prop-types';
/* eslint jsx-a11y/no-static-element-interactions: 0 */
import React from 'react';

const { func } = PropTypes;

const VerticalHandler = props => (
  <div className="vertical-handler">
    <div
      className="left"
      title="Reduce markdown editor"
      onClick={props.onClickLeft}
    >
      <i className="fa fa-chevron-left" />
    </div>
    <div
      className="right"
      title="Reduce preview"
      onClick={props.onClickRight}
    >
      <i className="fa fa-chevron-right" />
    </div>
  </div>
);

VerticalHandler.propTypes = {
  onClickLeft: func.isRequired,
  onClickRight: func.isRequired,
};

export default VerticalHandler;
