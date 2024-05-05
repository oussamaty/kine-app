// App.jsx
import Toast, { BaseToast } from 'react-native-toast-message';

/*
  1. Create the config
*/
const toastConfig = {
    /*
      Overwrite 'success' type,
      by modifying the existing `BaseToast` component
    */
    success: () => (
        <BaseToast
            text1Style={{
                fontSize: 15,
                fontWeight: '400'
            }}
        />
    ),
};

/*
  2. Pass the config as prop to the Toast component instance
*/
export function App() {
    return (
        <Toast config={toastConfig} />
    );
}