#!/usr/bin/env ts-node

{
  /**
   * basic
   */
  function add(n1: number, n2: number): string {
    return (n1 + n2).toString();
  }

  console.log(`${typeof add(1, 2)}  ${add(1, 2)}`);

  /**
   * overloads
   */
  function add2(n1: number, n2: number): number;
  function add2(n1: string, n2: string): string;
  function add2(n1: any, n2: any) {
    return n1 + n2;
  }

  console.log(`${typeof add2(1, 2)}  ${add2(1, 2)}`);
  console.log(`${typeof add2('1', '2')}  ${add2('1', '2')}`);
  // add2(1, '2') // error

  /**
   * declaring this
   */
  function fn1(this: string): void {
    console.log(this);
  }

  function add3(this: string, n1: number, n2: number): void {
    console.log(this);
    console.log(n1 + n2);
  }
  // fn1(); // errror
  fn1.call('i am this');
  // add3(1, 2); // error
  add3.call('this is declared, nice!', 1, 2);
}
