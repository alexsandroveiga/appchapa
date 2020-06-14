import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.ImageBackground`
  flex: 1;
  align-items: center;
  padding: 0 16px;
  justify-content: center;
`;

export const Main = styled.View`
  align-items: center;
`;

export const Logo = styled.Image`
  margin-bottom: 16px;
`;

export const Description = styled.Text`
  font-size: 16px;
  font-family: Ubuntu_400Regular;
  text-align: center;
  color: #222;
`;

export const Footer = styled.View`
  position: absolute;
  bottom: 32px;
  width: 100%;
  align-items: center;
`;

export const Button = styled(RectButton)`
  height: 70px;
  background: #9d270e;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  align-items: center;
  justify-content: center;
  width: 268px;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  font-size: 24px;
  font-family: Ubuntu_700Bold;
  color: #fff;
`;
