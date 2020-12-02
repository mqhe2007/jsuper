/**
 * 生成uuid
 * @module
 * @return {String} uuid字符串
 */
function uuid() {
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
export default uuid;
