import { ActionCreator, Store } from 'redux'
import { ThunkAction as ReduxThunkAction, ThunkDispatch } from 'redux-thunk'
import * as user from './modules/user'

export interface RootState {
  user: user.State
}

export type RootAction = user.Actions

type ReduxStore = Store<RootState, RootAction>

export interface Store extends ReduxStore {
  dispatch: ThunkDispatch<RootState, undefined, RootAction>
}

export type ThunkAction = ReduxThunkAction<
  Promise<void> | void,
  RootState,
  undefined,
  RootAction
>

export type Operation = ActionCreator<ThunkAction>

type ValueOf<T> = T[keyof T]
type ReturnTypes<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any
    ? ReturnType<T[K]>
    : never
}
export type ActionsUnion<T> = ValueOf<ReturnTypes<T>>
