import Promise from "promise-polyfill";

declare let __VERSION__: string;

export default class MyLib {
  version: string | undefined;

  constructor() {
    this.version = __VERSION__;
  }

  delay(timeout: number): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  }

  async waiter(): Promise<void> {
    await this.delay(100);
    console.log("Hello World");
  }
}
