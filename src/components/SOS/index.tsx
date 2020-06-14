import React, { useCallback } from 'react';
import { Linking } from 'react-native';

import { Container, Text } from './styles';

const SOS: React.FC = () => {
  const makeCall = useCallback((number: number) => {
    Linking.openURL(`tel:${number}`);
  }, []);

  return (
    <Container onPress={() => makeCall(190)}>
      <Text>S.O.S</Text>
    </Container>
  );
};

export default SOS;
