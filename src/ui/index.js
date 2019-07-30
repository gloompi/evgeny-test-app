import {
  createAppContainer,
  createStackNavigator,
} from 'react-navigation';
import Home from './HomeScreen';
import Events from './EventsScreen';

const RootNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
    },
  },
  Events: {
    screen: Events,
    navigationOptions: {
      title: 'Events',
    },
  }
});

export default createAppContainer(RootNavigator);
