import { initialState, reducer } from '../reducers'
import { ActionTypes, factories } from '..'

describe('user/reducers', () => {
  test('initial state', () => {
    const state = undefined
    const action = {}
    const expected = { ...initialState }
    const result = reducer(state, action as any)
    expect(result).toEqual(expected)
  })
  test('ADD_USER', () => {
    const state = { ...initialState }
    const user = factories.userList[0]
    const action = {
      type: ActionTypes.ADD_USER,
      payload: { user }
    }
    const expected = {
      ...state,
      list: [...state.list, user]
    }
    const result = reducer(state, action)
    expect(result).toEqual(expected)
  })
})
