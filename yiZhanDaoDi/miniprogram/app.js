//app.js
App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {

    }

    this.globalData = {
      user:null,
      questions:null,
      question:null,
      q:null,
      num:0,
      sections:null,
      curSectionId:0
    }
  }
})
