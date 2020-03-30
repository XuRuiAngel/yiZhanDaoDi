//index.js
const app = getApp()

Page({
  data: {
  
  },
  onTapDayWeather: function (e) {
    wx.navigateTo({
      url: '../question/question',
    })
  }

  

})

