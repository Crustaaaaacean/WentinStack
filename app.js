//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {}
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    question: [
      { "question": "在下列选项中,不正确的赋值语句是（ ）", "option": { "A": " ++t;", "B": "n1=(n2=(n3=0));", "C": "k=i=j; ", "D": " a=b+c=1;" } },
      { "question": "表达式: 10!=9的值是（ ）", "option": { "A": "true", "B": "非零值", "C": "0", "D": "1" } },
      { "question": "C语言提供的合法的数据类型关键字是（ ）", "option": { "A": "Double", "B": "short", "C": " integer", "D": "Char" } },
      { "question": "字符(char)型数据在微机内存中的存储形式是（ ）", "option": { "A": "反码", "B": "补码", "C": "EBCDIC码", "D": "ASCII码" } },
      { "question": "C语言程序的基本单位是（ ）", "option": { "A": "程序行", "B": "语句", "C": "函数", "D": "字符" } },
      { "question": "设 int a=12,则执行完语句a+=a-=a*a后,a的值是（ ）", "option": { "A": "552", "B": "264", "C": "144", "D": "-264" } },
      { "question": "若要求在if后一对圆括号中表示a不等于0的关系,则能正确表示这一关系的表达式为______.", "option": { "A": "a<>0", "B": "!a", "C": "a=0", "D": "a" } },
      { "question": "为表示关系x≥y≥z,应使用C语言表达式______.", "option": { "A": "(x>=y)&&(y>=z)", "B": "(x>=y)AND(y>=z)", "C": "(x>=y>=z)", "D": "(x>=y) & (y>=z)" } }]
  }
})