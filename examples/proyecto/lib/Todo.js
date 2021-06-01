//CLASE QUE VA A CONTENEDOR LOS MÉTODOS PARA PODER CONSULTAR
// INFORMACIÓN DE LOS TODO

import performer from "./request.js";

export class Todo {
  //retoma una promesa con todos los Todo
  //que se extraen del servicio web (API)
  static async all() {
    let todos = await performer({
      type: "listAll",
    });
    //console.log(todos);
    return todos.map((todoJSON) => new Todo(todoJSON));
  }

  constructor(args) {
    this.userId = args.userId;
    this.title = args.title;
    this.completed = args.completed;
    this.id = args.id;
  }

  save = async () => {
    //No exista cambia de contexto por eso usamos flecha
    if (this.id) return this.update;

    this.create();
  };

  create = async () => {
    let response = await performer({
        type: "create",
        payload: {
          title: this.title,
        },
      }).then(data => this.id = data.id);
      return response;
  };

  update = async () => {
    let response = await performer({
      type: "update",
      payload: {
        id: this.id,
        title: this.title,
      },
    });
    return response;
  };

  destroy = async () => {
    let response = await performer({
      type: "destroy",
      payload: {
        id: this.id,
      },
    });
    return response;
  };
}
