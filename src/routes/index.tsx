import React from "react";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Dashboard from "../pages/Dashboard";
import HeroeDetails from "../pages/HeroeDetails";
// import { Container } from './styles';
const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <NavigationContainer>
      <Auth.Navigator
        initialRouteName="Dashboard"
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "#000000" },
        }}
      >
        <Auth.Screen name="Dashboard" component={Dashboard} />
        <Auth.Screen name="HeroeDetails" component={HeroeDetails} />
      </Auth.Navigator>
    </NavigationContainer>
  );
};

export default AuthRoutes;
