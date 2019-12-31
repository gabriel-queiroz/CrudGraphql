import React, { useEffect } from "react";
import "~/config/ReactotronConfig";
import { ApolloProvider } from "react-apollo-hooks";
import apolloClient from "~/services/apollo";
import Routes from "~/routes";
import NavigationService from "~/services/navigationService";
import FlashMessage from "react-native-flash-message";
import OneSignal from "react-native-onesignal";

const App = () => {
  useEffect(() => {
    OneSignal.init("6e929521-00bc-42b5-99a3-a48bff012616");
    OneSignal.addEventListener("received", receivedPush);
    OneSignal.addEventListener("opened", openedPush);
    OneSignal.addEventListener("ids", idsPush);
  }, []);

  const receivedPush = push => {
    console.log(push);
  };
  const openedPush = push => {
    console.log(push);
  };
  const idsPush = push => {
    console.log(push);
  };

  return (
    <ApolloProvider client={apolloClient}>
      <Routes
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
      <FlashMessage position="top" />
    </ApolloProvider>
  );
};
export default App;
