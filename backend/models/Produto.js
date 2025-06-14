import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  codigo: { type: Number, required: true },
  nome: { type: String, required: true },
  variacoes: String,
  ipi: String,
  estoque: Number,
  comissao: String,
  precoTabela: String,
  preco2024: String,
  precoAtacado: String,
  precoDesconto: String,
  precoEcommerce: String
});

const Produto = mongoose.model('Produto', productSchema, 'products');

export default Produto;
