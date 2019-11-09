import React from 'react';
import '~/config/ReactotronConfig';
import { ApolloProvider } from 'react-apollo-hooks';
import apolloClient from '~/services/apollo';
import Routes from '~/routes';
import NavigationService from '~/services/navigationService';
import FlashMessage from 'react-native-flash-message';

const App = () => (
  <ApolloProvider client={apolloClient}>
    <Routes
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    />
    <FlashMessage position="top" />
  </ApolloProvider>
);
export default App;
