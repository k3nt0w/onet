import faker from 'faker'
import { toArray } from '../../utils/test-utils'

const user = () => ({
  name: faker.name.firstName()
})

export const factories = {
  userList: toArray(user)
}
