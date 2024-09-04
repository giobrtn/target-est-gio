function countLetterA(input: string): string {
  
    let count: number = 0;
  
    
    for (let char of input) {
        
        if (char === 'a' || char === 'A') {
            count++;
        }
    }
  
    
    if (count > 0) {
        return `A letra 'a' aparece ${count} vezes na string.`;
    } else {
        return `A letra 'a' não foi encontrada na string.`;
    }
  }
  
  
  const inputString: string = "Estou fazendo o teste da target ribeirao preto para estagio";
  console.log(countLetterA(inputString)); // Saída: A letra 'a' aparece 7 vezes na string.