#!/usr/bin/env ts-node

{
  class Person {
    children: Person[] = [];
    constructor(public name: string) {}
    addChildren(child: Person): void {
      this.children.push(child);
    }
    familyTree(n: number = 0): void {
      console.log(`${"--".repeat(n)}${this.name}`);
      if (this.children.length) {
        this.children.forEach((child) => {
          child.familyTree(n + 1);
        });
      }
    }
  }

  const p1 = new Person("刘先人");
  const p2 = new Person("刘二代男");
  const p3 = new Person("刘二代女");
  const p4 = new Person("刘二男的儿");
  const p5 = new Person("刘二男的女");
  const p6 = new Person("刘二女的女");
  const p7 = new Person("刘二女的女的女");

  p1.addChildren(p2);
  p1.addChildren(p3);
  p2.addChildren(p4);
  p2.addChildren(p5);
  p3.addChildren(p6);
  p6.addChildren(p7);

  p1.familyTree();
  p3.familyTree();
}
