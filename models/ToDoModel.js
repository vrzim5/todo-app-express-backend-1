const mongoose = require("mongoose");

const ToDoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  prazo: {
    type: Date,
    required: false, // vai adicionar a data e a hora do input
  },
  completo: {
    type: Boolean,
    default: false, // vai adicionar se a tarefa foi comprida ou não
  },
  data: {
    type: Date,
    default: Date.now, // adiciona a data e hora atuais por padrão
    required: false,
  }
});

const ToDoModel = mongoose.model("ToDo", ToDoSchema);

module.exports = ToDoModel;
