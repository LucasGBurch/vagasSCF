var data = require('./fakeData');

const updateUser = (req, res) => {
  let id = +req.params.id;

  let name = req.body.name;
  let job = req.body.job;

  let updatedUser = {
    id: id,
    name: name,
    job: job,
  }
  
  const position = data.findIndex((user) => user.id === id);
  data[position] = updatedUser;

  res.send(`Usuário de id ${id} atualizado na base.`);
};

module.exports = {
  updateUser,
};
