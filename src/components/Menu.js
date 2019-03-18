import React from 'react';
import { Nav } from '../components';

const USER_MENU = (
  <Nav.Plate color={'#e76c29'}>
    <Nav.Item icon="Settings" to="/home" label="Home"/>
    <Nav.Item icon="SpeedMeter" to="/dashboard" label="Dashboard"/>
  </Nav.Plate>
);

/**
 * Renders the Menu of the App
 */
class Menu extends React.Component {
  render() {
    return USER_MENU;
  }
}

export default Menu;
