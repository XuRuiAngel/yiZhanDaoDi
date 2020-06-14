// pages/data_inner/data_inner.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ["陕西省", "西安市", "长安区"],
    multiArray3: [[1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]],
    multiIndex3: [3, 5, 4],
    text1:false,
    text2:false,
    newslist:null

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
  changeRegin(e){
    this.setData({ region: e.detail.value });
  },
  
  changeMultiPicker3(e) {
    this.setData({ multiIndex3: e.detail.value })
  },

  onTapDayWeather:function(e){

      let that=this
      wx.request({
        url: 'https://szaxr.cn/city',
        data:{
          city:that.data.region[1],
          district:that.data.region[2],
          province:that.data.region[0]

        },
        success: function (res){
          if(res.data.code==250){
            that.setData({
              text1:true,
              text2:false
            })
          }else if(res.data.code==200){
            that.setData({
              newslist:res.data.newslist,
              text2:true,
              text1:false
            })
          }
        }
      })
  }

})