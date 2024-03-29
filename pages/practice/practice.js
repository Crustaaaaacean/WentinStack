// pages/practice/practice.js
Page({
  data: {
    items: [],
    id: [],
    error: 0,
    correct: 0,
    i: 0,
    title: [],
    options: [],
    ans: [],
    analysis: [],
    index_S: 0,
    index_D: 0,
    index_T: 0,
    typeChange: ['A', 'B', 'C', 'D'],
    databaseQ: ['Qji_sel_eas', 'Qji_sel_nor', 'Qji_sel_har', 'Qji_fil_eas', 'Qji_fil_nor', 'Qji_fil_har', 'Qji_wri_eas', 'Qji_wri_nor', 'Qji_wri_har', 'Qma_sel_eas', 'Qma_sel_nor', 'Qma_sel_har', 'Qma_fil_eas', 'Qma_fil_nor', 'Qma_fil_har', 'Qma_wri_eas', 'Qma_wri_nor', 'Qma_wri_har', 'Qjing_sel_eas', 'Qjing_sel_nor', 'Qjing_sel_har', 'Qjing_fil_eas', 'Qjing_fil_nor', 'Qjing_fil_har', 'Qjing_wri_eas', 'Qjing_wri_nor', 'Qjing_wri_har', 'Qmao_sel_eas', 'Qmao_sel_nor', 'Qmao_sel_har', 'Qmao_fil_eas', 'Qmao_fil_nor', 'Qmao_fil_har', 'Qmao_wri_eas', 'Qmao_wri_nor', 'Qmao_wri_har']
  },
  onLoad: function (options) {
    var that = this;
    that.setData({
      index_S: options.indexS,
      index_D: options.indexD,
      index_T: options.indexT,
    })
    console.log(that.data.index_S)
    console.log(that.data.index_D)
    console.log(that.data.index_T)
    var afterCu = Number(9 * that.data.index_S) + Number(3 * that.data.index_T) + Number(that.data.index_D)
    console.log(afterCu)
    const db = wx.cloud.database();
    var db_select = that.data.databaseQ[afterCu];
    console.log('db_select', db_select)
    db.collection(db_select).limit(1000).get({
      success: function(res) {
        that.setData({
          items: res.data      
    })
      for (var k = 0; k < that.data.items.length; k++) {
        var id_t = "id[" + k + "]";
        var title_t = "title[" + k + "]";
        var options_t0 = "options[" + k + "][0]";  //设置字符串变量
        var options_t1 = "options[" + k + "][1]";
        var options_t2 = "options[" + k + "][2]";
        var options_t3 = "options[" + k + "][3]";
        var ans_t = "ans[" + k + "]";
        var analysis_t = "analysis[" + k + "]";
        that.setData({
          [id_t]: that.data.items[k]._id,
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
      url: '/pages/analysis/analysis?answer=' + that.data.ans[i_t] + '&analysis=' + that.data.analysis[i_t] + '&A=' + that.data.options[i_t][0] + '&B=' + that.data.options[i_t][1] + '&C=' + that.data.options[i_t][2] + '&D=' + that.data.options[i_t][3] + '&title=' + that.data.title[i_t] + '&type=' + 0 + '&id=' + that.data.id[i_t],
    })
  },
  radioChange:function(e){
    console.log('e.detail.value', e)
    if(this.data.typeChange[e.detail.value] == this.data.ans[this.data.i]){
      wx.showModal({
        title: '提示',
        content: '✅正确',
        showCancel: false
      })
    } else {
      wx.showModal({
        title: '提示',
        content: '❌错误',
        showCancel: false
      })
    }
  },
  goNext: function(){
    if(this.data.i < 4){
      this.setData({ //不用setData wxml的i不跟着变化
        i: this.data.i + 1
      })
      this.onShow(); //不能用onLoad（）
    } else {
      wx.navigateBack({
      })
      wx.showModal({
        title: '提示',
        content: '恭喜您完成练习',
        showCancel: false
      })
    }
  }
})


//radio形状 大小的问题