import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  width: 100px;
  height: 100px;
  background-color: #fff;
  border-radius: 5px;
`;

export const Button = styled(RectButton)`
  flex: 1;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export const Title = styled.Text`
  margin-top: 10px;
  color: #696969;
`;

export const Icon = styled(MaterialIcons)`
  color: #ce0000;
`;
