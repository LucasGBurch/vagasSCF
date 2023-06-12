let data = require('./fakeData');

const accessCount = (req, res) => {
  let id = +req.params.id;
  let name = data[id - 1].name;
  let access = data[id - 1].access;

  res.send(`Usuário ${name} foi lido ${access} ${access == 1 ? 'vez.' : 'vezes.'}`);
};

module.exports = {
  accessCount,
};
