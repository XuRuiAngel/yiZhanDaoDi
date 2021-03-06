// pages/wrongQuestion/wrongQuestion.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showOrHidden:false,
    questions:[{
          time:"45464"
    },
    {
         time:"54612"
    }]

  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var jslength = 0;
    for (var js2 in getApp().globalData.questions) {
      jslength++;
    }
    if (jslength == 0) {
        this.setData({
          showOrHidden:true
        })
    }
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
       this.setData({
         questions: getApp().globalData.questions
       })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
         
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

 
  onTapDayWeather:function(e){
    wx.request({
      url: 'https://szaxr.cn/getProblem', //接口地址
      data: { id: e.currentTarget.id },
      header: {
        'content-type': 'application/json' //默认值
      },
      success: function (res) {
        var app = getApp();
        app.globalData.q = res.data
        console.log(res.data)
        wx.navigateTo({
          url: '../wrongQuestion_inner/wrongQuestion_inner',
        })
      }
    })

    

  }
  
})