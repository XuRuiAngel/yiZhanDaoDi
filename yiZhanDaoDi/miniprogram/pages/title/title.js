// pages/title/title.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     t:null,
     flag:null,
     score:null,
     isHidden: true,
     titleMsg: null,
     inputHidden: true,
     cancleBtn: false,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
       this.setData({
         score:getApp().globalData.user.score,
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
  buy:function(e){
    var id=e.currentTarget.id;
    this.setData({
      t:id
    })
    var that=this;

    if(id=="fupo"||id=="gongju"){
      if(that.data.score<300){
          that.setData({
            isHidden:false,
            titleMsg:"积分不足哦！",
            flag:0
          })
      }else {
        that.setData({
          isHidden:false,
          titleMsg:"确定要购买吗？",
          flag:1
        })
      }
    }
    if(id=="pingmin"||id=="yatou"){
      if(that.data.score<100){
          that.setData({
            isHidden:false,
            titleMsg:"积分不足哦！",
            flag:0
          })
      }else {
        that.setData({
          isHidden:false,
          titleMsg:"确定要购买吗？",
          flag:1
        })
      }
    }
  },
  onMyEvent:function(e){
    
    this.setData({
      isHidden:true
    })
    var that=this
    var info=that.data.t
    var tran=null
    if(info=="pingmin") tran="平民"
    if(info=="yatoun") tran="丫头"
    if(info=="fupo") tran="小富婆"
    if(info=="gongju") tran="小公举"
    if(this.data.flag==1){
      getApp().globalData.user.title=tran
      wx.request({
        url: 'https://szaxr.cn/title',
        data:{
          id:getApp().globalData.user.id,
          title:tran
        },
        success:function(res){
              
        }
      })
      if(info=="pingmin"||info=="yatou"){
        getApp().globalData.user.score-=100
        wx.request({
          url: 'https://szaxr.cn/score',
          data:{
            id:getApp().globalData.user.id,
            score:-100
          },
          success:function(res){

          }
        })
      }
      if(info=="fupo"||info=="gongju"){
        getApp().globalData.user.score-=300
        wx.request({
          url: 'https://szaxr.cn/score',
          data:{
            id:getApp().globalData.user.id,
            score:-300
          },
          success:function(res){

          }
        })
      }
    }
    
  }
})