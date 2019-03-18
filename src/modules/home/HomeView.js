import React from 'react';
import './assets/home.css';
import { withRouter } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { withAuth } from '@8base/auth';
import { Redirect } from 'react-router';

/**
 * Home View
 * @param props
 * @return {*}
 * @constructor
 */
const HomeView = (props) => {
  const {
    auth: { isAuthorized },
  } = props;

  if (isAuthorized) return <Redirect to={'/dashboard'} />;

  return (
    <div className="container home-container">
      <div className="login-container">
        <div className="home-header-logo">
          {/* TODO: SERVE locally */}
          <img src="http://alanthinks.com/img/collabtogrow/collabtogrow_white.svg" alt="" />
        </div>
        <div className="home-login-box">
          <div className="home-login-header">
            {/* TODO: SERVE locally */}
            <img src="http://alanthinks.com/img/collabtogrow/collabtogrow_notagline.svg" alt={''} />
          </div>
          <button
            style={{ background: 'red', margin: '0px' }}
            type="submit"
            className="home-btn btn btn-default btn-block">
            Sign up
          </button>

          <button
            type="submit"
            className="btn btn-default btn-block home-btn"
            onClick={() => {
              props.history.push('/auth');
            }}>
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

HomeView.propTypes = {
  history: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

export default withAuth(withRouter(HomeView));
