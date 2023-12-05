/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */

// function printName ("Allujain");
// console.log(printName)

function printName() {
  console.log("Allujain");
}
printName();

/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */
function printAge(bYear) {
  console.log(2023 - bYear);
}
printAge(1999);

/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */
function printHello(name, language) {
  if (language == "en") {
    console.log(`Hello ${name}`);
  } else if (language == "es") {
    console.log(`Hola${name}`);
  } else if (language == "fr") {
    console.log(`Bonjour${name}`);
  } else if (language == "tr") {
    console.log(`Merhaba` & { name });
  }
}
printHello("Allujain", "fr");
/**node
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */

function printMax(N1, N2) {
  if (N1 > N2) {
    return N1;
  } else {
    return N2;
  }
}
console.log(`${printMax(10, 30)}`);
