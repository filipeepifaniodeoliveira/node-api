const Cadastro = require('./cadastro.controller');

module.exports = (router) => {
    router.post('/cadastro', Cadastro.createCadastro);
}