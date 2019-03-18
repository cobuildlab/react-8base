import React from 'react';
import { Loader } from '@8base/boost';
import { withAuth } from '@8base/auth';
import { PropTypes } from 'prop-types';

class AuthContainer extends React.Component {
  componentDidMount() {
    const { auth } = this.props;
    auth.authorize({ mode: 'login' });
  }

  render() {
    return <Loader />;
  }
}

AuthContainer.propTypes = {
  auth: PropTypes.object.isRequired,
};

export default withAuth(AuthContainer);
