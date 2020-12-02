/**
 * 事件总线
 */
class EventBus {
  /**
   * 构造函数
   */
  constructor() {
    this.events = {};
  }
  /**
   * 发射
   * @param {String} eventName - 事件名称
   * @param {Any} payload - 事件载荷
   */
  emit(eventName, payload) {
    if (!this.events[eventName])
      return console.warn(
        `${eventName}事件触发了，但是没有监听者，什么都不会发生。`
      );
    for (let func of this.events[eventName].values()) {
      func(payload);
    }
  }
  /**
   * 监听
   * @param {String} eventName - 事件名称
   * @param {Function} handler - 回调处理程序
   */
  on(eventName, handler) {
    if (typeof handler === "function") {
      if (!this.events[eventName]) this.events[eventName] = new Set();
      this.events[eventName].add(handler);
    }
  }
  /**
   * 取消一个监听程序
   * @param {String} eventName - 事件名称
   * @param {Function} handler - 回调处理程序
   */
  off(eventName, handler) {
    if (!handler) return console.warn(`取消监听必须传入已被监听的事件处理函数`);
    this.events[eventName].delete(handler);
  }
  /**
   * 清理事件总线
   */
  clear() {
    this.events = {};
  }
  /**
   * 获取事件清单
   */
  getEvents() {
    return this.events;
  }
}
export default EventBus;
