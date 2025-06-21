import mongoose from 'mongoose';

const clienteSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  cpf: { type: String, required: false },
  cnpj: { type: String, required: false },
  email: { type: String },
  telefone: { type: String },
  endereco: { type: String },
  ativo: { type: Boolean, default: true }
});

// Validação customizada: exige CPF ou CNPJ
clienteSchema.pre('validate', function(next) {
  if (!this.cpf && !this.cnpj) {
    this.invalidate('cpf', 'É obrigatório informar CPF ou CNPJ');
    this.invalidate('cnpj', 'É obrigatório informar CPF ou CNPJ');
  }
  next();
});

const Cliente = mongoose.model('Cliente', clienteSchema, 'clientes');

export default Cliente;
