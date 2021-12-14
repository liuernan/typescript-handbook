#!/usr/bin/env ts-node

import { argv } from "process";

{
  const add = (a: number, b: number): number => {
    console.log(a + b);
    return a + b;
  };

  const a = Number(argv[2]);
  const b = Number(argv[3]);

  if (isNaN(a) || isNaN(b)) {
    console.error("error: only number can be send");
    process.exit(1);
  }

  add(a, b);
  process.exit(0);
}
