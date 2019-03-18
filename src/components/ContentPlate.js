import React from 'react';
import styled from 'react-emotion';
import { Grid } from '@8base/boost';
import { PropTypes } from 'prop-types';

const ContentPlateTag = styled(Grid.Box)({
  padding: '0 2rem 20rem 0',
  minHeight: 0,
});

const ContentPlate = ({ children }) => <ContentPlateTag area="content">{children}</ContentPlateTag>;

ContentPlate.propTypes = {
  children: PropTypes.element,
};

export { ContentPlate };
