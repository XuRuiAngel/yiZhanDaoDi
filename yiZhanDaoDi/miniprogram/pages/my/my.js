// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      user:null,
      sex:null,
      title:null,
      tel:null,
      score:null,
      isHidden: true,
      titleMsg: "",
      inputHidden: false,
      cancleBtn: false,
      inputPlaceHolder: "请输入...",
      u:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      user:getApp().globalData.user,
      score:getApp().globalData.user.score,
      sex:getApp().globalData.user.sex,
      tel:getApp().globalData.user.tel,
      title:getApp().globalData.user.title
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

  onMyEvent: function (e) {
    
    var that = this;
    that.setData({
    isHidden: true,
    })
    
    var info=this.selectComponent("#test").data.inputValue
    if(that.data.u=="sex"){
      getApp().globalData.user.sex=info
    that.setData({
       sex:info
    })
    wx.request({
      url: 'https://szaxr.cn/sex',
      data:{
        id:getApp().globalData.user.id,
        sex:info
      },
      success:function(res){
            
      }
    })
  }
  if(that.data.u=="tel"){
    getApp().globalData.user.tel=info;
    that.setData({
      tel:info
    })
    wx.request({
      url: 'https://szaxr.cn/tel',
      data:{
        id:getApp().globalData.user.id,
        tel:info
      },
      success:function(res){
            
      }
    })
  }
  if(that.data.u=="title"){
    getApp().globalData.user.title=info;
    that.setData({
      title:info
    })
    wx.request({
      url: 'https://szaxr.cn/title',
      data:{
        id:getApp().globalData.user.id,
        title:info
      },
      success:function(res){
            
      }
    })
  }
    },
  
    
    showCompomentDialog: function () {
    var that = this;
    that.setData({
    isHidden: false,
    titleMsg: "这样真的好吗",
    inputHidden: true,

    })
    },
    change:function(e){
      var id=e.currentTarget.id;
      this.setData({
        u:id
      })
      var msg=null;

      console.log(this.data.user)
      if(id=="sex") {
        msg="性别:"+this.data.user.sex;
      }
      console.log(this.data.user)
      if(id=="tel"){
        msg="电话:"+this.data.user.tel;
      }
      if(id=="title"){
        msg="头衔:"+this.data.user.title;
      }
      this.setData({
        isHidden: false,
        titleMsg: msg,
        inputHidden: false,
        })
    }
})