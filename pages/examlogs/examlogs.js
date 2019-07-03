// pages/examlogs/examlogs.js
Page({
  clearAllElogs:function(){
    wx.navigateBack({
    })
    wx.showModal({
      title: '提示',
      content: '记录已清空',
      success: function (res) {
        if (res.confirm) {
          console.log('successClear')
        } else {
          console.log('failedClear')
        }
      }
    })
  }
})