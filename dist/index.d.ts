/**
 * 获取当前运行平台标识
 * @module
 * @returns {string} 返回平台标识：desktop|wechat|ios|android
 */
declare function platform(): string;

/**
 * 无动作监听器
 */
declare class NoActionListener {
    private delayTime;
    private timeoutHandler;
    private timer;
    /**
     * 构造函数
     * @param {number} delayTime - 超时时长，单位秒。
     * @param {Function} timeoutHandler - 超时后处理函数
     */
    constructor(delayTime: number, timeoutHandler: Function);
    /**
     * 开始监听
     */
    listen(): void;
    /**
     * 清理监听
     */
    clearListen(): void;
    private resetTime;
}

/**
 * 生成uuid
 * @module
 * @return {string} uuid字符串
 */
declare function uuid(): string;

interface TreeNode$1 {
    [key: string]: any;
    children?: TreeNode$1[];
    parent?: TreeNode$1;
}
/**
 * 从树结构中找到某个节点
 * @module
 * @param {Array} kv - 需要匹配的键值对
 * @param {Array} treeData - 树结构数据
 * @param {Boolean} returnParent - 是否包含父级节点
 */
declare function findNodeFromTree(kv: [string, any], treeData: TreeNode$1[], returnParent: boolean, parentNode?: TreeNode$1): TreeNode$1 | undefined;

/**
 * 对一个树形结构做递归map操作
 * @module
 * @param {Array<any>} nodes - 树结构数组
 * @param {Function} handler - 数据处理程序。
 * @param {string} childrenKey - 子集的key
 * @param {number} depth - 递归的深度值，初始为1
 * @param {Object} parent - map后节点的父对象
 * @returns {Array<any>} - 处理后的树结构数组
 */
declare function treeMap(nodes: Array<any>, handler: Function, childrenKey?: string, depth?: number, parent?: Object): Array<any>;

/**
 * 扁平化结构数据转换成树结构
 * @module
 * @param {Object[]} flatArray - 扁平结构的数组
 * @param {String} key - 用于指定元素的key
 * @param {String} parentkey - 用于指定元素的父元素的key
 * @returns {Object[]} 由树结构组成的数组
 */
interface FlatItem {
    [key: string]: any;
}
declare function flatToTree(flatArray: FlatItem[], key: string, parentkey: string): FlatItem[];

/**
 * 事件总线
 */
declare class EventBus {
    private events;
    /**
     * 构造函数
     */
    constructor();
    /**
     * 发射
     * @param {String} eventName - 事件名称
     * @param {Any} payload - 事件载荷
     */
    emit(eventName: string, payload: any): void;
    /**
     * 监听
     * @param {String} eventName - 事件名称
     * @param {Function} handler - 回调处理程序
     */
    on(eventName: string, handler: (payload: any) => void): void;
    /**
     * 取消一个监听程序
     * @param {String} eventName - 事件名称
     * @param {Function} handler - 回调处理程序
     */
    off(eventName: string, handler: (payload: any) => void): void;
    /**
     * 清理事件总线
     */
    clear(): void;
    /**
     * 获取事件清单
     */
    getEvents(): {
        [key: string]: Set<(payload: any) => void>;
    };
}

declare const useEvnetBus: () => {
    emit: (eventName: string, payload: any) => void;
    on: (eventName: string, handler: Function) => void;
    off: (eventName: string, handler: Function) => void;
    clear: () => void;
    getEvents: () => Map<string, Set<Function>>;
};

/**
 * 获取元素在页面中的绝对位置
 * @module
 * @returns {Object} 返回距离顶和左的绝对像素值：{top:0, left: 0}
 */
declare function position(el: HTMLElement): {
    top: number;
    left: number;
};

interface TreeNode {
    children?: TreeNode[];
    [key: string]: any;
}
declare function treeFilter(nodes: TreeNode[], handler: (node: TreeNode, depth: number) => boolean, depth?: number): TreeNode[];

/**
 * 对一个树形结构做递归each操作
 * @module
 * @param {Array<any>} list - 树结构数组
 * @param {Function} handler - 数据处理程序。
 * @param {Object} parent - 父级
 */
declare function treeEach(list: Array<any>, handler: Function, parent: Object): void;

export { EventBus, NoActionListener, findNodeFromTree, flatToTree, platform, position, treeEach, treeFilter, treeMap, useEvnetBus as useEventBus, uuid };
