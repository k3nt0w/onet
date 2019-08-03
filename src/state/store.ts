import {
  applyMiddleware,
  combineReducers,
  createStore,
  DeepPartial
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk, { ThunkMiddleware } from 'redux-thunk'
import user from './modules/user'
import { RootAction, RootState } from './types'

export const rootReducer = combineReducers<RootState>({
  user
})

export default (preloadedState?: DeepPartial<RootState>) => {
  const reducer = combineReducers<RootState>({ user })
  const middleware = [thunk as ThunkMiddleware<RootState, RootAction>]
  const enhancer = composeWithDevTools(applyMiddleware(...middleware))

  return createStore<RootState, RootAction, {}, {}>(
    reducer,
    preloadedState,
    enhancer
  )
}
