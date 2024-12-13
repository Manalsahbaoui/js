const readline = require('readline'); 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
class Calculat {

  add(a, b) {return a + b;}
  subtract(a, b) {
    return a - b;
  }
  multiply(a, b) {
    return a * b;
  }
  divide(a, b) {
    if (b == 0) {
      return 'Erreur : Division par zéro interdite.';
    }
    return a / b;
  }
  power(a, b) {
    return Math.pow(a, b);
  }
  sqrt(a) {
    if (a < 0) {
      return 'Erreur ';
    }
    return Math.sqrt(a);
  }
}