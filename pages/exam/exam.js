// pages/exam/exam.js
const app = getApp()
Page({
  data: {
    index: 1,
    realIndex: 0,
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    a:0,
    b:0,
    c:0,
    d: 0,
    optionA: "A",
    optionB: "B",
    optionC: "C",
    optionD: "D",
    questionDetail: app.globalData.question[0].question,
    answerA: app.globalData.question[0].option.A,
    answerB: app.globalData.question[0].option.B,
    answerC: app.globalData.question[0].option.C,
    answerD: app.globalData.question[0].option.D,
    list: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    listABC : ['A','B','C','D'],
    answer:['','D','D','B','D','C','D','D','A'],
    correct: 0,
    error: 0
  },
 


  setOption: function(){

  },



  answerClickA: function () {
      this.setData({
        A: this.data.A + 1
      })
    if(this.data.answer[this.data.index] == 'A'){
      this.setData({
        correct: this.data.correct + 1
      })
    }else{
      this.setData({
        error: this.data.error + 1
      })
    }
    if (this.data.index == 8) {
      wx.redirectTo({
        url: '/pages/result/result?A=' + this.data.A + '&B=' + this.data.B + '&C=' + this.data.C + '&D=' + this.data.D + '&correct=' + this.data.correct + '&error=' + this.data.error,
      })
    }
    if(this.data.index < 8){
    this.setData({
      index: this.data.index + 1,
      realIndex: this.data.list[this.data.index],
    })
    this.setData({
      questionDetail: app.globalData.question[this.data.realIndex].question,
     
      answerA: app.globalData.question[this.data.realIndex].option[this.data.listABC[0]],
      answerB: app.globalData.question[this.data.realIndex].option[this.data.listABC[1]],
      answerC: app.globalData.question[this.data.realIndex].option[this.data.listABC[2]],
      answerD: app.globalData.question[this.data.realIndex].option[this.data.listABC[3]],
    }) 
  }
  },

  answerClickB: function () {
      this.setData({
        B: this.data.B + 1
      })
    if (this.data.answer[this.data.index] == 'B') {
      this.setData({
        correct: this.data.correct + 1
      })
    } else {
      this.setData({
        error: this.data.error + 1
      })
    }
    if (this.data.index == 8) {
      wx.redirectTo({
        url: '/pages/result/result?A=' + this.data.A + '&B=' + this.data.B + '&C=' + this.data.C + '&D=' + this.data.D + '&correct=' + this.data.correct + '&error=' + this.data.error,
      })
    }
    if (this.data.index < 8) {
      this.setData({
        index: this.data.index + 1,
        realIndex: this.data.list[this.data.index],
      })
      this.setData({
        questionDetail: app.globalData.question[this.data.realIndex].question,

        answerA: app.globalData.question[this.data.realIndex].option[this.data.listABC[0]],
        answerB: app.globalData.question[this.data.realIndex].option[this.data.listABC[1]],
        answerC: app.globalData.question[this.data.realIndex].option[this.data.listABC[2]],
        answerD: app.globalData.question[this.data.realIndex].option[this.data.listABC[3]],
      })
    }
  },


  answerClickC: function () {
      this.setData({
        C: this.data.C + 1
      })
    if (this.data.answer[this.data.index] == 'C') {
      this.setData({
        correct: this.data.correct + 1
      })
    } else {
      this.setData({
        error: this.data.error + 1
      })
    }
    if (this.data.index == 8) {
      wx.redirect
      To({
        url: '/pages/result/result?A=' + this.data.A + '&B=' + this.data.B + '&C=' + this.data.C + '&D=' + this.data.D + '&correct=' + this.data.correct + '&error=' + this.data.error,
      })
    }
    if (this.data.index < 8) {
      this.setData({
        index: this.data.index + 1,
        realIndex: this.data.list[this.data.index],
      })
      this.setData({
        questionDetail: app.globalData.question[this.data.realIndex].question,

        answerA: app.globalData.question[this.data.realIndex].option[this.data.listABC[0]],
        answerB: app.globalData.question[this.data.realIndex].option[this.data.listABC[1]],
        answerC: app.globalData.question[this.data.realIndex].option[this.data.listABC[2]],
        answerD: app.globalData.question[this.data.realIndex].option[this.data.listABC[3]],
      })
    }
  },

  answerClickD: function () {
      this.setData({
        D: this.data.D + 1
      })
    if (this.data.answer[this.data.index] == 'D') {
      this.setData({
        correct: this.data.correct + 1
      })
    } else {
      this.setData({
        error: this.data.error + 1
      })
    }
    if (this.data.index == 8) {
      wx.redirectTo({
        url: '/pages/result/result?A=' + this.data.A + '&B=' + this.data.B + '&C=' + this.data.C + '&D=' + this.data.D + '&correct=' + this.data.correct + '&error=' + this.data.error,
      })
    }
    if (this.data.index < 8) {
      this.setData({
        index: this.data.index + 1,
        realIndex: this.data.list[this.data.index],
      })
      this.setData({
        questionDetail: app.globalData.question[this.data.realIndex].question,

        answerA: app.globalData.question[this.data.realIndex].option[this.data.listABC[0]],
        answerB: app.globalData.question[this.data.realIndex].option[this.data.listABC[1]],
        answerC: app.globalData.question[this.data.realIndex].option[this.data.listABC[2]],
        answerD: app.globalData.question[this.data.realIndex].option[this.data.listABC[3]],
      })
    }
  }

})