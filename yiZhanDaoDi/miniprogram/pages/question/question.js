// pages/question/question.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postList:[ {
      "name":"测试",
      "daan":"A",
      "content":["A","B","C","D"]
    },
    {
      "name": "测试2",
      "daan":"B",
      "content": ["A", "B", "C", "D"]
    }
    ],
    userAnswer:[{
      "answer":"W"
    }
      
    ],
    index: 0,
    bc_default: '#FBFBFB',
    bc_right: '#98FB98',
    bc_wrong: '#FF99B4',
    bcA: '',
    bcB: '',
    bcC: '',
    bcD: '',
    but:false,
    next:true,
    ny: 'true',
    maxIndex:-1,
    defen: 0

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
   nextQuestion: function () {
    var that = this;
     if (that.data.index < that.data.postList.length - 1) {

      this.setData({
        index: that.data.index + 1,
        bcA: that.data.bc_default,
        bcB: that.data.bc_default,
        bcC: that.data.bc_default,
        bcD: that.data.bc_default,
        ny: 'true',
        but:false,
        next:true
        
      });
       if (that.data.index >= that.data.maxIndex) {
         this.setData({ maxIndex: that.data.index + 1 });
       }
       else {
         if (that.data.userAnswer[that.data.index + 1].answer == that.data.postList[that.data.index].daan) {
           if (that.data.userAnswer[that.data.index+1].answer == "A") {
                 this.setData({
                   bcA:that.data.bc_right
                 })
           }
           if (that.data.userAnswer[that.data.index+1].answer == "B") {
             this.setData({
               bcB: that.data.bc_right
             })
           }
           if (that.data.userAnswer[that.data.index+1].answer == "C") {
             this.setData({
               bcC: that.data.bc_right
             })
           }
           if (that.data.userAnswer[that.data.index+1].answer == "D") {
             this.setData({
               bcD: that.data.bc_right
             })
           }
         }
         else{
           if (that.data.userAnswer[that.data.index + 1].answer == "A") {
             this.setData({
               bcA: that.data.bc_wrong
             })
           }
           if (that.data.userAnswer[that.data.index + 1].answer == "B") {
             this.setData({
               bcB: that.data.bc_wrong
             })
           }
           if (that.data.userAnswer[that.data.index + 1].answer == "C") {
             this.setData({
               bcC: that.data.bc_wrong
             })
           }
           if (that.data.userAnswer[that.data.index + 1].answer == "D") {
             this.setData({
               bcD: that.data.bc_wrong
             })
           }
           if (that.data.postList[that.data.index].daan == "A") {
             this.setData({
               bcA: that.data.bc_right
             })
           }
           if (that.data.postList[that.data.index].daan == "B") {
             this.setData({
               bcB: that.data.bc_right
             })
           }
           if (that.data.postList[that.data.index].daan == "C") {
             this.setData({
               bcC: that.data.bc_right
             })
           }
           if (that.data.postList[that.data.index].daan == "D") {
             this.setData({
               bcD: that.data.bc_right
             })
           }
         }
       }
      
    }
  },
  lastQuestion: function () {
    var that = this;
    if (that.data.index > 0) {
      this.setData({
        index: that.data.index - 1,
        but:true,
        next:false
      });
      if (that.data.userAnswer[that.data.index + 1].answer == that.data.postList[that.data.index].daan) {
        if (that.data.userAnswer[that.data.index + 1].answer == "A") {
          this.setData({
            bcA: that.data.bc_right
          })
        }
        if (that.data.userAnswer[that.data.index + 1].answer == "B") {
          this.setData({
            bcB: that.data.bc_right
          })
        }
        if (that.data.userAnswer[that.data.index + 1].answer == "C") {
          this.setData({
            bcC: that.data.bc_right
          })
        }
        if (that.data.userAnswer[that.data.index + 1].answer == "D") {
          this.setData({
            bcD: that.data.bc_right
          })
        }
      }
      else {
        if (that.data.userAnswer[that.data.index + 1].answer == "A") {
          this.setData({
            bcA: that.data.bc_wrong
          })
        }
        if (that.data.userAnswer[that.data.index + 1].answer == "B") {
          this.setData({
            bcB: that.data.bc_wrong
          })
        }
        if (that.data.userAnswer[that.data.index + 1].answer == "C") {
          this.setData({
            bcC: that.data.bc_wrong
          })
        }
        if (that.data.userAnswer[that.data.index + 1].answer == "D") {
          this.setData({
            bcD: that.data.bc_wrong
          })
        }
        if (that.data.postList[that.data.index].daan == "A") {
          this.setData({
            bcA: that.data.bc_right
          })
        }
        if (that.data.postList[that.data.index].daan == "B") {
          this.setData({
            bcB: that.data.bc_right
          })
        }
        if (that.data.postList[that.data.index].daan == "C") {
          this.setData({
            bcC: that.data.bc_right
          })
        }
        if (that.data.postList[that.data.index].daan == "D") {
          this.setData({
            bcD: that.data.bc_right
          })
        }
      }
    }
  },
  btnOpClick: function (e) {
    var that = this;
    var select = e.currentTarget.id;
    var obj={};
    obj.answer=select;
    that.data.userAnswer.push(obj);
    var jieg = that.data.postList[that.data.index].daan;
    if (select == jieg) {
      if (that.data.index < that.data.postList.length - 1) {
        if (select == 'A') {
          this.setData({ bcA: that.data.bc_right });
        }
        else if (select == 'B') {
          this.setData({ bcB: that.data.bc_right });
        }
        else if (select == 'C') {
          this.setData({ bcC: that.data.bc_right });
        }
        else if (select == 'D') {
          this.setData({ bcD: that.data.bc_right });
        }
        that.nextQuestion();
        this.setData({
          defen: that.data.index * 2
        })
      }
      else {
        if (select == 'A') {
          this.setData({ bcA: that.data.bc_right });
        }
        else if (select == 'B') {
          this.setData({ bcB: that.data.bc_right });
        }
        else if (select == 'C') {
          this.setData({ bcC: that.data.bc_right });
        }
        else if (select == 'D') {
          this.setData({ bcD: that.data.bc_right });
        }
        that.gotonext();
      }
    }
    else {
      if (select == 'A') {
        this.setData({ bcA: that.data.bc_wrong });
      }
      else if (select == 'B') {
        this.setData({ bcB: that.data.bc_wrong });
      }
      else if (select == 'C') {
        this.setData({ bcC: that.data.bc_wrong });
      }
      else if (select == 'D') {
        this.setData({ bcD: that.data.bc_wrong });
      }
      else if (select == 'E') {
        this.setData({ bcE: that.data.bc_wrong });
      }
      if(jieg=="A"){
        this.setData({bcA:that.data.bc_right});
      }
      else if(jieg=="B"){
        this.setData({ bcB: that.data.bc_right });
      }
      else if (jieg == "C") {
        this.setData({ bcC: that.data.bc_right });
      }
      else if (jieg == "D") {
        this.setData({ bcD: that.data.bc_right });
        
      }
      this.setData({ but: true });
      this.setData({ next: false });
    }

  },
  gotonext: function () {
    wx.navigateTo({
      url: './../tiaozhuan/tiaozhuan',
    })
  },
  xianshi: function () {
    this.setData({
      ny: ''
    })
  }

})