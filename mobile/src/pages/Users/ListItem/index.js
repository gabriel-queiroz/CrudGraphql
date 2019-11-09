import React from 'react';

import {
  Container,
  Name,
  LastName,
  Email,
  Content,
  Delete,
  Edit,
  Button,
  Action
} from './styles';

const ListItem = ({ data, onEdit, onDelete }) => (
  <Container>
    <Content>
      <Name>Nome: {data.firstName}</Name>
      <LastName>Nome:{data.lastName}</LastName>
      <Email>Email:{data.email}</Email>
    </Content>
    <Action>
      <Button onPress={() => onEdit(data)}>
        <Edit>Editar</Edit>
      </Button>
      <Button onPress={() => onDelete(data.id)}>
        <Delete>Deletar</Delete>
      </Button>
    </Action>
  </Container>
);

export default ListItem;
