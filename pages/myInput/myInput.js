// pages/myInput/myInput.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 0,
    msg: "Hello",
    type: 3,
    invisible: false,
    arr1: ["apple", "banana", "bee"],
    userList: [
      {id: 1, name: 'foo'},
      {id: 2, name: 'bar'}
    ]
  },

  // 定义按钮
  btnTapHandler(e) {
    console.log(e);
  },
  changeCount() {
    this.setData({
      count: this.data.count + 1,
    })
  },
  btnHandler(e) {
    console.log(e.target.dataset.info); // what the
  },

  // 定义input
  inputHandler(e) {
    // get value in the current input box
    console.log(e.detail.value);
    this.setData({
      msg: e.detail.value
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})