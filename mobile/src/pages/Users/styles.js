import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: stretch;
  background-color: #7159c1;
`;

export const ScrollView = styled.ScrollView``;

export const Button = styled.TouchableOpacity`
  background-color: #fff;
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #7159c1;
  font-weight: bold;
  font-size: 17px;
`;

export const HeaderList = styled.View`
  justify-content: center;
  align-items: center;
  color
`;

export const Title = styled.Text`
  font-weight: bold;
  color: #ffffffff;
  font-size: 20px;
`;

export const Loading = styled.ActivityIndicator``;

export const Data = styled.Text``;

export const List = styled.FlatList.attrs({})``;

export const StatusBar = styled.StatusBar.attrs({
  barStyle: 'light-content'
})``;
