// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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
    onTapDayWeather: function (e) {
    wx.navigateTo({
      url: '../index/index',
    })
      wx.login({
        success: function (res) {
          console.log(res.code)
          //发送请求
          wx.request({
            url: 'http://47.99.79.253:8090/unionid', //接口地址
            data: { code: res.code },
            header: {
              'content-type': 'application/json' //默认值
            },
            success: function (res) {
              var app = getApp();
              app.globalData.userId=res.data
            }
          })
        }
      })
  }
})