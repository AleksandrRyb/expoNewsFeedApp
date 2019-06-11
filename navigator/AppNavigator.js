import React from 'react';
import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';


import SideNavigator from './SideNavigator';


export default createAppContainer(SideNavigator);