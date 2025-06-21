import mongoose from 'mongoose';

const fornecedorSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  cnpj: { type: String, required: false },
  cpf: { type: String, required: false },
  contato: { type: String },
  email: { type: String },
  endereco: { type: String }
});

// Validação customizada: exige CNPJ ou CPF
fornecedorSchema.pre('validate', function(next) {
  if (!this.cnpj && !this.cpf) {
    this.invalidate('cnpj', 'É obrigatório informar CNPJ ou CPF');
    this.invalidate('cpf', 'É obrigatório informar CNPJ ou CPF');
  }
  next();
});

const Fornecedor = mongoose.model('Fornecedor', fornecedorSchema, 'fornecedores');

export default Fornecedor;
