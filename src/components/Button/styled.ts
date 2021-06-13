import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
  position: relative;
  width: 100%;
  height: 40px;
  margin: 0 auto;
  background: #ff0000;
  border-radius: 10px;
  margin-top: 10px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: "RobotSlab-Medium";
  color: #ffff;
  font-size: 18px;
`;
