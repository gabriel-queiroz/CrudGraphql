import styled from 'styled-components/native';

export const Container = styled.View`
  border-radius: 5px;
  background-color: #fff;
  margin: 10px;
  padding: 10px;
  min-height: 70px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100px;
`;

export const Content = styled.View`
  flex: 2;
`;

export const Action = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
`;

export const LastName = styled.Text``;

export const Email = styled.Text``;

export const Button = styled.TouchableOpacity``;

export const Delete = styled.Text`
  color: #ad2003;
  font-weight: bold;
  font-size: 18px;
`;

export const Edit = styled(Delete)`
  color: #334fd6;
  font-weight: bold;
  font-size: 18px;
`;
