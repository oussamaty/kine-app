import * as React from 'react';
import { BaseToast, BaseToastProps } from 'react-native-toast-message';

export const ToastConfig = {
  success: (props: BaseToastProps) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: 'green' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 17,
      }}
    />
  ),
};
