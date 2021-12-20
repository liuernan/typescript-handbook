#!/usr/bin/env ts-node

{
  // basic
  function add(n1: number, n2: number): string {
    return (n1 + n2).toString();
  }

  console.log(`${typeof add(1, 2)}  ${add(1, 2)}`);

  // overloads
  function add2(n1: number, n2: number): number;
  function add2(n1: string, n2: string): string;
  function add2(n1: any, n2: any) {
    return n1 + n2;
  }

  console.log(`${typeof add2(1, 2)}  ${add2(1, 2)}`);
  console.log(`${typeof add2('1', '2')}  ${add2('1', '2')}`);
  // add2(1, '2') // error
}
