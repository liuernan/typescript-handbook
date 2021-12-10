{
  interface Person {
    name: string;
    age: number;
  }
  const info = (person: Person) => {
    console.log(`name: ${person.name}`);
    console.log(`age: ${person.age}`);
  };

  const user = {
    name: "Ernan",
    age: 18,
  };

  info(user);
}
