const mongoose = require('mongoose');
const cadastroSchema = require('./cadastro.model');

cadastroSchema.statics = {
    create: function (data, cb) {
        const user = new this(data);
        user.save(cb);
    }
}

const cadastroModel = mongoose.model('Cadastro', cadastroSchema);
module.exports = cadastroModel;