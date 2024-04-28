import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@redux/reducers';
import type { AppDispatch } from '@redux/store';

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector