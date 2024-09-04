function isFibonacci(num: number): string {
    
    let a: number = 0;
    let b: number = 1;
    
    
    if (num === 0 || num === 1) {
        return `${num} pertence à sequência de Fibonacci.`;
    }

    
    let next: number = a + b;
    while (next <= num) {
        if (next === num) {
            return `${num} pertence à sequência de Fibonacci.`;
        }
        a = b;
        b = next;
        next = a + b;
    }

   
    return `${num} não pertence à sequência de Fibonacci.`;
}


const numero1: number = 13;
console.log(isFibonacci(numero1)); // Saída: 13 pertence à sequência de Fibonacci.

const numero2: number = 7;
console.log(isFibonacci(numero2)); // Saída: 7 não pertence à sequência de Fibonacci.
