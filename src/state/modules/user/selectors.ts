import { createSelector } from 'reselect'
import { RootState } from '../..'
import { State } from './reducers'
import { User } from './interfaces'

const userSelector = (state: RootState): State => state.user

const getList = createSelector(
  userSelector,
  (state: State): User[] => state.list
)

export const selectors = { getList }
