// in this file you can append custom step methods to 'I' object
const { faker } = require('@faker-js/faker');
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz

module.exports = function() {
  return actor({

    getUniqueName() {
      return faker.name.firstName()
    },

    getUniqueLastName() {
      return faker.name.lastName()
    },

    getUniqueAlphaNumeric(count, options) {
      return faker.random.alphaNumeric(count, options)
      //return faker.string.alphanumeric()
    },
    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

  });
}
