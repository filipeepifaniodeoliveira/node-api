const Cadastro = require('./cadastro.dao');

exports.createCadastro = (req, res, next) => {
    console.log('VAGALUME');
    const newCadastro = {
        pid: req.body.pid,
        eid: req.body.eid,
        name: req.body.name,
        level: req.body.level,
        projeto: req.body.projeto,
        gerente: req.body.gerente,
        alocacao: req.body.alocacao,
        tecnologia: req.body.tecnologia,
        roll_on: req.body.roll_on,
        roll_off: req.body.roll_off,
        observacoes: req.body.observacoes
    }

    Cadastro.create(newCadastro, (err, data) => {
        if (err && err.code === 11000) {
            return res.status(409).send('Email already exists');
        }
        if (err) {
            return res.status(500).send('Server error');
        }
        const postCadastro = {
            pid: data.pid,
            eid: data.eid,
            name: data.name
        }
        console.log(postCadastro, 'cad');

        // response 
        res.send({ postCadastro });
    });
}