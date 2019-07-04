// pages/analysisE/analysisE.js
Page({

  /**
   * Page initial data
   */
  data: {
    analysis: [],
    answer: [],
    title: [],
    judge: [],
    id: [],
    A: [],
    B: [],
    C: [],
    D: []
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    var value1 = wx.getStorageSync('analysis')
    var value2 = wx.getStorageSync('answer')
    var value3 = wx.getStorageSync('title')
    var value4 = wx.getStorageSync('judge')
    var value5 = wx.getStorageSync('id')
    var value6 = wx.getStorageSync('A')
    var value7 = wx.getStorageSync('B')
    var value8 = wx.getStorageSync('C')
    var value9 = wx.getStorageSync('D')
    this.setData({
      analysis: value1,
      answer: value2,
      title: value3,
      judge: value4,
      id: value5,
      A: value6,
      B: value7,
      C: value8,
      D: value9
    })
    console.log('value7',value7)
  },

  addToMis: function(options){
    var t = options.currentTarget.id;
    if (t < 3){
      var that = this;
      const db = wx.cloud.database();
      db.collection('mistakes').add({
        // data 字段表示需新增的 JSON 数据
        data: {
          _id: that.data.id[t],
          A: that.data.A[t],
          B: that.data.B[t],
          C: that.data.C[t],
          D: that.data.D[t],
          title: that.data.title[t],
          analysis: that.data.analysis[t],
          answer: that.data.answer[t],
          type: 0
        },
        success: function (res) {// res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
            wx.showModal({
              title: '提示',
              content: '已加入错题本',
              showCancel: false
            })
        },
        fail: function () {
          wx.showModal({
            title: '提示',
            content: '错题本已有该题',
            showCancel: false
          })
        }
      })
    } else if(t >= 3 && t < 6) {
      var that = this;
      const db = wx.cloud.database();
      db.collection('mistakes').add({
        // data 字段表示需新增的 JSON 数据
        data: {
          title: that.data.title[t],
          analysis: that.data.analysis[t],
          answer: that.data.answer[t],
          type: 1,
          _id: that.data.id[t]
        },
        success: function (res) {// res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
            wx.showModal({
              title: '提示',
              content: '已加入错题本',
              showCancel: false
            })
        },
        fail: function () {
          wx.showModal({
            title: '提示',
            content: '错题本已有该题',
            showCancel: false
          })
        }
      })
    } else {
      var that = this;
      const db = wx.cloud.database();
      db.collection('mistakes').add({
        // data 字段表示需新增的 JSON 数据
        data: {
          _id: that.data.id[t],
          title: that.data.title[t],
          analysis: that.data.analysis[t],
          type: 2
        },
        success: function (res) {// res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
          wx.showModal({
            title: '提示',
            content: '已加入错题本',
            showCancel: false
          })
        },
        fail: function () {
          wx.showModal({
            title: '提示',
            content: '错题本已有该题',
            showCancel: false
          })
        }
      })
    }
    
  }
})