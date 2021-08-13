import mongoose, { Schema } from "mongoose"

const resultadoSchema = new Schema({
    IDEvaluacion: {
        type: String,
        required: true
    },
    IDAlumno: {
        type: String,
        required: true
    },
    FechaEvaluacion: {
        type: Date,
        required: true
    },
    NotaEvaluacion: {
        type: Number,
        required: true
    }     
});

const Resultado = mongoose.model('resultado', resultadoSchema);
export default Resultado
