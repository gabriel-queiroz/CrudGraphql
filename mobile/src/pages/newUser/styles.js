import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #7159c1;
  align-items: center;
  justify-content: center;
`;

export const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    flex: 1
  }
})``;

export const Title = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 30px;
`;

export const Form = styled.View`
  background-color: #ffffff;
  border-radius: 9px;
  width: 90%;
  padding: 20px;
`;

export const FormItem = styled.View`
  margin-bottom: 10px;
`;

export const Label = styled.Text`
  color: #7159c1;
  margin-bottom: 10px;
`;

export const Input = styled.TextInput.attrs({
  autoCorrect: false,
  autoCapitalize: 'none'
})`
  width: 100%;
  height: 50px;
  border-radius: 7px;
  border-width: 1px;
  border-color: #7159c1;
  padding: 15px;
  color: #4c3c82;
  font-size: 16px;
`;

export const ButtonSubmit = styled.TouchableOpacity`
  background-color: #7159c1;
  height: 40px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  color: #ffffff;
  font-size: 18px;
`;

export const ActivityIndicator = styled.ActivityIndicator.attrs({
  color: '#7159c1'
})``;

export const StatusBar = styled.StatusBar.attrs({
  barStyle: 'light-content'
})``;

export const ErrorMessage = styled.Text`
  color: #ff0505;
  height: 16px;
  margin: 5px 0;
`;
