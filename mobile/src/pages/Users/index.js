import React from 'react';
import {
  Container,
  Loading,
  List,
  ScrollView,
  Button,
  ButtonText,
  Title,
  HeaderList,
  StatusBar
} from './styles';
import gql from 'graphql-tag';
import { useQuery, useMutation } from 'react-apollo-hooks';
import ListItem from './ListItem';
import { push } from '~/services/navigationService';
import { showMessage } from 'react-native-flash-message';

export const GET_USERS = gql`
  {
    users {
      id
      firstName
      lastName
      email
    }
  }
`;

const DELETE_USER = gql`
  mutation deleteUser($id: String!) {
    deleteUser(id: $id) {
      id
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser(
    $id: String!
    $firstName: String!
    $lastName: String!
    $email: String!
  ) {
    updateUser(
      id: $id
      firstName: $firstName
      lastName: $lastName
      email: $email
    ) {
      id
      firstName
      lastName
      email
    }
  }
`;

const Users = () => {
  const { data, loading, refetch } = useQuery(GET_USERS);
  const [deleteUser, { loadingDelete }] = useMutation(DELETE_USER, {
    refetchQueries: [{ query: GET_USERS }]
  });

  handleDeleteItem = id => {
    try {
      deleteUser({ variables: { id } });
      showMessage({
        message: 'Usuário deletado com sucesso',
        type: 'success'
      });
    } catch (error) {}
  };

  handleEditItem = user => {
    push('newUser', { user: { ...user, editing: true } });
  };

  const renderItem = ({ item }) => (
    <ListItem onEdit={handleEditItem} onDelete={handleDeleteItem} data={item} />
  );

  const renderTitleList = () => {
    return (
      <HeaderList>
        <Title>Usuários</Title>
      </HeaderList>
    );
  };

  if (loading) {
    return (
      <Container>
        <Loading />
      </Container>
    );
  }
  return (
    <Container>
      <List
        ListHeaderComponent={renderTitleList}
        refreshing={loading}
        onRefresh={() => refetch()}
        data={data.users}
        renderItem={renderItem}
      />

      <Button onPress={() => push('newUser')}>
        <ButtonText>Adicionar usuário</ButtonText>
      </Button>
      <StatusBar />
    </Container>
  );
};

export default Users;
