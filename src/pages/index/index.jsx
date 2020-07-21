import React, { useState, useEffect } from 'react'
import { View, Text } from '@tarojs/components'
import { connect } from 'react-redux'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import { AtButton } from 'taro-ui'
import Header from './components/header'
import request from '@/utils/request'

import './index.less'

// 使用connect时 不用forwardRef会报警告
const Index = React.forwardRef((props, ref) => {
  const { user } = props;
  const [getLoading, setGetLoading] = useState(false);

  useEffect(() => {
    console.log(getCurrentInstance());
  }, [])

  const getData = () => {
    setGetLoading(true);
    request({
      url: `/api/address/list`,
    }).then(res => {
      setGetLoading(false);
      console.log(res);
    }).catch(err => {
      setGetLoading(false);
      console.log(err);
    })
  }

  const toUser = () => {
    Taro.switchTab({
      url: '/pages/user/index'
    })
  }

  return (
    <View style={{ textAlign: 'center' }} ref={ref}>
      <Header name={user.name} />
      <Text>Hello World</Text>
      <AtButton
        type='primary'
        onClick={getData}
        className='btn'
        loading={getLoading}
      >获取</AtButton>
      <AtButton onClick={toUser} className='btn'>我的</AtButton>
    </View>
  )
})

export default connect(state => ({
  user: state.user,
}))(Index)
