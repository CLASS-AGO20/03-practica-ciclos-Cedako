export default class App {
    factorial (numero) {
        let factorial=1;
        for (let i=1; i<=numero; i++) {
            factorial = factorial * i;
        }
        return factorial;
    }

    convertirAString (numero) {
        let i=1;
        let string = ""
        while (i<=numero) {
            string+="*";
            i++;
        }
        return string;
    }

    obtenerDivisibles (numero) {
        let i = 1;
        let divisbles = 0;
        do{
            if (numero%i===0) {
                divisbles++
            }
            i++
        }
        while (i<=numero);
        return divisbles;
    }

    elevar(numero, potencia) {
        let t=numero;
        for (let i=1; i<=potencia; i++) {
        }
        return numero**potencia;
    }
    
}

let app = new App();

console.log(app.factorial(5));
console.log(app.convertirAString(1000));
console.log(app.obtenerDivisibles(4));
console.log(app.elevar(2,2))