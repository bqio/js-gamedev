import Logger from "./logger.js";

export default class Base {
  constructor(title = "Logger", isDebug = false) {
    this.logger = new Logger(title, isDebug);
    this.isDebug = isDebug;
  }
}
