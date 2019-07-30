import React from 'react';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { ApplicationProvider } from 'react-native-ui-kitten';

import RootNavigator from './src/ui';
import { StoreProvider } from './src/stores/RootStore';

const App = () => (
  <ApplicationProvider
    mapping={mapping}
    theme={lightTheme}
  >
    <StoreProvider>
      <RootNavigator />
    </StoreProvider>
  </ApplicationProvider>
);

export default App;
