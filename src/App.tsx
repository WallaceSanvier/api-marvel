import "react-native-gesture-handler";

import React from "react";
import { View, StatusBar, Text } from "react-native";
import Routes from "../src/routes/index";
import { ContainerGlobal } from "../src/styles/container-global";

// import { Container } from './styles';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={{ flex: 1, backgroundColor: "#000000" }}>
        <Routes />
      </View>
    </>
  );
};

export default App;
