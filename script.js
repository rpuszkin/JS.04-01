function sayHello(name = "world") {
  return `Hello ${name}`;
}
//Przykładowy output:
console.log("1. " + sayHello("Tomek"));
//funkcja wywołana bez argumentu:
console.log("2. " + sayHello());
