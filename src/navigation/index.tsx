import * as React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@hooks';
import { loadToken } from '@redux/actions/authActions';
import AuthNavigation from '@navigation/AuthNavigation';
import AppNavigation from '@navigation/AppNavigation';
import BottomBar from '@navigation/BottomBar';
import { RootState } from '@redux/reducers';

const Navigation: React.FC = () => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  useEffect(() => {
    dispatch(loadToken());
  }, [])

  return (
    isAuthenticated === null ? <BottomBar /> : <BottomBar />
  );
}

export default Navigation;