const ToDoModel = require("../models/ToDoModel");

module.exports.getToDo = async (req, res) => {
  const toDo = await ToDoModel.find();
  res.send(toDo);
};

module.exports.saveToDo = async (req, res) => {
  const { text, prazo } = req.body;

  ToDoModel.create({ text, prazo }).then((data) => {
    console.log("Os dados foram salvos no database...");
    console.log(data);
    res.send(data);
  });
};

module.exports.updateToDo = async (req, res) => {
  const { _id, text, completo,} = req.body;
  ToDoModel.findByIdAndUpdate(_id, { text, completo: true, },)
    .then(() => {
      res.send("Os dados foram atualizados...");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.deleteToDo = async (req, res) => {
  const { _id } = req.body;
  ToDoModel.findByIdAndDelete(_id)
    .then(() => {
      res.send("Os dados foram deletados...");
    })
    .catch((err) => {
      console.log(err);
    });
};

