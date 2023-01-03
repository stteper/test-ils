import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'

import type { RootState } from '../store/store'

export const useAppDispatch = () => useDispatch<Dispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
