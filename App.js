import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import { useFonts } from 'expo-font';
import { Provider } from "react-redux";
import { store } from "./store/store";

import CustomDrawer from "./navigation/CustomDrawer";

const Stack = createStackNavigator();

const App = () => {

  const [loaded] = useFonts({
    "Poppins-Black": require('./assets/fonts/Poppins-Black.ttf'),
    "Poppins-Bold": require('./assets/fonts/Poppins-Bold.ttf'),
    "Poppins-SemiBold": require('./assets/fonts/Poppins-SemiBold.ttf'),
    "Poppins-Regular": require('./assets/fonts/Poppins-Regular.ttf'),
  })

  if (!loaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName={'Home'}
        >
          <Stack.Screen
            name="Home"
            component={CustomDrawer}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App