import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import { NativeBaseProvider } from 'native-base';
import AppNavigator from './navigation';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider>
          <AppNavigator />
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
