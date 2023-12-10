const parrafosDocumento = document.querySelectorAll('p');
    parrafosDocumento.forEach(parrafo => {
      parrafo.addEventListener('click', () => {
        console.log('Se presionó un párrafo del documento.');
      });
    });

    const parrafosTabla = document.querySelectorAll('table:nth-of-type(2) p');
    parrafosTabla.forEach(parrafo => {
      parrafo.addEventListener('click', () => {
        console.log('Se presionó un párrafo contenido en la segunda tabla.');
      });
    });