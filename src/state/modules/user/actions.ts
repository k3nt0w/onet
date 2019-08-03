import { ActionTypes } from './types'
import { User } from './interfaces'

export const actions = {
  addUser: (user: User) => ({
    type: ActionTypes.ADD_USER,
    payload: { user }
  })
}
