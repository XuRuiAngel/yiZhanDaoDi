// pages/all/all.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sections:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    this.setData({
      sections: getApp().globalData.sections
    });

    wx.request({
      url: 'https://127.0.0.1:443/news',
      data:{},
      success:function(res){

        var app = getApp();
        app.globalData.news = res.data.newslist[0].news
      }
    })

    wx.request({
      url: 'https://127.0.0.1:443/china',
      data:{},
      success:function(res){
        console.log(res.data.data)
        var app = getApp();
        app.globalData.china = res.data.data
      }
    })
    
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
  onTap:function(e){
    var app = getApp();
    app.globalData.curSectionId = e.currentTarget.id;
    wx.navigateTo({
      url: '../index/index',
    })
  },

  onTapDayWeather:function(e){
    var app = getApp();
    app.globalData.curSectionId = e.currentTarget.id;
    wx.navigateTo({
      url: '../index/index',
    })
  }
  
})