import React from 'react';
import { Loader } from '@8base/boost';
import { withAuth } from '@8base/auth';

class CallbackContainer extends React.Component {
  async componentDidMount() {
    const { auth, history } = this.props;
    const { idToken } = await auth.getAuthorizedData();

    auth.setAuthState({ idToken });
    history.replace('/dashboard');
  }

  render() {
    return <Loader />;
  }
}

export default withAuth(CallbackContainer);
