{
  class Person {
    constructor(public name: string) {} // equals: this.name = name
    say(word: string): void {
      console.log(`hi there, I am ${this.name} and did u say "${word}"`);
    }
  }

  const xiaoming = new Person('xiaoming');
  xiaoming.say('你好！');

  // class extends
  // public(default) private protected
  enum SpecieTypes {
    animal = 'animal',
    human = 'human',
    plant = 'plant',
  }
  class Species {
    constructor(protected type: SpecieTypes) {} // protected 后代的 class 可以访问
  }

  class Animal extends Species {
    // public 构造出来的对象有这个属性，能访问
    constructor(public name: string) {
      super(SpecieTypes.animal); // super 就是调用爸爸的 constructor，如果爸爸要参数，就传给他

      switch (name) {
        case 'pander':
          this.animalType = '陆地';
          break;
        case 'fish':
          this.animalType = '水里';
          break;
        case 'bird':
          this.animalType = '天上';
          break;

        default:
          this.animalType = '三栖动物';
          break;
      }
    }
    private animalType: string; // private 只有自己能访问
    introduce(): void {
      console.log(`hi there, I am ${this.name}`);
      console.log(`我的 specie 类型是 ${this.type}`);
      console.log(`我活在 ${this.animalType}`);
    }
  }

  const pander = new Animal('pander');
  // pander.type  // error
  // pander.animalType // error
  pander.name;
  pander.introduce();

  const shark = new Animal('shark');
  shark.introduce();
}
