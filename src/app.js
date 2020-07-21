import React from 'react'
import { Provider } from 'react-redux'
import { View } from '@tarojs/components'
import dva from '@/utils/dva'
import models from './models'

import 'taro-ui/dist/style/index.scss'

import './app.less'

const app = dva.createApp({
  models,
  initialState: {},
  enableLog: false,
})

const store = app.getStore()

const App = (props) => {
  return (
    <Provider store={store}>
      <View className='page'>{props.children}</View>
    </Provider>
  )
}

export default App