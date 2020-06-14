import styled from 'styled-components/native';
import Constants from 'expo-constants';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

export const Container = styled(DrawerContentScrollView)`
  background: #222;
  padding-top: ${Constants.statusBarHeight + 32 + 16}px;
`;

export const List = styled(DrawerItemList)`
  padding-top: 1200px;
`;

export const CloseButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  background: #cacaca;
  position: absolute;
  top: ${Constants.statusBarHeight + 16}px;
  right: 16px;
  border-radius: 25px;
`;
