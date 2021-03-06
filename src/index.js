import express from 'express';
import morgan from 'morgan';
import cors from "cors";
import path from 'path';
import './database'
import personasRoutes from './routes/personas.routes';
import evaluacionesRoutes from './routes/evaluaciones.routes';
import preguntasRoutes from './routes/preguntas.routes'
import respuestasRoutes from './routes/respuestas.routes'
import resultadoRoutes from './routes/resultados.routes'
//creo una instancia de express
const app = express();


app.set('port', process.env.PORT || 4000);

app.listen(app.get("port"), ()=>{
    console.log(path.join(__dirname, '../public'))
    console.log('estoy en el puerto '+ app.get('port'))
});
// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
//agrego la carpeta public como estatica
app.use(express.static(path.join(__dirname,'../public')));

//crear ruta
app.use('/api/sistemadeevaluaciones',personasRoutes);
app.use('/api/sistemadeevaluaciones',evaluacionesRoutes);
app.use('/api/sistemadeevaluaciones',preguntasRoutes);
app.use('/api/sistemadeevaluaciones',respuestasRoutes);
app.use('/api/sistemadeevaluaciones',resultadoRoutes)