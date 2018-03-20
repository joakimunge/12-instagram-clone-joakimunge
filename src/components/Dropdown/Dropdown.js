import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom';
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
    this.props.history.push('/')
  }

  render() {
    console.log(this.props)
    if(!this.props.show) {
      return null;
    }

    if(!this.props.user) {
      return null;
    }

    return (
      <React.Fragment>
        <div className="App-Dropdown">
          <ul className="Dropdown__options">
            <Link to={`/users/${this.props.user.username}`}><li>My Profile</li></Link>
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
  user: state.auth.user
})

export default withRouter(connect(mapStateToProps)(Dropdown));