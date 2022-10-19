const express = require("express"),
  servidor = express(),
  dotenv = require("dotenv"),
  colors = require("colors");

dotenv.config();

const port = process.env.port, 
    encabezado = process.env.encabezado,
    titulo = process.env.titulo,
    nombre = process.env.nombre;

servidor.get("/", (req, res) => {
  res.send(`<h1><center>${nombre} el puerto es: ${port}</center></h1><br><br>
<center><table border="black"></center>
  <tr><center>${titulo}</center>
      <td>${encabezado}</td>
      <td>Queso</td>
      <td>Arepa</td>
      <td>Mantequilla</td>
  </tr>
  <tr>
      <td>Papa</td>
      <td>Arroz</td>
      <td>Huevos</td>
      <td>Pimienta</td>
  </tr>
</table>`);
});

servidor.listen(port, () => {
  console.log(`Estamos en el puerto ${port}`.red);
});
