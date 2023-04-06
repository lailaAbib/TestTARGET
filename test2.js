let num = Number(prompt("Digite um número:"));

fibonacci(parseInt(num));

function fibonacci(num) {
    let fibonacciSeq = [0, 1];
    let i = 1;
  
    while (fibonacciSeq[i] < num) {
      i++;
      fibonacciSeq[i] = fibonacciSeq[i-1] + fibonacciSeq[i-2];
    }
  
    if (fibonacciSeq[i] === num) {
      console.log(`${num} pertence à sequência de Fibonacci!`);
    } else {
      console.log(`${num} não pertence à sequência de Fibonacci.`);
    }
} 