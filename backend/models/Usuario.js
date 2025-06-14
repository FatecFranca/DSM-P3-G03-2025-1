import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  idade: { type: Number, required: true },
  email: { type: String, required: true },
  cpf: { type: String, required: true },
  tipo: { type: String, required: true },
  password: { type: String, required: true,  },
});

const Usuario = mongoose.model('Usuario', usersSchema, 'users');

export default Usuario;
