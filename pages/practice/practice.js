// pages/practice/practice.js
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
  },
  onLoad: function (options) {
    var that = this;
    const db = wx.cloud.database();
    db.collection('Qmao').limit(1000).get({
      success: function(res) {
        that.setData({
          items: res.data      
    })
    
    for(var k = 0; k < that.data.items.length; k++) {
      var title_t = "title["+ k +"]";
      var options_t0 = "options[" + k + "][0]";  //设置字符串变量
      var options_t1 = "options[" + k + "][1]";
      var options_t2 = "options[" + k + "][2]";
      var options_t3 = "options[" + k + "][3]";
      var ans_t = "ans[" + k + "]";
      var analysis_t = "analysis[" + k + "]";
      that.setData({
        [title_t]: that.data.items[k].title,
        [options_t0]: that.data.items[k].A,    //用中括号找字符串所代表的的变量
        [options_t1]: that.data.items[k].B,
        [options_t2]: that.data.items[k].C,
        [options_t3]: that.data.items[k].D,
        [ans_t]: that.data.items[k].answer,
        [analysis_t]: that.data.items[k].analysis
      })     
    }
  }})
  },
  goAnalysis: function(){
    var that = this;
    var i_t = that.data.i;//设置局部变量
    wx.navigateTo({
      url: '/pages/analysis/analysis?answer=' + that.data.ans[i_t] + '&analysis=' + that.data.analysis[i_t] + '&A=' + that.data.options[i_t][0] + '&B=' + that.data.options[i_t][1] + '&C=' + that.data.options[i_t][2] + '&D=' + that.data.options[i_t][3] + '&title=' + that.data.title[i_t],
    })
  },
  radiochange: function (res) {
  },
  goNext: function(){
    this.setData({ //不用setData wxml的i不跟着变化
      i: this.data.i + 1
    })
    this.onLoad();
  }
})


//radio形状 大小的问题