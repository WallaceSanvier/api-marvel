import React, { useRef, useCallback, useEffect, useState } from "react";
import {
  Text,
  KeyboardAvoidingView,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import api from "../../services";

import Input from "../../components/Input";
import Button from "../../components/Button";
import { CardBlank } from "../../styles/card-blank";
import Loading from "../../components/Loading";
import CharacterContainer from "../../components/CharacterContainer";

import { FilterContainer } from "../../styles/filter-container";
import { Form } from "@unform/mobile";
import { FormHandles } from "@unform/core";

interface ArrayCharacters {
  results: CharactersTypes[];
}

interface itemsTypes {
  resourceURI: string;
  name: string;
}
interface CharactersTypes {
  id: any;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  series: {
    items: itemsTypes[];
  };
}

function getSeries(characs: ArrayCharacters) {
  if (characs) {
    return characs.results.map((characs: CharactersTypes) => {
      characs.series.items.map((items: itemsTypes[]) => {
        Object.keys(items).map((item: itemsTypes) => {
          <Text>{item?.name}</Text>;
        });
      });
    });
  }
}

const Dashboard: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [characters, setCharacters] = useState<CharactersTypes[]>([]);
  const [arraySeries, setArraySeries] = useState<ArrayCharacters>();
  const [text, setText] = useState();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        await api.get(`/characters`).then((response) => {
          setCharacters(response.data.data.results);
          setArraySeries(response.data.data);
        });
      } catch (e) {
        console.log("Error:", e);
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  const handleSearch = useCallback(async () => {
    try {
      if (text) {
        setLoading(true);
        await api
          .get(`/characters?nameStartsWith=${text}`)
          .then((response) => {
            setCharacters(response.data.data.results);
          })
          .catch((e) => {
            console.log("ERRRRRO", e);
          });
        return;
      }
      setLoading(true);
      await api.get(`/characters`).then((response) => {
        setCharacters(response.data.data.results);
      });
    } catch (e) {
      console.log("ERRRRRO", e);
    } finally {
      setLoading(false);
    }
  }, [text]);

  const seriesMap = getSeries(arraySeries);

  console.log("ASDASSADsa", seriesMap);

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: "#000000" }}
        enabled
      >
        <CardBlank>
          <FilterContainer>
            <Form ref={formRef} onSubmit={handleSearch}>
              <Input
                label="Digite aqui..."
                name="search"
                returnKeyType="send"
                onChangeText={(text) => setText(text)}
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />

              <Button
                onPress={() => {
                  formRef.current?.submitForm();
                  // navigation.navigate('BottomTabNavigation');
                }}
              >
                <Text>Pesquisar</Text>
              </Button>
            </Form>
          </FilterContainer>
        </CardBlank>

        {isLoading ? (
          <>
            <Loading />
          </>
        ) : (
          <>
            <SafeAreaView>
              <FlatList
                style={{ marginBottom: 150 }}
                data={characters}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <CharacterContainer
                    id={item.id}
                    name={item.name}
                    imgSource={{
                      uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
                    }}
                    href={"HeroeDetails"}
                    description={item.description}
                    arraySeries={seriesMap}
                  />
                )}
              />
            </SafeAreaView>
          </>
        )}
      </KeyboardAvoidingView>
    </>
  );
};

export default Dashboard;
