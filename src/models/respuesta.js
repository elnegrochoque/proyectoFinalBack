import mongoose, { Schema } from "mongoose"

const respuestaSchema = new Schema({
    IDEvaluacion: {
        type: String,
        required: true
    },
    IDAlumno: {
        type: String,
        required: true
    },
    IDPregunta: {
        type: String,
        required: true
    },
    numeroPregunta: {
        type: Number
    },

    opcion1CorrectaRespuesta: {
        type: Boolean
    },
    opcion2CorrectaRespuesta: {
        type: Boolean
    },
    opcion3CorrectaRespuesta: {
        type: Boolean
    },
    opcion4CorrectaRespuesta: {
        type: Boolean
    }
});

const Respuesta = mongoose.model('respuesta', respuestaSchema);
export default Respuesta
