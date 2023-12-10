let operacion = '';

const agregarCaracter = caracter => {
  const pantalla = document.getElementById('resultado');
  pantalla.value += caracter;
}

const agregarOperacion = op => {
  const pantalla = document.getElementById('resultado');
  if (pantalla.value !== '') {
    operacion = `${pantalla.value} ${op} `;
    pantalla.value = '';
  }
}

const agregarDecimal = () => {
  const pantalla = document.getElementById('resultado');
  if (pantalla.value.indexOf('.') === -1) {
    pantalla.value += '.';
  }
}

const resolver = () => {
  const pantalla = document.getElementById('resultado');
  const expresion = operacion + pantalla.value;
  const resultado = eval(expresion);
  pantalla.value = resultado;
  operacion = '';
}

const limpiar = () => {
  const pantalla = document.getElementById('resultado');
  pantalla.value = '';
  operacion = '';
}

document.addEventListener('DOMContentLoaded', () => {
  const botones = document.querySelectorAll('.botones button');

  botones.forEach(boton => {
    boton.addEventListener('click', () => {
      const valor = boton.textContent;

      if (!isNaN(valor) || valor === '.') {
        agregarCaracter(valor);
      } else if (valor === '/' || valor === '*' || valor === '+' || valor === '-') {
        agregarOperacion(valor);
      } else if (valor === '=') {
        resolver();
      } else if (valor === 'C') {
        limpiar();
      }
    });
  });

  document.addEventListener('keydown', event => {
    const tecla = event.key;

    if (!isNaN(tecla) || tecla === '.' || tecla === '/' || tecla === '*' || tecla === '+' || tecla === '-') {
      if (tecla === '/') {
        agregarOperacion('/');
      } else if (tecla === '*') {
        agregarOperacion('*');
      } else {
        agregarCaracter(tecla);
      }
    } else if (tecla === 'Enter' || tecla === '=') {
      resolver();
    } else if (tecla === 'Escape' || tecla === 'C') {
      limpiar();
    }
  });
});
