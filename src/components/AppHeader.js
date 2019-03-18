import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'react-emotion';
import { Grid } from '@8base/boost';
import logo from 'images/logos/cobuildlab.png';

const HeaderTag = styled(Grid.Layout)({
  height: '6rem',
  padding: '0 2rem',
  backgroundColor: '#fff',
  borderBottom: '1px solid #D0D7DD',
});

const HeaderLogo = styled('img')({
  width: '175px',
});

class AppHeader extends React.Component {
  render() {
    return (
      <Grid.Box
        style={{
          position: 'fixed',
          width: '100%',
          zIndex: '5',
        }}
        area="header">
        <HeaderTag columns="175px 1fr auto" gap="lg">
          <Grid.Box justifyContent="center">
            <Link to="/">
              <HeaderLogo src={logo} alt="Cobuild Lab"/>
            </Link>
          </Grid.Box>
          <Grid.Box justifyContent="center" alignItems="center">
          </Grid.Box>
          <Grid.Box justifyContent="center">
          </Grid.Box>
        </HeaderTag>
      </Grid.Box>
    );
  }
}

export { AppHeader };
