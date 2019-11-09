import { createAppContainer } from 'react-navigation';

import Users from '~/pages/Users';
import newUser from '~/pages/newUser';
import { createStackNavigator } from 'react-navigation-stack';
const Routes = createAppContainer(
  createStackNavigator({ Users, newUser }, { headerMode: 'none' })
);

export default Routes;
