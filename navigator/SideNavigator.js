import { createDrawerNavigator, createAppContainer, createStackNavigator, DrawerItems } from "react-navigation";
import { View, Image, ScrollView, SafeAreaView } from 'react-native';

import MainScreen from "../screens/MainScreen";
import NewsScreen from "../screens/NewsScreen";
import SettingsScreen from "../screens/SettingsScreen";
import AboutScreen from "../screens/AboutScreen";
import HelpScreen from "../screens/HelpScreen";

const MainStack = createStackNavigator({
    Main: MainScreen,
    News: NewsScreen
}, {
  mode: 'modal'
})

const AboutStack = createStackNavigator({
    About: AboutScreen,
}, {
  mode: 'modal'
})

const HelpStack = createStackNavigator({
    About: HelpScreen,
}, {
  mode: 'modal'
}
)
const SettingsStack = createStackNavigator({
    Settings: SettingsScreen,
}, {
  mode: 'modal'
})

const SideNavigator = createDrawerNavigator({
  Main: MainStack,
  Settings: SettingsStack,
  About: AboutStack,
  Help: HelpStack
});


export default SideNavigator;