// pages/analysis/analysis.js
Page({
  data:{
    id: null,
    analysis: null,
    answer: null,
    title: null,
    A: null,
    B: null,
    C: null,
    D: null,
    type: null
  },
  onLoad: function (options) {
    var that = this;
    that.setData({
      analysis: options.analysis,
      answer: options.answer,
      title: options.title,
      A: options.A,
      B: options.B,
      C: options.C,
      D: options.D,
      type: options.type,
      id: options.id
    })
  },
  addToMis: function(){
    var that = this;
    const db = wx.cloud.database();
    db.collection('mistakes').add({
      // data 字段表示需新增的 JSON 数据
      data: {
        _id: that.data.id,
        A: that.data.A,
        B: that.data.B,
        C: that.data.C,
        D: that.data.D,
        title: that.data.title,
        analysis: that.data.analysis,
        answer: that.data.answer,
        type: 0
      },
      success: function (res) {// res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
        wx.navigateBack({
        }),
        wx.showModal({
          title: '提示',
          content: '已加入错题本',
          showCancel: false
        })
      },
      fail: function() {
        wx.showModal({
          title: '提示',
          content: '错题本已有该题',
          showCancel: false
        })
      }
    })
  },
  goBack: function(){
    wx.navigateBack({
    })
  }
})