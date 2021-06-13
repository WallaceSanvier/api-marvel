import React, { useEffect, useState } from "react";
import { View, Text, KeyboardAvoidingView, ScrollView } from "react-native";
import api from "../../services";
import { useRoute } from "@react-navigation/native";
import { Container } from "../../styles/container";
import CharacterContainer from "../../components/CharacterContainer";
import { CardBlank } from "../../styles/card-blank";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";

interface PropsOnRoute {
  id: string;
  imgSource: string;
  name: string;
  description: string;
  href: string;
}

const HeroeDetails: React.FC = () => {
  const route = useRoute();
  const routeParams = route.params as PropsOnRoute;
  const { navigate } = useNavigation();

  console.log("QUEM SOU EU ?", routeParams.name);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#000000" }}
      enabled
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Container>
          <CharacterContainer
            id={routeParams.id}
            name={routeParams.name}
            imgSource={routeParams.imgSource}
            description={routeParams.description}
          />
        </Container>

        <CardBlank>
          <Button onPress={() => navigate("Dashboard")}>
            <Text>Voltar</Text>
          </Button>
        </CardBlank>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default HeroeDetails;
