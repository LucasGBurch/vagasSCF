let data = require('./fakeData');
const { addAccess } = require('./teste5');

const getUser = (req, res, next) => {
  // SOLUÇÃO ANTERIOR (ATENÇÃO: o getUser só funciona quando há mais de um objeto no array fakeData; ainda assim, só buscava o primeiro objeto com id 1)
  // var name = req.query.name;

  // for(let i = 0; i < data.length;  i++) {
  //     if(i.name == name) {
  //         res.send(data[i]);
  //     }
  // }
  
  // SOLUÇÃO NOVA: usei .findIndex() com params.id antes, mas simplifiquei a partir do teste5 para ficar enxuto.
  let id = +req.params.id; // + para string -> number
  
  // Complemento teste5:
  data[id - 1].access += 1;

  res.send(data[id - 1]);
};

const getUsers = (req, res, next) => {
  res.send(data);
};

module.exports = {
  getUser,
  getUsers,
};
