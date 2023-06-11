var data = require('./fakeData');

const getUser = (req, res, next) => {
  // SOLUÇÃO ANTERIOR (ATENÇÃO: o getUser só funciona quando há mais de um objeto no array fakeData; ainda assim, só buscava o primeiro objeto com id 1)
  // var name = req.query.name;

  // for(let i = 0; i < data.length;  i++) {
  //     if(i.name == name) {
  //         res.send(data[i]);
  //     }
  // }

  // SOLUÇÃO NOVA: busca pelo id usando .findIndex() e params.id:
  let id = +req.params.id; // + para string -> number
  const position = data.findIndex((usuario) => usuario.id === id);
  res.send(data[position]);
};

const getUsers = (req, res, next) => {
  res.send(data);
};

module.exports = {
  getUser,
  getUsers,
};
