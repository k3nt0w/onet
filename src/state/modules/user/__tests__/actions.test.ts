import { actions, ActionTypes } from '..'
import { factories } from '../factories'

describe('user/actions', () => {
  test('addUser', () => {
    const user = factories.userList[0]
    const expected = {
      type: ActionTypes.ADD_USER,
      payload: { user }
    }
    const result = actions.addUser(user)
    expect(result).toEqual(expected)
  })
})
