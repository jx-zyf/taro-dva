import Taro from '@tarojs/taro'

export default (options) => {
  return new Promise((resolve, reject) => {
    Taro.showLoading({
      title: '加载中...',
    })
    Taro.request({
      ...options,
      data: {
        app_id: 'njlnwyemofrpltae',
        app_secret: 'Tlh3dTkzSmtPZTVpZW84aUpTTFpqQT09'
      },
      success: res => {
        Taro.hideLoading()
        resolve(res.data)
        // if (res && res.data.success) {
        //   Taro.hideLoading()
        //   resolve(res.data.result)
        // } else {
        //   Taro.hideLoading()
        //   reject(res.data.errMsg || '系统错误')
        // }
      },
      fail: err => {
        console.log(err)
        Taro.hideLoading()
        reject('网络错误！请重试')
      }
    })
  })
}