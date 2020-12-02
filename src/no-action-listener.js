/**
 * 无动作监听器
 */
class NoActionListener {
  /**
   * 构造函数
   * @param {Number} delayTime - 超时时长，单位秒。
   * @param {Function} timeoutHandler - 超时后处理函数
   */
  constructor(delayTime, timeoutHandler) {
    this.delayTime = delayTime; // 单位秒
    this.timeoutHandler = timeoutHandler;
    this.timer = undefined;
  }
  /**
   * 开始监听
   */
  listen() {
    window.addEventListener("click", this.resetTime);
    window.addEventListener("keydown", this.resetTime);
    window.addEventListener("mousemove", this.resetTime);
    window.addEventListener("mousewheel", this.resetTime);
  }
  /**
   * 清理监听
   */
  clearListen() {
    clearTimeout(this.timer);
    window.removeEventListener("click", this.resetTime);
    window.removeEventListener("keydown", this.resetTime);
    window.removeEventListener("mousemove", this.resetTime);
    window.removeEventListener("mousewheel", this.resetTime);
  }
  resetTime() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.timeoutHandler();
      this.clearListen();
      this.timer = undefined;
    }, this.delayTime * 1000);
  }
}
export default NoActionListener;
