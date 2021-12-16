{
  // extends
  interface Beings {
    alive: boolean;
  }

  interface Animal extends Beings {
    name: string;
  }

  const dog: Animal = {
    name: 'wangkeke',
    alive: true,
  };

  // ?:  readonly
  interface Dog {
    readonly head: string;
    legs?: number;
    say(word: string): void;
  }

  const dog2: Dog = {
    head: 'naodai',
    say: (word): void => {
      console.log(word);
    },
  };

  dog2.say('gun');

  // function
  interface Fn {
    (v: string): boolean;
  }

  const fn: Fn = (v) => {
    return !!v;
  };

  fn('gun');

  // array
  interface Arr2 {
    [index: number]: number | string;
  }

  let arr2: Arr2 = [2];
  // arr['ds'] = ''
  arr2[3] = 1;
  console.log(arr2);
}
