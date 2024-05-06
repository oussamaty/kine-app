import * as React from 'react';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@hooks/index';
import { loadToken } from '@redux/actions/authActions';
import AuthNavigation from '@navigation/AuthNavigation';
import AppNavigation from '@navigation/AppNavigation';

const Navigation: React.FC = () => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated);

  useEffect(() => {
    dispatch(loadToken());
  }, [])

  return (
    isAuthenticated === null ? <AuthNavigation /> : <AppNavigation />
  );
}

export default Navigation;