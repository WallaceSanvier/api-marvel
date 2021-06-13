import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { CardBlank } from "../../styles/card-blank";

import { LoadingContainer } from "./styled";

const Loading: React.FC = () => {
  return (
    <>
      <LoadingContainer>
        <CardBlank definedSize={"200px"} contentInCenter>
          <ActivityIndicator size="large" color="#ff0000" />
          <Text style={{ textAlign: "center" }}>Carregando...</Text>
        </CardBlank>
      </LoadingContainer>
    </>
  );
};

export default Loading;
