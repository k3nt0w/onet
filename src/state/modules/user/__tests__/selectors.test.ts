import { RootState } from '../../../index'
import createStore from '../../../store'
import { selectors } from '../selectors'
import { User } from '../interfaces'

const baseState: RootState = createStore().getState()

describe('user/selectors', () => {
  test('getList', () => {
    const state = { ...baseState }
    const expected = [] as User[]
    state.user.list = expected
    const result = selectors.getList(state)
    expect(result).toEqual(expected)
  })
})
