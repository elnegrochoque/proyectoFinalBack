import express from 'express';
import morgan from 'morgan';
import cors from "cors";
import path from 'path';
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
app.get('/', (req,res)=>{
    res.send("Hola desde del backend")

})