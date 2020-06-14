import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  padding: 0 16px;
  padding-top: ${Constants.statusBarHeight + 16 + 50 + 128}px;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: Ubuntu_700Bold;
  font-size: 24px;
  margin-bottom: 8px;
`;

export const Description = styled.Text`
  font-family: Ubuntu_300Light;
  font-size: 20px;
  margin-bottom: 32px;
  text-align: center;
`;

export const Icon = styled.View`
  width: 70px;
  height: 70px;
  background: #9d270e;
  align-items: center;
  justify-content: center;
`;
