import { Reducer } from 'redux'
import { ActionsUnion } from '../../types'
import { actions } from './actions'
import { ActionTypes } from './types'
import { User } from './interfaces'

export type Actions = ActionsUnion<typeof actions>

export interface State {
  list: User[]
}

export const initialState: State = {
  list: [
    {
      name: 'alice'
    }
  ]
}
export const reducer: Reducer<State, Actions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_USER:
      return {
        ...state,
        list: [...state.list, action.payload.user]
      }
    default:
      return state
  }
}
