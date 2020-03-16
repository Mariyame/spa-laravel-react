import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const propTypes = {
  auth: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

class Test extends Component {
  render () {
    return (
      <div className="container p-2 mx-auto flex flex-col">
        <h1>This is Test page</h1>
      </div>
    );
  }
}

Test.propTypes = propTypes;

const mapStateToProps = ({ auth, loading }) => ({ auth, loading });

export default connect(mapStateToProps)(Test);