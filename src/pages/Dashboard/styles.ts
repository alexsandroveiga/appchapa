import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  padding: 0 16px;
  padding-top: ${Constants.statusBarHeight + 16 + 50}px;
`;

export const StartTrip = styled.View`
  align-items: center;
  margin-bottom: 16px;
`;

export const StartTripButton = styled.TouchableOpacity`
  background: #9d270e;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`;

export const StartTripText = styled.Text`
  font-family: Ubuntu_700Bold;
  font-size: 24px;
`;
