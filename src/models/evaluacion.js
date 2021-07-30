import mongoose, { Schema } from "mongoose"

const evaluacionSchema = new Schema({
    nombreEvaluacion: {
        type: String,
        required: true
    }
});

const Evaluacion = mongoose.model('evaluacion', evaluacionSchema);
export default Evaluacion
