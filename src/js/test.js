export class Test {
  constructor(name) {
    this.say(name);
  }

  say(name) {
    console.log(`Test! ${name}`);
  }
}

export default new Test('hoge2');


