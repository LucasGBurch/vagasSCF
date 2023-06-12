let data = require('./fakeData');

const deleteUser = (req, res) => {
  // SOLUÇÃO ANTERIOR (aqui estava deletando todo o array):
  //   var name = req.query.name;
  //   for (let i = 0; i < data.length; i++) {
  //     if (i.name == name) {
  //       data[i] = null;
  //     }
  //   }

  // Solução nova: buscando pela posição e deletando do array
  let id = +req.params.id;
  delete data[id - 1];

  res.send(`Usuário de id ${id} deletado da base.`);
};

module.exports = {
  deleteUser,
};
