import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
import { PhotoGallery, PhotoDetails } from '../screens';

// Constants
import screensNames from '../constants/screensNames';
import colors from '../constants/colors';

const { Navigator, Screen } = createStackNavigator();

const AppNavigator = () => (
  <Navigator>
    <Screen
      name={screensNames.PHOTO_GALLERY}
      component={PhotoGallery}
      options={{ title: 'Gallery app' }}
    />
    <Screen
      name={screensNames.PHOTO_DETAILS}
      component={PhotoDetails}
      options={{
        title: null,
        headerBackTitleVisible: false,
        headerTintColor: colors.WHITE,
        headerTransparent: true,
      }}
    />
  </Navigator>
);

export default AppNavigator;
