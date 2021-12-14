#!/usr/bin/env ts-node

import { argv } from "process";

{
  const add = (a: number, b: number): number => {
    console.log(a + b);
    return a + b;
  };

  add(Number(argv[2]), Number(argv[3]));
}
