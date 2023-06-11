let data = require('./fakeData');

const accessCounter = 0;

const addAccess = (next) => {
  accessCounter += 1;
  next();
};

const accessCount = (req, res) => {
  let id = +req.params.id;
  const position = data.findIndex((user) => user.id === id);

  let name = data[position].name;

  res.send(`Usuário ${name} foi lido ${accessCounter} vezes.`);
};

module.exports = {
  addAccess,
  accessCount,
};
