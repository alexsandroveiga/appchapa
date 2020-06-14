import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  align-items: center;
  margin-bottom: 16px;
`;

export const Avatar = styled.View`
  align-items: center;
  margin-bottom: 21px;
`;

export const AvatarImage = styled.Image`
  width: 140px;
  height: 140px;
  border-width: 4px;
  border-color: #9d270e;
  border-radius: 70px;
`;

export const EditButton = styled(RectButton)`
  background: #9d270e;
  width: 34px;
  height: 34px;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: -13px;
`;

export const Username = styled.Text`
  font-family: Ubuntu_700Bold;
  font-size: 24px;
`;

export const Points = styled.Text`
  font-family: Ubuntu_300Light;
  font-size: 20px;
`;
