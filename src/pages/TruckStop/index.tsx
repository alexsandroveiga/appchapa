import React from 'react';

import { FontAwesome5 } from '@expo/vector-icons';

import Header from '../../components/Header';
import Background from '../../components/Background';
import TaskButton from '../../components/TaskButton';

import { Container, Title, Description, Icon } from './styles';

interface Task {
  title: string;
}

const TruckStop: React.FC = () => {
  return (
    <>
      <Background />
      <Header />

      <Container>
        <Title>Parada</Title>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit molestie
          maecenas.
        </Description>

        <TaskButton
          title="Locais próximos"
          icon={() => (
            <Icon>
              <FontAwesome5 name="map-signs" size={48} color="#fff" />
            </Icon>
          )}
        />
        <TaskButton
          title="Check-in por QRCode"
          icon={() => (
            <Icon>
              <FontAwesome5 name="qrcode" size={48} color="#fff" />
            </Icon>
          )}
        />
        <TaskButton
          title="Check-in por localização"
          icon={() => (
            <Icon>
              <FontAwesome5 name="map-marker-alt" size={48} color="#fff" />
            </Icon>
          )}
        />
      </Container>
    </>
  );
};

export default TruckStop;
