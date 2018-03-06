import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
	class Authentication extends Component {

		componentWillMount() {
			if(!this.props.isAuthenticated) {
				return this.props.history.push('/signin');
			}
		}

		componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) {
        return this.props.history.push('/signin');
      }
    }

		render() {
			const { isAuthenticated } = this.props;
			{
				if (isAuthenticated) {
				return <ComposedComponent {...this.props} />;
				}
			}
			return null
		}

	}

	const mapStateToProps = state => {
		return {
			isAuthenticated: state.auth.isAuthenticated
		}		
	}

	return connect(mapStateToProps)(Authentication);	

}