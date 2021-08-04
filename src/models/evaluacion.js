import mongoose, { Schema } from "mongoose"

const evaluacionSchema = new Schema({
    nombreEvaluacion: {
        type: String,
        required: true
    },
            materiaEvaluacion: {
                type: String,
                required: true
            },
            fechaInicioEvaluacion: {
                type: String,
                required: true
            },
            horaInicioEvaluacion: {
                type: String,
                required: true
            },
            fechaFinEvaluacion: {
                type: String,
                required: true
            },
            horaFinEvaluacion: {
                type: String,
                required: true
            },
            mezclarPreguntasEvaluacion: {
                type: Boolean,
                required: true
            },
            libreNavegacionEvaluacion: {
                type: Boolean,
                required: true
            },
            cantidadPreguntasEvaluacion: {
                type: Number,
                required: true
            }
});

const Evaluacion = mongoose.model('evaluacion', evaluacionSchema);
export default Evaluacion
