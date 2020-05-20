// pages/question/question.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postList:null,
    userAnswer:[{
      "answer":"W"
    }   
    ],
    index: 0,
    bc_default: '#FBFBFB',
    bc_right: '#9BCD9B',
    bc_wrong: '#E9967A',
    bcA: '',
    bcB: '',
    bcC: '',
    bcD: '',
    but:false,
    next:true,
    end: 'true',
    maxIndex:-1,
    number:null


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
    var that=this

    this.setData({

      bcA: that.data.bc_default,
      bcB: that.data.bc_default,
      bcC: that.data.bc_default,
      bcD: that.data.bc_default,
      postList: getApp().globalData.question

    });
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
  /**
   * 下一题
   */
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
       if (that.data.index > that.data.maxIndex) {
         this.setData({ maxIndex: that.data.index });
       }
       else if(that.data.index<that.data.maxIndex){
         this.setData({
           but: true,
           next:false

         });
         if (that.data.userAnswer[that.data.index + 1].answer == that.data.postList                      [that.data.index].daan) {
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
       else {
         if (that.data.userAnswer[that.data.index + 1].answer==null){
         this.setData({
           bcA: that.data.bc_default,
           bcB: that.data.bc_default,
           bcC: that.data.bc_default,
           bcD: that.data.bc_default,
           ny: 'true',
           but: false,
           next: true
         });
         }
         else{
           this.setData({
             but:true,
             next:false
           })
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
       }
      
    }else{
      this.gotonext()
     
    }
  },
  /**
   * 上一题
   */
  lastQuestion: function () {
    var that = this;
    if (that.data.index > 0) {
      this.setData({
        index: that.data.index - 1,
        bcA: that.data.bc_default,
        bcB: that.data.bc_default,
        bcC: that.data.bc_default,
        bcD: that.data.bc_default,
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
      
      getApp().globalData.num = getApp().globalData.num+1
      this.setData({
        number:that.data.number+1
      })
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
        this.setData({ but: true });
        this.setData({ next: false });
        that.nextQuestion();
        
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
        this.setData({ but: true });
        this.setData({ next: false });
        this.setData({end:false});
        this.gotonext();
        
      }
    }
    else {
      console.log(getApp().globalData.userId)
     
      wx.request({
        url: 'https://szaxr.cn/addRecord', //接口地址
        data: {
          userId: parseInt(getApp().globalData.user.id),
          questionId: that.data.postList[that.data.index].id,
          content: that.data.postList[that.data.index].name
          },
        method:'POST',
        header: {
          "content-type": "application/x-www-form-urlencoded" //默认值
        },
        success: function (res) {
          console.log(res.data)
        }
      })
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
      url: '../end/end',
    })
  },
  xianshi: function () {
    this.setData({
      ny: ''
    })
  }

})