import React from 'react';
import { Heading } from '@8base/boost';
import styled from 'react-emotion';
import { PropTypes } from 'prop-types';

const StyledHeader = styled(Heading)({
  fontSize: 17,
  color: '#323C47',
  fontWeight: 600,
  marginBottom: '15px',
});

const Header = ({ text }) => {
  return <StyledHeader text={text} />;
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
