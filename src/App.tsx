import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store, persistor } from '@redux/store';
import Navigation from '@navigation/index';
import { PersistGate } from 'redux-persist/integration/react';
import SplashScreen from '@components/SplashScreen';
import Toast from 'react-native-toast-message';
import { ToastConfig } from '@config/toast/toast';


const App: React.FC = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={<SplashScreen />} persistor={persistor}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
        <Toast config={ToastConfig} />
      </PersistGate>
    </Provider>
  );
}

export default App;