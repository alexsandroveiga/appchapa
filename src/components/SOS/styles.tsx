import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

const screenWidth = Math.round(Dimensions.get('window').width);

export const Container = styled(RectButton)`
  width: 162px;
  height: 162px;
  position: absolute;
  background: #fcc100;
  bottom: -81px;
  left: ${(screenWidth - 162) / 2}px;
  border-radius: 81px;
  align-items: center;
  z-index: 999999999;
`;

export const Text = styled.Text`
  font-family: Ubuntu_700Bold;
  font-size: 48px;
  margin-top: ${81 - 48 - 8}px;
`;
