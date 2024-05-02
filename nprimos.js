// Função para verificar se o numero e primo
function serPrimo(num) {
    if (num === 2) return true; 
    if (num % 2 === 0 || num <= 1) return false; 
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false; 
    }
    return true; 
}

// Função recursiva 
function primoRecursiva(N, current = 2) {
    return current > N ? [] : (serPrimo(current) ? [current].concat(primoRecursiva(N, current + 1)) : primoRecursiva(N, current + 1));
}

// Função linear 
function primoLinear(N) {
    const primos = [];
    for (let p = 2; p <= N; p++) {
        let serPrimo = true;
        for (let i = 2; i <= Math.sqrt(p); i++) {
            if (p % i === 0) {
                serPrimo = false;
                break;
            }
        }
        if (serPrimo) primos.push(p);
    }
    return primos;
}


console.log(primoRecursiva(50)); 
console.log(primoLinear(50));    