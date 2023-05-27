import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingScreen';

const homeName = "HomePage";
const detailsName = "Details";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();
function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let retu1 = route.name;

            if (retu1 === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (retu1 === detailsName) {
              iconName = focused ? 'list' : 'list-outline';

            } else if (retu1 === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            }

          //return ค่าตรงนี้
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#e15205',
          inactiveTintColor: '#ffffff',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70},
          
        }}>

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={detailsName} component={DetailsScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;