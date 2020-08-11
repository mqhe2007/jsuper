import { version } from "../package.json";
/**
 *  查看当前版本号
 */
function v() {
  console.log(version);
}
/**
 * 获取当前运行的平台
 */
function platform() {
  var ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf("micromessenger") !== -1) return "wechat";
  if (ua.indexOf("iphone") !== -1 || ua.indexOf("ipad") !== -1) return "ios";
  if (ua.indexOf("android") !== -1) return "android";
  return "desktop";
}
/**
 * 监听程序无用户操作
 */
class DoNotMove {
  constructor(delayTime, timeoutHandler) {
    this.delayTime = delayTime; // 单位秒
    this.timeoutHandler = timeoutHandler;
    this.timer = undefined;
  }
  listen() {
    window.addEventListener("click", this.resetTime);
    window.addEventListener("keydown", this.resetTime);
    window.addEventListener("mousemove", this.resetTime);
    window.addEventListener("mousewheel", this.resetTime);
  }
  resetTime() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.timeoutHandler();
      this.clearListen();
      this.timer = undefined;
    }, this.delayTime * 1000);
  }
  clearListen() {
    clearTimeout(this.timer);
    window.removeEventListener("click", this.resetTime);
    window.removeEventListener("keydown", this.resetTime);
    window.removeEventListener("mousemove", this.resetTime);
    window.removeEventListener("mousewheel", this.resetTime);
  }
}
/**
 * 生成全局UUID
 */
function UUID() {
  let d = new Date().getTime();
  if (window.performance && typeof window.performance.now === "function") {
    d += performance.now();
  }
  let template = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxx";
  let uuid = template.replace(/[xy]/g, function (c) {
    let r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
}
/**
 * 从树结构中找到目标节点
 * @param {array} kv 需要匹配的键值对
 * @param {array} treeData 树结构数据
 */
function findNodeFromTree(kv, treeData) {
  for (let i = 0; i < treeData.length; i++) {
    const node = treeData[i];
    if (node[kv[0]] === kv[1]) {
      return node;
    } else {
      if (node.children && node.children.length > 0) {
        const result = findItemFromTreeData(kv, node.children);
        if (result) return result;
      }
    }
  }
}
/**
 * 扁平化结构数据转换成树结构
 * @param {array} flatArray 扁平结构的数组
 * @param {object} param1 用于指定id，pid属性的对象
 */
function flatToTree(flatArray, { id, pid }) {
  let result = [];
  const buildParent = function (item) {
    const parentIndex = flatArray.findIndex((item_) => item_[id] === item[pid]);
    if (parentIndex > -1) {
      const parent = flatArray.splice(parentIndex, 1)[0];
      parent.children = [];
      parent.children.push(item);
      if (!parent[pid]) {
        return parent;
      } else {
        return buildParent(parent);
      }
    } else {
      return item;
    }
  };
  flatArray.forEach((item) => {
    if (!item[pid]) {
      result.push(item);
    } else {
      result.push(buildParent(item));
    }
  });
  return result;
}
/**
 * 一个简单的事件总线
 */
class EventBus {
  constructor() {
    this.events = {};
  }
  /**
   * 发射事件
   * @param {string} eventName 事件名称
   * @param {any} payload 事件载荷
   */
  emit(eventName, payload) {
    if (!events[eventName])
      return console.warn(
        `${eventName}事件触发了，但是没有监听者，什么都不会发生。`
      );
    for (let func of events[eventName].values()) {
      func(payload);
    }
  }
  /** 事件监听 */
  on(eventName, handler) {
    if (typeof handler === "function") {
      if (!events[eventName]) events[eventName] = new Set();
      events[eventName].add(handler);
    }
  }
  /** 取消事件监听 */
  off(eventName, handler) {
    if (!handler) return console.warn(`取消监听必须传入已被监听的事件处理函数`);
    events[eventName].delete(handler);
  }
  /** 清理事件总线 */
  clear() {
    events = {};
  }
  /** 获取当前事件总线详情 */
  getEvents() {
    return events;
  }
}
export { v, platform, DoNotMove, UUID, findNodeFromTree, flatToTree, EventBus };
