export default {
  pages: [
    'pages/index/index',
    'pages/user/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: './images/tab/home.png',
        selectedIconPath: './images/tab/home-active.png',
      },
      {
        pagePath: 'pages/user/index',
        text: '我的',
        iconPath: './images/tab/user.png',
        selectedIconPath: './images/tab/user-active.png',
      },
    ],
    color: '#777',
    selectedColor: '#000',
    backgroundColor: '#efefef',
    borderStyle: 'black',
  },
}
