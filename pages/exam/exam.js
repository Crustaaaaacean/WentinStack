// pages/exam/exam.js
Page({
  data: {
    items: [],
    error: 0,
    correct: 0,
    i: 0,
    title: [],
    optionAs: [],
    optionBs: [],
    optionCs: [],
    optionDs: [],
    ans: [],
    analysis: [],
    index_S: 0,
    databaseQ: ['Qji_sel_eas', 'Qji_sel_nor', 'Qji_sel_har', 'Qji_fil_eas', 'Qji_fil_nor', 'Qji_fil_har', 'Qji_wri_eas', 'Qji_wri_nor', 'Qji_wri_har', 'Qma_sel_eas', 'Qma_sel_nor', 'Qma_sel_har', 'Qma_fil_eas', 'Qma_fil_nor', 'Qma_fil_har', 'Qma_wri_eas', 'Qma_wri_nor', 'Qma_wri_har', 'Qjing_sel_eas', 'Qjing_sel_nor', 'Qjing_sel_har', 'Qjing_fil_eas', 'Qjing_fil_nor', 'Qjing_fil_har', 'Qjing_wri_eas', 'Qjing_wri_nor', 'Qjing_wri_har', 'Qmao_sel_eas', 'Qmao_sel_nor', 'Qmao_sel_har', 'Qmao_fil_eas', 'Qmao_fil_nor', 'Qmao_fil_har', 'Qmao_wri_eas', 'Qmao_wri_nor', 'Qmao_wri_har']
  },
  onLoad: function (options) {
    var that = this;
    const db = wx.cloud.database();
    that.setData({
      index_S: options.indexS,
    })
    console.log('indexS', that.data.index_S)     
    
    // while(that.data.i < 9)
    // {
      var i_t = that.data.i;
      console.log('i_t', i_t)
      var afterCu = Number(9 * that.data.index_S) + Number(that.data.i);
      console.log('afterCu', afterCu)
      var db_select = that.data.databaseQ[afterCu];
      console.log('db_select', db_select)
      db.collection(db_select).limit(1000).get({
        success: function (res) {
          that.setData({
            items: res.data        //获取items如果写在get函数外面就会undefined
          })
          if (i_t < 3) {
            var title_t = "title[" + i_t + "]";
            var options_tA = "optionAs[" + i_t + "]";  //设置字符串变量
            var options_tB = "optionBs[" + i_t + "]";
            var options_tC = "optionCs[" + i_t + "]";
            var options_tD = "optionDs[" + i_t + "]";
            var ans_t = "ans[" + i_t + "]";
            var analysis_t = "analysis[" + i_t + "]";
            that.setData({
              [title_t]: that.data.items[0].title,
              [options_tA]: that.data.items[0].A,    //用中括号找字符串所代表的的变量
              [options_tB]: that.data.items[0].B,
              [options_tC]: that.data.items[0].C,
              [options_tD]: that.data.items[0].D,
              [ans_t]: that.data.items[0].answer,
              [analysis_t]: that.data.items[0].analysis
            })
          } else if (i >= 3 && i < 6) {

          } else if (i >= 6 && i < 9) {

          }
          that.setData({
            i: Number(that.data.i) + 1
          })
          this.onShow();
        }
      })
 
    // }
  }
      
})