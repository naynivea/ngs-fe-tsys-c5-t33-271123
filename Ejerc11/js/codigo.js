function simularLanzamientoDados() {
    const resultados = new Array(13).fill(0);
    for (let i = 0; i < 36000; i++) {
      const dado1 = Math.floor(Math.random() * 6) + 1; 
      const dado2 = Math.floor(Math.random() * 6) + 1; 
      const suma = dado1 + dado2; 
  
      resultados[suma]++; 
    }
  
    return resultados.slice(2); 
  }
  
  const conteoSumas = simularLanzamientoDados();
  console.log("Resultados de las sumas:");
  for (let i = 2; i <= 12; i++) {
    console.log(`Suma ${i}: ${conteoSumas[i]}`);
  }
  