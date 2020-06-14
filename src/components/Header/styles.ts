import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  top: 0;
  padding: ${Constants.statusBarHeight + 16}px 16px 16px 16px;
  z-index: 10;
  width: 100%;
`;

export const Menu = styled(RectButton)`
  width: 50px;
  height: 50px;
  background: #9d270e;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
`;

export const Dollar = styled(RectButton)`
  justify-content: center;
`;
