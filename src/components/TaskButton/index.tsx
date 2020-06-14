import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Text } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  icon(): void;
}

const TaskButton: React.FC<Props> = ({ title, icon, ...props }) => {
  return (
    <Container {...props}>
      {icon()}
      <Text>{title}</Text>
    </Container>
  );
};

export default TaskButton;
