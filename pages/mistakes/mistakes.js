// pages/mistakes/mistakes.js
Page({
  clearAllMis: function(){
    wx.navigateBack({
    })
    wx.showModal({
      title: '提示',
      content: '错题本已清空',
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