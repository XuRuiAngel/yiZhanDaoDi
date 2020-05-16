//index.js
const app = getApp()

Page({
  data: {
     curSection:null
  },
  onLoad:function(){
    var that = this
    var index = getApp().globalData.curSectionId;
    this.setData({
      curSection: getApp().globalData.sections[index-1].subUrl
    });
    console.log(getApp().globalData.userId)
    console.log(getApp().globalData.curSectionId)
    wx.request({
      url: 'https://szaxr.cn/getRecord', //接口地址
      data: {
        userId: parseInt(getApp().globalData.userId),
        sectionId: getApp().globalData.curSectionId
      },
      method: 'GET',
      header: {
        'content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data.data)
        var app = getApp()
        app.globalData.questions = res.data.data

      }
    })
  },
  onTapDayWeather: function (e) {
    wx.request({
      url: 'https://szaxr.cn/getQuestions', //接口地址
      data: { sectionId: getApp().globalData.curSectionId},
      header: {
        'content-type': 'application/json' //默认值
      },
      success: function (res) {
        var app = getApp();
        app.globalData.question = res.data.data
        wx.navigateTo({
          url: '../question/question',
        })
      }
    })
 
 
  },
onTapDayWeather2: function (e) {
    wx.navigateTo({
      url: '../wrongQuestion/wrongQuestion',
    })
  var that = this

  }

  

})

