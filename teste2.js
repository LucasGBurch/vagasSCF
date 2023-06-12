let data = require('./fakeData');

const postUser = (req, res) => {
  // dava pra criar uma chave um uuid, mas creio que não é esse o propósito do exercício, por isso só criei a ordem:
  let lastId = +data.slice(-1)[0].id
  let id = lastId ? lastId + 1 : 1;

  let name = req.body.name;
  let job = req.body.job;

  let newUser = {
    id: id,
    name: name,
    job: job,
    access: 0,
  };

  data.push(newUser);

  res.send(newUser);
};

module.exports = {
  postUser,
};
