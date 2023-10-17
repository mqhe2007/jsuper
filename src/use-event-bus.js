/**
 * 事件总线
 */
/**
 * 监听
 * @param {String} eventName - 事件名称
 * @param {Function} handler - 回调处理程序
 */
const on = (eventName, handler) => {
  if (typeof handler === "function") {
    if (!window[eventBusKey].has(eventName))
      window[eventBusKey].set(eventName, new Set());
    window[eventBusKey].get(eventName).add(handler);
  }
};
/**
 * 发射
 * @param {String} eventName - 事件名称
 * @param {Any} payload - 事件载荷
 */
const emit = (eventName, payload) => {
  if (!window[eventBusKey].has(eventName))
    return console.warn(
      `${eventName}事件触发了，但是没有监听者，什么都不会发生。`
    );
  for (let func of window[eventBusKey].get(eventName).values()) {
    func(payload);
  }
};
/**
 * 取消一个监听程序
 * @param {String} eventName - 事件名称
 * @param {Function} handler - 回调处理程序
 */
const off = (eventName, handler) => {
  if (!handler) return console.warn(`取消监听必须传入已被监听的事件处理函数`);
  if (!window[eventBusKey].has(eventName)) return;
  window[eventBusKey].get(eventName).delete(handler);
};
/**
 * 清理事件总线
 */
const clear = () => {
  window[eventBusKey].clear();
};
/**
 * 获取事件清单
 */
const getEvents = () => {
  return window[eventBusKey];
};

const useEvnetBus = () => {
  const eventBusKey = Symbol.for("___JSUPER_EVENT_BUS___");
  if (!window[eventBusKey]) {
    window[eventBusKey] = new Map();
  }
  return {
    emit,
    on,
    off,
    clear,
    getEvents,
  };
};

export default useEvnetBus;
