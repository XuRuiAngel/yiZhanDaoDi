//index.js
const app = getApp()

Page({
  data: {
  
  },
  onTapDayWeather: function (e) {
    wx.navigateTo({
      url: '../question/question',
    })
  },
onTapDayWeather2: function (e) {
    wx.navigateTo({
      url: '../wrongQuestion/wrongQuestion',
    })
  var that = this
  wx.request({
    url: 'http://127.0.0.1:8090/getRecord', //接口地址
    data: {
      userId: parseInt(getApp().globalData.userId),
    },
    method: 'GET',
    header: {
      'content-Type': 'application/json'
    },
    success: function (res) {
      console.log(res.data.data)
      var app=getApp()
      app.globalData.questions = res.data.data
      
    }
  })
  }

  

})

