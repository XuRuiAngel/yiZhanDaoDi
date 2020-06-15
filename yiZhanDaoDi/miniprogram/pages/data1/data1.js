// pages/data1/data1.js
Page({

  /**
   * 页面的初始数据
   */
  
  data: {
        china:null,
        region: ["陕西省", "西安市", "长安区"],
        multiArray3: [[1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]],
        multiIndex3: [3, 5, 4]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
          this.setData({
            china:getApp().globalData.china
          })
          var num1=this.data.china.currentConfirmedCount
          var num2=this.data.china.curedCount
          var num3=this.data.china.deadCount
          let Charts = require('./../../utils/wxcharts-min.js');
          new Charts({
            canvasId: 'canvas1',
            type: 'pie',
            series: [{ name: '现存确诊病例数', data: num1 }, { name: '累计治愈病例数', data: num2 }, { name: '累计死亡病例数', data: num3 }],
            width: 280,
            height: 200,
            dataLabel: true,
          });
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
  changeRegin(e){
    this.setData({ region: e.detail.value });
  },
  
  changeMultiPicker3(e) {
    this.setData({ multiIndex3: e.detail.value })
  },

  onTapDayWeather:function(e){
    wx.navigateTo({
      url: '../data_inner/data_inner',
    })
  }
})