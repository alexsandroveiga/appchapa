import React, { useRef, useCallback } from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Dimensions,
  Alert,
} from 'react-native';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import { useAuth } from '../../hooks/auth';

import logo from '../../assets/logo.png';
import topBackground from '../../assets/top-background.png';

import Input from '../../components/Input';

import {
  Container,
  Main,
  Logo,
  Description,
  Footer,
  Button,
  ButtonText,
} from './styles';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

interface SignInFormData {
  phone: string;
}

const Auth: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      try {
        await signIn({ phone: Number(data.phone) });
      } catch (err) {
        console.log('erro');
        Alert.alert('Algo deu errado, tente novamente!');
      }
    },
    [signIn],
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{ flex: 1 }}
      >
        <Container
          source={topBackground}
          resizeMode="center"
          imageStyle={{ height: screenWidth, bottom: undefined, top: -30 }}
        >
          <Main>
            <Logo source={logo} />
            <Description>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit molestie
              maecenas.
            </Description>
          </Main>

          <Footer>
            <Form ref={formRef} onSubmit={handleSignIn}>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="phone-pad"
                name="phone"
                icon="phone"
                placeholder="Número de telefone"
                returnKeyType="send"
                value="(21) 99999-9999"
              />
            </Form>
            <Button
              onPress={() => {
                formRef.current?.submitForm();
              }}
            >
              <ButtonText>Começar</ButtonText>
            </Button>
          </Footer>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Auth;
