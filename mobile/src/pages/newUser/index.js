import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from 'react-apollo-hooks';
import {
  Container,
  Scroll,
  Title,
  Form,
  FormItem,
  Label,
  ErrorMessage,
  Input,
  ButtonSubmit,
  ButtonText,
  ActivityIndicator,
  StatusBar
} from './styles';
import { showMessage } from 'react-native-flash-message';
import { pop } from '~/services/navigationService';
import useForm from 'react-hook-form';
import { GET_USERS, UPDATE_USER } from '~/pages/Users';

const newUser = ({ navigation }) => {
  const {
    id = '',
    firstName = '',
    lastName = '',
    email = '',
    editing = false
  } = navigation.getParam('user') || {};

  const { register, setValue, handleSubmit, errors } = useForm({
    defaultValues: { firstName, lastName, email }
  });

  const POST_USER = gql`
    mutation createUser(
      $firstName: String!
      $lastName: String!
      $email: String!
    ) {
      createUser(firstName: $firstName, lastName: $lastName, email: $email) {
        id
        firstName
        lastName
        email
      }
    }
  `;

  const [createUser, { loading }] = useMutation(POST_USER, {
    refetchQueries: [{ query: GET_USERS }]
  });

  const [editUser, { loadingUser }] = useMutation(UPDATE_USER, {
    refetchQueries: [{ query: GET_USERS }]
  });

  const handleSubmitForm = async data => {
    if (editing) return editUserExist(data);
    return createNewUser(data);
  };

  const editUserExist = async data => {
    try {
      await editUser({
        variables: { ...data, id }
      });
      showMessage({
        message: 'Usuário atualizado!',
        type: 'success'
      });
      pop();
    } catch (error) {
      showMessage({
        message: 'Ops! Erro ao atualizar usuário',
        type: 'danger'
      });
    }
  };

  const createNewUser = async data => {
    try {
      await createUser({
        variables: { ...data }
      });
      showMessage({
        message: 'Usuário adicionado com sucesso!',
        type: 'success'
      });
      pop();
    } catch (error) {
      showMessage({
        message: 'Ops! Erro ao adicionar usuário',
        type: 'danger'
      });
    }
  };

  return (
    <Scroll>
      <Container>
        <Title>{editing ? 'Atualizar Usuário' : 'Novo Usuário'}</Title>
        <Form>
          <FormItem>
            <Label>Nome *</Label>
            <Input
              ref={register(
                { name: 'firstName' },
                { required: 'O nome é Obrigatório' }
              )}
              onChangeText={name => setValue('firstName', name, true)}
              autoFocus
              defaultValue={firstName}
              autoCompleteType="name"
            />
            <ErrorMessage>
              {errors.firstName ? errors.firstName.message : ''}
            </ErrorMessage>
          </FormItem>
          <FormItem>
            <Label>Sobrenome *</Label>
            <Input
              ref={register(
                { name: 'lastName' },
                { required: 'O sobrenome é Obrigatório' }
              )}
              onChangeText={lastName => setValue('lastName', lastName, true)}
              autoCompleteType="name"
              defaultValue={lastName}
            />
            <ErrorMessage>
              {errors.lastName ? errors.lastName.message : ''}
            </ErrorMessage>
          </FormItem>
          <FormItem>
            <Label>Email *</Label>
            <Input
              ref={register(
                { name: 'email' },
                { required: 'O email é obrigatório' }
              )}
              onChangeText={email => setValue('email', email, true)}
              keyboardType="email-address"
              returnKeyType="send"
              defaultValue={email}
              autoCompleteType="email"
              onSubmitEditing={handleSubmit(handleSubmitForm)}
            />
            <ErrorMessage>
              {errors.email ? errors.email.message : ''}
            </ErrorMessage>
          </FormItem>
          <ButtonSubmit onPress={handleSubmit(handleSubmitForm)}>
            {loading ? (
              <ActivityIndicator />
            ) : (
              <ButtonText>Adicionar</ButtonText>
            )}
          </ButtonSubmit>
        </Form>
      </Container>
      <StatusBar />
    </Scroll>
  );
};

export default newUser;
