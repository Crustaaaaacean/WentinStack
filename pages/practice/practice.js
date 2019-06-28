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
  }})
  },
  
    
    
  goAnalysis: function(){
    wx.navigateTo({
      url: '/pages/analysis/analysis',
    })
  },
  radiochange: function (res) {
  },
  goNext: function(){
    this.setData({
      i: this.data.i + 1
    })
    this.onLoad();
  }
})