import styled, { css } from 'styled-components/native';
import { Feather as FeatherIcon } from '@expo/vector-icons';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 268px;
  height: 70px;
  padding: 0 16px;
  margin-bottom: 8px;
  border-width: 1px;
  border-color: #ccc;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #222;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #555;
  font-size: 16px;
  font-family: Ubuntu_400Regular;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
