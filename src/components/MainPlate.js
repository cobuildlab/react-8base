import React from 'react';
import { Grid } from '@8base/boost';
import styled from 'react-emotion';

import { AppHeader } from './AppHeader';
import { Breadcrumbs } from './Breadcrumbs';
import { PropTypes } from 'prop-types';

const MainPlateTag = styled(Grid.Layout)`
  background-color: #f4f5f6;
  height: 100vh;
  flex: 1;
`;

const CONTENT_PLATE_AREAS = [['header', 'header'], ['nav', 'breadcrumbs'], ['nav', 'content']];

const MainPlate = ({ children }) => (
  <MainPlateTag columns="60px 1fr" rows="60px 60px 1fr" areas={CONTENT_PLATE_AREAS} stretch>
    <AppHeader />
    <Breadcrumbs />
    {children}
  </MainPlateTag>
);

MainPlate.propTypes = {
  children: PropTypes.array,
};

export { MainPlate };
