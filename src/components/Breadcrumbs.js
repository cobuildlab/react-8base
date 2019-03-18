import React from 'react';
import styled from 'react-emotion';
import { matchPath } from 'react-router';
import { withRouter, Link as RouterLink } from 'react-router-dom';
import { Grid, Breadcrumbs as BoostBreadcrumbs, Link } from '@8base/boost';
import PropTypes from 'prop-types';

const BREADCRUMBS_ROUTES = [
  {
    path: '/wizard',
    component: () => 'Initiation',
    matchOptions: { exact: true },
  },
  {
    path: '/dashboard',
    component: () => 'Dashboard',
    matchOptions: { exact: true },
  },
  {
    path: '/document-management/',
    component: () => 'Document Management',
    matchOptions: { exact: true },
  },
  {
    path: '/document-management/business-cases',
    component: () => 'Business Cases',
    matchOptions: { exact: true },
  },
  {
    path: '/document-management/business-cases/create',
    component: () => 'Create',
    matchOptions: { exact: true },
  },
  {
    path: '/document-management/general',
    component: () => 'General',
    matchOptions: { exact: true },
  },
  {
    path: '/settings',
    component: () => 'Settings',
    matchOptions: { exact: true },
  },
  {
    path: '/settings/alliance-management',
    component: () => 'Alliance Management',
    matchOptions: { exact: true },
  },
  {
    path: '/settings/alliance-management/edit',
    component: () => 'Edit',
    matchOptions: { exact: true },
  },

  {
    path: '/settings/alliance-invitations',
    component: () => 'Alliance Invitations',
    matchOptions: { exact: true },
  },
  {
    path: '/settings/company-management',
    component: () => 'Company Management',
    matchOptions: { exact: true },
  },
  {
    path: '/settings/company-management/edit',
    component: () => 'Edit',
    matchOptions: { exact: true },
  },
  {
    path: '/settings/company-management/members',
    component: () => 'Users',
    matchOptions: { exact: true },
  },
  {
    path: '/settings/company-invitations',
    component: () => 'Company Invitations',
    matchOptions: { exact: true },
  },
  {
    path: '/settings/alliance-management/create',
    component: () => 'Create',
    matchOptions: { exact: true },
  },
  {
    path: '/settings/user-management',
    component: () => 'User Management',
    matchOptions: { exact: true },
  },
];

const HeaderTag = styled(Grid.Box)({
  paddingLeft: '2rem',
});

const BreadcrumbsItem = (props) => (
  <Link tagName={RouterLink} color="DARK_GRAY1" size="lg" {...props} />
);

let Breadcrumbs = ({ location }) => (
  <HeaderTag area="breadcrumbs" justifyContent="center">
    <BoostBreadcrumbs
      pathname={location.pathname}
      routes={BREADCRUMBS_ROUTES}
      matchPath={matchPath}
      itemTagName={BreadcrumbsItem}
    />
  </HeaderTag>
);

Breadcrumbs.propTypes = {
  location: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

Breadcrumbs = withRouter(Breadcrumbs);

export { Breadcrumbs };
