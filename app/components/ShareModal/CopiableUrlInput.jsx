import PropTypes from 'prop-types';
import React from 'react';


class CopiableUrlInput extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.setButtonEl = this.setButtonEl.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  componentDidMount() {
    // This is required to avoid an error with Node.js (for the test suite)
    const Clipboard = require('clipboard'); // eslint-disable-line global-require

    this.clipboard = new Clipboard(this.$button);
    this.clipboard.on('success', (e) => {
      e.trigger.setAttribute('aria-label', 'Copied!');
      e.trigger.setAttribute('class', 'button clipboard tooltipped tooltipped-e');
    });
    this.$button.addEventListener('mouseleave', this.onMouseLeave);
  }

  componentWillUnmount() {
    this.$button.removeEventListener('mouseleave', this.onMouseLeave);
    this.clipboard.destroy();
  }

  onMouseLeave() {
    this.$button.addEventListener('mouseleave', () => {
      this.$button.removeAttribute('aria-label');
      this.$button.setAttribute('class', 'button clipboard');
    });
  }

  setButtonEl(node) {
    this.$button = node;
  }

  render() {
    return (
      <div className="copiable-url-input input-group">
        <input
          id={this.props.name}
          type="url"
          defaultValue={this.props.value}
          className="input-group-field"
          readOnly
        />
        <div className="input-group-button">
          <button
            type="submit"
            ref={this.setButtonEl}
            className="button clipboard"
            data-clipboard-target={`#${this.props.name}`}
          >
            <i className="fa fa-clipboard" />
          </button>
        </div>
      </div>
    );
  }
}

CopiableUrlInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default CopiableUrlInput;
