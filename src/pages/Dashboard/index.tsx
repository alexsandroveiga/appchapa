import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 as Icon } from '@expo/vector-icons';

import StopIcon from '../../assets/stop-icon.svg';
import PlusIcon from '../../assets/plus-icon.svg';
import ChallengesIcon from '../../assets/challenges-icon.svg';

import Header from '../../components/Header';
import Background from '../../components/Background';
import Profile from '../../components/Profile';
import TaskButton from '../../components/TaskButton';

import { Container, StartTrip, StartTripButton, StartTripText } from './styles';

interface Task {
  title: string;
}

const Dashboard: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <Background />
      <Header />

      <Container>
        <Profile />

        <StartTrip>
          <StartTripButton>
            <Icon name="play" size={32} color="#fff" />
          </StartTripButton>
          <StartTripText>Iniciar viagem</StartTripText>
        </StartTrip>

        <TaskButton
          title="Fazer parada"
          onPress={() => navigation.navigate('Parada')}
          icon={() => (
            <StopIcon width={67} height={67} style={{ marginBottom: -8 }} />
          )}
        />

        <TaskButton
          title="Desafios"
          onPress={() => navigation.navigate('Desafios')}
          icon={() => (
            <ChallengesIcon
              width={67}
              height={67}
              style={{ marginBottom: -8 }}
            />
          )}
        />

        <TaskButton
          title="Fazer parada"
          onPress={() => navigation.navigate('Assistência Médica')}
          icon={() => (
            <PlusIcon width={67} height={67} style={{ marginBottom: -8 }} />
          )}
        />
      </Container>
    </>
  );
};

export default Dashboard;
