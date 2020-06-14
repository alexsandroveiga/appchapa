import React from 'react';
import { useAuth } from '../../hooks/auth';

import topBackground from '../../assets/top-background.png';
import singleBackground from '../../assets/single-background.png';

import { Container } from './styles';

const Background: React.FC = () => {
  const { user } = useAuth();

  return <Container source={user ? singleBackground : topBackground} />;
};

export default Background;
