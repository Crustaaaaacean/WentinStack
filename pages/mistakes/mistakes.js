// pages/mistakes/mistakes.js
Page({
  data:{
    items: [],
    items_length: null
  },
  onLoad: function(){
    var that = this;
    const db = wx.cloud.database();
    db.collection('mistakes').limit(1000).get({
      success: function(res){
        that.setData({
          items: res.data,
          items_length: res.data.length
        })
      }
    })
  },
  goAnalysis: function(options){
    var that = this;
    var selectPage = options.currentTarget.id;//获取题目索引
    if(that.data.items[selectPage].type == 0){
      wx.navigateTo({
        url: '/pages/analysis/analysis?answer=' + that.data.items[selectPage].answer + '&analysis=' + that.data.items[selectPage].analysis + '&title=' + that.data.items[selectPage].title + '&A=' + that.data.items[selectPage].A + '&B=' + that.data.items[selectPage].B + '&C=' + that.data.items[selectPage].C + '&D=' + that.data.items[selectPage].D + '&type=' + 1 + '&id=' + that.data.items[selectPage].id,
      })
    } else if (that.data.items[selectPage].type == 1) {
      wx.navigateTo({
        url: '/pages/analysis1/analysis1?answer=' + that.data.items[selectPage].answer + '&analysis=' + that.data.items[selectPage].analysis + '&title=' + that.data.items[selectPage].title + '&type=' + 1 + '&id=' + that.data.items[selectPage].id,
      })
    } else {
      wx.navigateTo({
        url: '/pages/analysis2/analysis2?analysis=' + that.data.items[selectPage].analysis + '&title=' + that.data.items[selectPage].title + '&type=' + 1 + '&id=' + that.data.items[selectPage].id,
      })
    }
  },
  removeQuestion: function(options){
    const db = wx.cloud.database();
    var select = options.currentTarget.id;
    var id_r = this.data.items[select]._id;
    console.log(id_r)
    db.collection('mistakes').doc(id_r).remove();
    this.onLoad();
  }
})