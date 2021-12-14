#!/usr/bin/env ts-node

{
  class Person {
    children: Person[] = [];
    constructor(public name: string) {}
    addChildren(child: Person) {
      this.children.push(child);
    }
    familyTree() {
      console.log(this.name);
      if (this.children.length) {
        this.children.forEach((child) => {
          child.familyTree();
        });
      }
    }
  }

  const p1 = new Person("刘先人");
  const p2 = new Person("刘二代男");
  const p3 = new Person("刘二代女");
  const p4 = new Person("刘二男的儿");
  const p5 = new Person("刘二男的女");

  p1.addChildren(p2);
  p1.addChildren(p3);
  p2.addChildren(p4);
  p2.addChildren(p5);

  p1.familyTree();
}
