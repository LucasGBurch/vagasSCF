let data = require('./fakeData');

const updateUser = (req, res) => {
  let id = +req.params.id;

  let name = req.body.name;
  let job = req.body.job;
  let access = data[id - 1].access;

  let updatedUser = {
    id: id,
    name: name,
    job: job,
    access: access,
  }
  
  data[id - 1] = updatedUser;

  res.send(`Usuário de id ${id} atualizado na base.`);
};

module.exports = {
  updateUser,
};
