import React from 'react';
import { DrawerActions } from '@react-navigation/native';
import {
  DrawerContentComponentProps,
  DrawerItem,
} from '@react-navigation/drawer';
import { Feather as Icon } from '@expo/vector-icons';

import { useAuth } from '../../hooks/auth';

import { Container, List, CloseButton } from './styles';

const Drawer: React.FC<DrawerContentComponentProps> = (props) => {
  const { signOut } = useAuth();

  return (
    <>
      <Container {...props}>
        <List
          {...props}
          inactiveBackgroundColor="transparent"
          activeBackgroundColor="transparent"
          inactiveTintColor="#fff"
          activeTintColor="#fcc100"
          labelStyle={{
            fontFamily: 'Ubuntu_400Regular',
            fontSize: 24,
            lineHeight: 24,
            marginVertical: 0,
            paddingVertical: 0,
          }}
          itemStyle={{
            paddingVertical: 0,
            paddingHorizontal: 16,
            marginVertical: 0,
            marginHorizontal: 0,
          }}
        />
        <DrawerItem
          label="Sair do sistema"
          onPress={() => {
            props.navigation.dispatch(DrawerActions.closeDrawer());
            signOut();
          }}
          style={{
            paddingVertical: 0,
            paddingHorizontal: 16,
            marginVertical: 0,
            marginHorizontal: 0,
          }}
          labelStyle={{
            fontFamily: 'Ubuntu_400Regular',
            fontSize: 24,
            lineHeight: 24,
            marginVertical: 0,
            paddingVertical: 0,
            color: '#fff',
          }}
        />
      </Container>
      <CloseButton
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      >
        <Icon name="x" size={24} color="#6D6E70" />
      </CloseButton>
    </>
  );
};

export default Drawer;
