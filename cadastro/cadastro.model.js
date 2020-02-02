const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

const cadastroSchema = new Schema({
    pid: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    eid: {
      type: String,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    level: {
        type: String,
        required: true,
        trim: true
    },
    projeto: {
        type: String,
        required: true,
        trim: true
    },
    gerente: {
        type: String,
        required: true,
        trim: true
    },
    alocacao: {
        type: String,
        required: true,
        trim: true
    },
    tecnologia: {
        type: String,
        required: true,
        trim: true
    },
    roll_on: {
        type: String,
        required: true,
        trim: true
    },
    roll_off: {
        type: String,
        required: true,
        trim: true
    },
    observacoes: {
        type: String,
        required: true,
        trim: true
    },
      
  }, {
      timestamps: true
    });
  
  module.exports = cadastroSchema;