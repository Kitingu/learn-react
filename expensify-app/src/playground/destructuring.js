const person = {
  name: "ben",
  age: 26,
  location: {
    city: "nairobi",
    country: "Kenya",
    temp: 92
  }
};
const { age, name = "anonymous" } = person;
// set default if object being destrucured does not contain the variable
const { city, temp: temperature } = person.location;
// temp:temperature  --> rename destructured variable
console.log(`${age} ${name} ${temperature}`);
