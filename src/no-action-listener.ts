/**
 * 无动作监听器
 */
class NoActionListener {
  private delayTime: number; // 超时时长，单位秒
  private timeoutHandler: Function; // 超时后处理函数
  private timer: number | undefined;

  /**
   * 构造函数
   * @param {number} delayTime - 超时时长，单位秒。
   * @param {Function} timeoutHandler - 超时后处理函数
   */
  constructor(delayTime: number, timeoutHandler: Function) {
    this.delayTime = delayTime;
    this.timeoutHandler = timeoutHandler;
    this.timer = undefined;
  }

  /**
   * 开始监听
   */
  listen(): void {
    window.addEventListener("click", this.resetTime.bind(this));
    window.addEventListener("keydown", this.resetTime.bind(this));
    window.addEventListener("mousemove", this.resetTime.bind(this));
    window.addEventListener("mousewheel", this.resetTime.bind(this));
  }

  /**
   * 清理监听
   */
  clearListen(): void {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    window.removeEventListener("click", this.resetTime.bind(this));
    window.removeEventListener("keydown", this.resetTime.bind(this));
    window.removeEventListener("mousemove", this.resetTime.bind(this));
    window.removeEventListener("mousewheel", this.resetTime.bind(this));
  }

  private resetTime(): void {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      this.timeoutHandler();
      this.clearListen();
      this.timer = undefined;
    }, this.delayTime * 1000);
  }
}

export default NoActionListener;
