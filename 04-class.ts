{
  class Name {
    fullName: string;
    constructor(public Xing: string, public Ming: string) {
      this.fullName = "" + Xing + Ming;
    }
  }

  interface Person {
    Xing: string;
    Ming: string;
    fullName: string;
  }
  const info = (person: Person) => {
    console.log(`fullName: ${person.fullName}`);
  };

  const user = new Name("Liu", "Ernan");

  info(user);
}
