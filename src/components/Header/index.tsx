import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

import { Container, Menu, Dollar } from './styles';

const Header: React.FC = () => {
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

  return (
    <Container>
      <Menu onPress={() => navigation.openDrawer()}>
        <Icon name="menu" size={24} color="#fff" />
      </Menu>

      <Dollar onPress={() => {}}>
        <Icon name="dollar-sign" size={24} color="#9d270e" />
      </Dollar>
    </Container>
  );
};

export default Header;
