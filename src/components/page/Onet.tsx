import React from 'react'
import { Provider } from 'react-redux'
import UserStream from '../organisms/UserStream'
import createStore from '../../state'

const store = createStore()

const Onet = () => {
  return (
    <Provider store={store}>
      <UserStream />
    </Provider>
  )
}

export default Onet
