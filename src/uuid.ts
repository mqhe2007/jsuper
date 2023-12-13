/**
 * 生成uuid
 * @module
 * @return {string} uuid字符串
 */
function uuid(): string {
  let d: number = new Date().getTime();
  if (window.performance && typeof window.performance.now === "function") {
    d += performance.now();
  }
  let template: string = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxx";
  let uuid: string = template.replace(/[xy]/g, function (c: string) {
    let r: number = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
}
export default uuid;
