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
    ans_tester: [],
    analysis: [],
    index_S: 0,
    checked: true,
    databaseQ: ['Qji_sel_eas', 'Qji_sel_nor', 'Qji_sel_har', 'Qji_fil_eas', 'Qji_fil_nor', 'Qji_fil_har', 'Qji_wri_eas', 'Qji_wri_nor', 'Qji_wri_har', 'Qma_sel_eas', 'Qma_sel_nor', 'Qma_sel_har', 'Qma_fil_eas', 'Qma_fil_nor', 'Qma_fil_har', 'Qma_wri_eas', 'Qma_wri_nor', 'Qma_wri_har', 'Qjing_sel_eas', 'Qjing_sel_nor', 'Qjing_sel_har', 'Qjing_fil_eas', 'Qjing_fil_nor', 'Qjing_fil_har', 'Qjing_wri_eas', 'Qjing_wri_nor', 'Qjing_wri_har', 'Qmao_sel_eas', 'Qmao_sel_nor', 'Qmao_sel_har', 'Qmao_fil_eas', 'Qmao_fil_nor', 'Qmao_fil_har', 'Qmao_wri_eas', 'Qmao_wri_nor', 'Qmao_wri_har']
  },
  onLoad: function (options) {
    var that = this;


    const db = wx.cloud.database();
    that.setData({
      index_S: options.indexS,
    })
    // console.log('indexS', that.data.index_S)     
    // var i_t = that.data.i;
    var afterCu = Number(9 * that.data.index_S) + 0;
    // console.log('afterCu', afterCu)
    var db_select = that.data.databaseQ[afterCu];
    db.collection(db_select).limit(1000).get({
    success: function (res) {
      // console.log('i_t', i_t)
      that.setData({
        items: res.data        //获取items如果写在get函数外面就会undefined
      })
        var title_t = "title[" + 0 + "]";
        var options_tA = "optionAs[" + 0 + "]";  //设置字符串变量
        var options_tB = "optionBs[" + 0 + "]";
        var options_tC = "optionCs[" + 0 + "]";
        var options_tD = "optionDs[" + 0 + "]";
        var ans_t = "ans[" + 0 + "]";
        var analysis_t = "analysis[" + 0 + "]";
        that.setData({
          [title_t]: that.data.items[0].title,
          [options_tA]: that.data.items[0].A,    //用中括号找字符串所代表的的变量
          [options_tB]: that.data.items[0].B,
          [options_tC]: that.data.items[0].C,
          [options_tD]: that.data.items[0].D,
          [ans_t]: that.data.items[0].answer,
          [analysis_t]: that.data.items[0].analysis
        })
      }
    })

    const db1 = wx.cloud.database();
    that.setData({
      index_S: options.indexS,
    })
    // console.log('indexS', that.data.index_S)
    // var i_t = that.data.i;
    var afterCu = Number(9 * that.data.index_S) + 1;
    // console.log('afterCu', afterCu)
    var db1_select = that.data.databaseQ[afterCu];
    db1.collection(db1_select).limit(1000).get({
      success: function (res) {
        // console.log('i_t', i_t)
        that.setData({
          items: res.data        //获取items如果写在get函数外面就会undefined
        })
        var title_t = "title[" + 1 + "]";
        var options_tA = "optionAs[" + 1 + "]";  //设置字符串变量
        var options_tB = "optionBs[" + 1 + "]";
        var options_tC = "optionCs[" + 1 + "]";
        var options_tD = "optionDs[" + 1 + "]";
        var ans_t = "ans[" + 1 + "]";
        var analysis_t = "analysis[" + 1 + "]";
        that.setData({
          [title_t]: that.data.items[0].title,
          [options_tA]: that.data.items[0].A,    //用中括号找字符串所代表的的变量
          [options_tB]: that.data.items[0].B,
          [options_tC]: that.data.items[0].C,
          [options_tD]: that.data.items[0].D,
          [ans_t]: that.data.items[0].answer,
          [analysis_t]: that.data.items[0].analysis
        })
      }
    })

    const db2 = wx.cloud.database();
    that.setData({
      index_S: options.indexS,
    })
    // console.log('indexS', that.data.index_S)
    // var i_t = that.data.i;
    var afterCu = Number(9 * that.data.index_S) + 2;
    // console.log('afterCu', afterCu)
    var db2_select = that.data.databaseQ[afterCu];
    db2.collection(db2_select).limit(1000).get({
      success: function (res) {
        // console.log('i_t', i_t)
        that.setData({
          items: res.data        //获取items如果写在get函数外面就会undefined
        })
        var title_t = "title[" + 2 + "]";
        var options_tA = "optionAs[" + 2 + "]";  //设置字符串变量
        var options_tB = "optionBs[" + 2 + "]";
        var options_tC = "optionCs[" + 2 + "]";
        var options_tD = "optionDs[" + 2 + "]";
        var ans_t = "ans[" + 2 + "]";
        var analysis_t = "analysis[" + 2 + "]";
        that.setData({
          [title_t]: that.data.items[0].title,
          [options_tA]: that.data.items[0].A,    //用中括号找字符串所代表的的变量
          [options_tB]: that.data.items[0].B,
          [options_tC]: that.data.items[0].C,
          [options_tD]: that.data.items[0].D,
          [ans_t]: that.data.items[0].answer,
          [analysis_t]: that.data.items[0].analysis
        })
      }
    })

    const db3 = wx.cloud.database();
    that.setData({
      index_S: options.indexS,
    })
    // console.log('indexS', that.data.index_S)
    // var i_t = that.data.i;
    var afterCu = Number(9 * that.data.index_S) + 3;
    // console.log('afterCu', afterCu)
    var db3_select = that.data.databaseQ[afterCu];   
    db3.collection(db3_select).limit(1000).get({
      success: function (res) {
        // console.log('i_t', i_t)
        that.setData({
          items: res.data        //获取items如果写在get函数外面就会undefined
        })
        var title_t = "title[" + 3 + "]";
        var ans_t = "ans[" + 3 + "]";
        var analysis_t = "analysis[" + 3 + "]";
        that.setData({
          [title_t]: that.data.items[0].title,
          [ans_t]: that.data.items[0].answer,
          [analysis_t]: that.data.items[0].analysis
        })
      }
    })

    const db4 = wx.cloud.database();
    that.setData({
      index_S: options.indexS,
    })
    // console.log('indexS', that.data.index_S)
    // var i_t = that.data.i;
    var afterCu = Number(9 * that.data.index_S) + 4;
    // console.log('afterCu', afterCu)
    var db4_select = that.data.databaseQ[afterCu];
    db4.collection(db4_select).limit(1000).get({
      success: function (res) {
        // console.log('i_t', i_t)
        that.setData({
          items: res.data        //获取items如果写在get函数外面就会undefined
        })
        var title_t = "title[" + 4 + "]";
        var ans_t = "ans[" + 4 + "]";
        var analysis_t = "analysis[" + 4 + "]";
        that.setData({
          [title_t]: that.data.items[0].title,
          [ans_t]: that.data.items[0].answer,
          [analysis_t]: that.data.items[0].analysis
        })
      }
    })

    const db5 = wx.cloud.database();
    that.setData({
      index_S: options.indexS,
    })
    // console.log('indexS', that.data.index_S)
    // var i_t = that.data.i;
    var afterCu = Number(9 * that.data.index_S) + 5;
    // console.log('afterCu', afterCu)
    var db5_select = that.data.databaseQ[afterCu];
    db5.collection(db5_select).limit(1000).get({
      success: function (res) {
        // console.log('i_t', i_t)
        that.setData({
          items: res.data        //获取items如果写在get函数外面就会undefined
        })
        var title_t = "title[" + 5 + "]";
        var ans_t = "ans[" + 5 + "]";
        var analysis_t = "analysis[" + 5 + "]";
        that.setData({
          [title_t]: that.data.items[0].title,
          [ans_t]: that.data.items[0].answer,
          [analysis_t]: that.data.items[0].analysis
        })
      }
    })

    const db6 = wx.cloud.database();
    that.setData({
      index_S: options.indexS,
    })
    // console.log('indexS', that.data.index_S)
    // var i_t = that.data.i;
    var afterCu = Number(9 * that.data.index_S) + 6;
    // console.log('afterCu', afterCu)
    var db6_select = that.data.databaseQ[afterCu];
    db6.collection(db6_select).limit(1000).get({
      success: function (res) {
        // console.log('i_t', i_t)
        that.setData({
          items: res.data        //获取items如果写在get函数外面就会undefined
        })
        var title_t = "title[" + 6 + "]";
        var ans_t = "ans[" + 6 + "]";
        that.setData({
          [title_t]: that.data.items[0].title,
          [ans_t]: that.data.items[0].answer,
        })
      }
    })

    const db7 = wx.cloud.database();
    that.setData({
      index_S: options.indexS,
    })
    // console.log('indexS', that.data.index_S)
    // var i_t = that.data.i;
    var afterCu = Number(9 * that.data.index_S) + 7;
    // console.log('afterCu', afterCu)
    var db7_select = that.data.databaseQ[afterCu];
    db7.collection(db7_select).limit(1000).get({
      success: function (res) {
        // console.log('i_t', i_t)
        that.setData({
          items: res.data        //获取items如果写在get函数外面就会undefined
        })
        var title_t = "title[" + 7 + "]";
        var ans_t = "ans[" + 7 + "]";
        that.setData({
          [title_t]: that.data.items[0].title,
          [ans_t]: that.data.items[0].answer,
        })
      }
    })

    const db8 = wx.cloud.database();
    that.setData({
      index_S: options.indexS,
    })
    // console.log('indexS', that.data.index_S)
    // var i_t = that.data.i;
    var afterCu = Number(9 * that.data.index_S) + 8;
    // console.log('afterCu', afterCu)
    var db8_select = that.data.databaseQ[afterCu];
    db8.collection(db8_select).limit(1000).get({
      success: function (res) {
        // console.log('i_t', i_t)
        that.setData({
          items: res.data        //获取items如果写在get函数外面就会undefined
        })
        var title_t = "title[" + 8 + "]";
        var ans_t = "ans[" + 8 + "]";
        that.setData({
          [title_t]: that.data.items[0].title,
          [ans_t]: that.data.items[0].answer,
        })
      }
    })
  },
  radioChange0: function(e){
    this.setData({
      'ans_tester[0]': e.detail.value 
    })
  },
  radioChange1: function (e) {
    this.setData({
      'ans_tester[1]': e.detail.value
    })
  } ,
  radioChange2: function (e) {
    this.setData({
      'ans_tester[2]': e.detail.value
    })
  } 
})