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
const calc = new Calculat();
function calculator() {
  console.log("\n°°°°°°Calculatrice°°°°°°");
  console.log("1: Addition (+)");
  console.log("2: Soustraction (-)");
  console.log("3: Multiplication (*)");
  console.log("4: Division (/)");
  console.log("5: Puissance (^)");
  console.log("6: Racine carrée (√)");
  console.log("7: Quitter\n");
  rl.question('Choisissez une option (1-7): ', (operateur) => {
if (operateur == '7') {
 console.log('Au revoir!');
 rl.close();
 return;
 }
if (operateur === '6') {  
 rl.question('Entrez un nombre pour la racine carrée: ', (num) => {
 const a = parseFloat(num);
 const result = calc.sqrt(a);
 console.log(`Résultat : ${result}`);
calculator(); 
});
} else { 
 rl.question('Entrez le premier nombre: ', (num1) => {
 rl.question('Entrez le deuxième nombre: ', (num2) => {
 const a = parseFloat(num1);
 const b = parseFloat(num2);
 let result;
          switch (operateur) {
            case '1':
              result = calc.add(a, b);
              console.log(`Résultat : ${result}`);
              break;

            case '2': 
              result = calc.subtract(a, b);
              console.log(`Résultat : ${result}`);
              break;

            case '3': 
              result = calc.multiply(a, b);
              console.log(`Résultat : ${result}`);
              break;

            case '4': 
              result = calc.divide(a, b);
              console.log(`Résultat : ${result}`);
              break;

            case '5': 
              result = calc.power(a, b);
              console.log(`Résultat : ${result}`);
              break;

            default:
              console.log("Opérateur invalide !");
          }
          calculator();
        });
      });
    }
  });
}
calculator();