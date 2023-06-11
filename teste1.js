var data = require('./fakeData');

const getUser = (req, res, next) => {
  // SOLUÇÃO ANTERIOR
  // var name = req.query.name;

  // for(let i = 0; i < data.length;  i++) {
  //     if(i.name == name) {
  //         res.send(data[i]);
  //     }
  // }

  // SOLUÇÃO NOVA COM FIND:
  let id = req.query.id;
  const dados = data.find((data) => data.id === id);
  res.send(dados);
};

const getUsers = (req, res, next) => {
  res.send(data);
};

module.exports = {
  getUser,
  getUsers,
};
