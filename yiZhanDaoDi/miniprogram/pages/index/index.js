//index.js
const app = getApp()

Page({
  data: {
  
  },
  onTapDayWeather: function (e) {
    wx.navigateTo({
      url: '../question/question',
    })
    wx.request({
      url: 'http://47.99.79.253:8090/getQuestions', //接口地址
      data: {  },
      header: {
        'content-type': 'application/json' //默认值
      },
      success: function (res) {
        var app = getApp();
        app.globalData.question = res.data.data
      }
    })
  },
onTapDayWeather2: function (e) {
    wx.navigateTo({
      url: '../wrongQuestion/wrongQuestion',
    })
  var that = this
  wx.request({
    url: 'http://47.99.79.253:8090/getRecord', //接口地址
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

