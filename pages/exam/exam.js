// pages/exam/exam.js
Page({
  data: {
    items: [],
    error: 0,
    correct: 0,
    i: 0,
    title: [],
    options: [],
    ans: [],
    analysis: [],
    index_test: 0,
    databaseQ: ['Qji','Qma','Qjing','Qmao']
  },
  onLoad: function (options) {
    var that = this;
    that.setData({
     index_test: options.indexFromTest
    })

    // wx.getStorage({
    //   key: 'indexS',
    //   success: function (res) {
    //     tmp = res.data;
    //     that.setData({                           //不能用异步传值
    //       index_test: tmp
    //     })
    //     console.log(that.data.index_test)
    //   }
    // })

    // tmp = wx.getStorageSync('indexS');
    // that.setData({
    //   index_test: tmp
    // })
    
    var db_select = that.data.databaseQ[that.data.index_test];
    const db = wx.cloud.database();
    db.collection(db_select).limit(1000).get({
      success: function (res) {
        that.setData({
          items: res.data
        })
        for (var k = 0; k < that.data.items.length; k++) {
          var title_t = "title[" + k + "]";
          var options_t0 = "options[" + k + "][0]";
          var options_t1 = "options[" + k + "][1]";
          var options_t2 = "options[" + k + "][2]";
          var options_t3 = "options[" + k + "][3]";
          var ans_t = "ans[" + k + "]";
          var analysis_t = "analysis[" + k + "]";
          that.setData({
            [title_t]: that.data.items[k].title,
            [options_t0]: that.data.items[k].A,
            [options_t1]: that.data.items[k].B,
            [options_t2]: that.data.items[k].C,
            [options_t3]: that.data.items[k].D,
            [ans_t]: that.data.items[k].answer,
            [analysis_t]: that.data.items[k].analysis
          })
        }
      }
    })
  },
  radiochange: function (res) {
  },
  goNext: function () {
    this.setData({
      i: this.data.i + 1
    })
    this.onLoad();
  }
})