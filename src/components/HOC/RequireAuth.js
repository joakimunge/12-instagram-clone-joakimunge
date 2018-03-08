import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Loader } from '../';

export default function (ComposedComponent) {
	class Authentication extends Component {

		componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        return this.props.history.push('/signin');
      }
    }

		render() {
			const { isAuthenticated, isFetching } = this.props;
			if (isFetching) {
				return <Loader />;
			}

			if (isAuthenticated) {
				return <ComposedComponent {...this.props} />;
			} 
			
			return <Redirect to="/signin" />;
			
		}

	}

	const mapStateToProps = state => {
		return {
			isAuthenticated: state.auth.isAuthenticated,
			isFetching: state.auth.isFetching
		}		
	}

	return connect(mapStateToProps)(Authentication);	

}