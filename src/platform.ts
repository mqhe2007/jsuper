/**
 * 获取当前运行平台标识
 * @module
 * @returns {string} 返回平台标识：desktop|wechat|ios|android
 */
function platform(): string {
  const ua: string = navigator.userAgent.toLowerCase();
  if (ua.indexOf("micromessenger") !== -1) return "wechat";
  if (ua.indexOf("iphone") !== -1 || ua.indexOf("ipad") !== -1) return "ios";
  if (ua.indexOf("android") !== -1) return "android";
  return "desktop";
}
export default platform;
