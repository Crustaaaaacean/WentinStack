// pages/practice/practice.js
Page({
  data: {
    items: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' }
    ]
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  goAnalysis: function(){
    wx.navigateTo({
      url: '/pages/analysis/analysis',
    })
  }
})