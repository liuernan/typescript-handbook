#!/usr/bin/env ts-node

{
  // basic
  function add(n1: number, n2: number): string {
    return (n1 + n2).toString();
  }

  console.log(`${typeof add(1, 2)}  ${add(1, 2)}`);
}
