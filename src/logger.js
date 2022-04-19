export default class Logger {
  constructor(title, isDebug) {
    this.title = title;
    this.isDebug = isDebug;
  }

  debug(text) {
    if (this.isDebug) console.log(`[${this.title}]: ${text}`);
  }
}
