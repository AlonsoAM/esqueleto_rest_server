const express = require("express");
const cors = require("cors");
const app = express();

class Server {
  constructor() {
    this.app = app;
    this.port = process.env.PORT;
    this.usuariosPath = "/api/usuarios";

    // Middlewares
    this.middlewares();

    // Rutas del app
    this.routes();
  }

  middlewares() {
    // CORS
    this.app.use(cors());
    // Directorio publico
    this.app.use(express.static("public"));
    // Parseo y lectura del bodu en formato JSON
    this.app.use(express.json());
  }

  // Manejar las rutas
  routes() {
    this.app.use(this.usuariosPath, require("../routes/user.routes"));
  }

  // Escuchar el server
  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en puerto: " + this.port);
    });
  }
}

module.exports = Server;
