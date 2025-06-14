import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import * as dotenv from 'dotenv';
import productsRoutes from './routes/productsRoutes'

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/products', productsRoutes);

mongoose.connect(process.env.MONGO_URI!)
    .then(async () => {
        console.log('MongoDB conectado');
        app.listen(process.env.PORT, () =>
            console.log(`Servidor rodando na porta ${process.env.PORT}`)
        );
    })
    .catch(err => console.error('Erro ao conectar no MongoDB', err));
