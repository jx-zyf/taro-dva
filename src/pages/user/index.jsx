import React from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import './index.less'

const User = () => {
  const toIndex = () => {
    Taro.switchTab({
      url: '/pages/index/index'
    })
  }

  return (
    <View style={{ textAlign: 'center' }}>
      <Text>我的</Text>
      <AtButton type='primary' onClick={toIndex} className='btn'>首页</AtButton>
    </View>
  )
}

export default User