import React from 'react'
import { View, Text } from 'react-native'

interface User {
  name: string
}

interface Props {
  userList: User[]
}

export const UserStream = (props: Props) => {
  const { userList } = props
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text>Hello, Onet!</Text>
      {userList.map((user: User, index: number) => (
        <Text key={index}>{user.name}</Text>
      ))}
    </View>
  )
}
