{
  class Person {
    constructor(public name: string) {} // equals: this.name = name
    say(word: string): void {
      console.log(`hi there, I am ${this.name} and did u say "${word}"`);
    }
  }

  const xiaoming = new Person('xiaoming');
  xiaoming.say('你好！');
}
