const mongoose = require("mongoose");

const ToDoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  data: {
    type: Date,
    default: Date.now, // adiciona a data e hora atuais por padrão
  },
  prazo: {
    type: Date,
    required: false, // vai adicionar a data e a hora do input
  },
});

const ToDoModel = mongoose.model("ToDo", ToDoSchema);

module.exports = ToDoModel;
