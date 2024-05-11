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
  error: (props: BaseToastProps) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: 'red' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 17,
      }}
    />
  ),
  info: (props: BaseToastProps) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: 'blue' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 17,
      }}
    />
  ),
  warm: (props: BaseToastProps) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: 'yellow' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 17,
      }}
    />
  ),
};
