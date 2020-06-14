import React from 'react';
import { Feather as Icon } from '@expo/vector-icons';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  Avatar,
  AvatarImage,
  EditButton,
  Username,
  Points,
} from './styles';

import happyAvatar from '../../assets/happy-bino.png';

const Profile: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container>
      <Avatar>
        <AvatarImage source={happyAvatar} />
        <EditButton>
          <Icon name="edit-2" size={20} color="#fff" />
        </EditButton>
      </Avatar>
      <Username>@{user.username}</Username>
      <Points>#{user.points} pts</Points>
    </Container>
  );
};

export default Profile;
