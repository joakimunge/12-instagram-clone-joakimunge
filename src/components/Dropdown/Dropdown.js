import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


import './Dropdown.css';
import PropTypes from 'prop-types';

import {
  logoutUser
} from '../../actions'

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout() {
    this.props.dispatch(logoutUser());
  }

  render() {
    if(!this.props.show) {
      return null;
    }

    return (
      <React.Fragment>
        <div className="App-Dropdown">
          <ul className="Dropdown__options">
            <li><Link to={`/users/${this.props.username}`}>My Profile</Link></li>
            <li onClick={this.handleLogout}>Logout</li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

Dropdown.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

const mapStateToProps = state => ({
})

export default connect(mapStateToProps)(Dropdown);