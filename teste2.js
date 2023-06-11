var data = require('./fakeData');

const postUser = (req, res) => {
  // dava pra criar uma chave um uuid, mas creio que não é esse o propósito do exercício:
  let id = req.body.id;

  let name = req.body.name;
  let job = req.body.job;

  let newUser = {
    id: id,
    name: name,
    job: job,
  };

  data.push(newUser);

  res.send(newUser);
};

module.exports = {
  postUser,
};
