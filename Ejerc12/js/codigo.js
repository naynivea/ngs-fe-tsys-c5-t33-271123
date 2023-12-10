const regexFecha = /\b\d{2}\/\d{2}\/\d{4}\b/;
const texto = "Nací el 05/04/1982 en Donostia.";
const resultadoFecha = regexFecha.test(texto);
console.log(resultadoFecha); 

const regexEmail = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,3}$/;
const email = "ejemplo@email.com";
const resultadoEmail = regexEmail.test(email);
console.log(resultadoEmail); 

function escapeHTML(text) {
    const replacements = [
      ["&", "&amp;"],
      ["\"", "&quot;"],
      ["<", "&lt;"],
      [">", "&gt;"]
    ];
  
    replacements.forEach(replace => {
      const regex = new RegExp(replace[0], 'g');
      text = text.replace(regex, replace[1]);
    });
  
    return text;
  }

const nombreApellido = "John Smith";
const regexNombreApellido = /(\w+)\s(\w+)/;
const resultadoInvertido = nombreApellido.replace(regexNombreApellido, "$2, $1");
console.log(resultadoInvertido); 

const htmlConScript = "<p>Texto seguro</p><script>alert('Hola');</script><p>Otro texto</p>";
const regexEliminarScript = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
const htmlSeguro = htmlConScript.replace(regexEliminarScript, "");
console.log(htmlSeguro); 


