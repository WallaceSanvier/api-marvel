import React, { useCallback } from "react";
import { TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { CardBlank } from "../../styles/card-blank";
import * as style from "../../styles/character-container-styles";

interface CharacterContainerProps {
  id?: string;
  imgSource?: any;
  name?: string;
  description?: string;
  href?: string;
  arraySeries?: React.ReactNode;
}

const CharacterContainer: React.FC<CharacterContainerProps> = (
  props: CharacterContainerProps
) => {
  const { id, imgSource, name, description, href, arraySeries } = props;
  const { navigate } = useNavigation();

  const navigateToHistoricRecords = useCallback(() => {
    navigate(href, {
      id,
      imgSource,
      name,
      description,
      href,
      arraySeries,
    });
  }, [id, imgSource, name, description, href, arraySeries]);

  const arraySeriesObj = <Text>{arraySeries}</Text>;

  return (
    <>
      <TouchableOpacity
        activeOpacity={href ? 0.1 : 10}
        onPress={(e) => {
          href ? navigateToHistoricRecords() : null;
        }}
      >
        <CardBlank>
          <style.ImageContainer source={imgSource} />
          <style.NameText>{name}</style.NameText>
          <style.DescriptionContainer>
            <style.DescriptionText>{description}</style.DescriptionText>
          </style.DescriptionContainer>

          <style.DescriptionContainer>
            <style.DescriptionText>{arraySeriesObj}</style.DescriptionText>
          </style.DescriptionContainer>
        </CardBlank>
      </TouchableOpacity>
    </>
  );
};

export default CharacterContainer;
