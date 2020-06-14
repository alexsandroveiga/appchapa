import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: 70px;
  flex-direction: row;
  background: #c4c4c4;
  border-radius: 10px;
  overflow: hidden;
  align-items: center;
  margin-bottom: 8px;
`;

export const Text = styled.Text`
  flex: 1;
  text-align: center;
  justify-content: center;
  font-family: Ubuntu_700Bold;
  font-size: 24px;
  color: #fff;
`;
