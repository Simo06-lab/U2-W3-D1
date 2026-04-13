class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  compareAge = function (otherUser) {
    if (this.age > otherUser.age) {
      return this.firstName + " è più grande di " + otherUser.firstName;
    } else if (this.age < otherUser.age) {
      return this.firstName + " è più giovane di " + otherUser.firstName;
    } else {
      return this.firstName + " e " + otherUser.firstName + " hanno stessa età";
    }
  };
}

const firstUser = new User("Mario", "Rossi", 35, "Roma");
const secondUser = new User("Luigi", "Bianchi", 35, "Milano");

console.log(firstUser.compareAge(secondUser));
console.log(secondUser.compareAge(firstUser));
