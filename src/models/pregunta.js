import mongoose, { Schema } from "mongoose"

const preguntaSchema = new Schema({
    IDEvaluacion: {
        type: String,
        required: true
    },
    enunciadoPregunta:{
        type: String
    },
    
    opcion1Pregunta:{
        type: String
    },
    opcion2Pregunta:{
        type: String
    },
    opcion3Pregunta:{
        type: String
    },
    opcion4Pregunta:{
        type: String
    },
    opcion1CorrectaPregunta:{
        type: String
    },
    opcion2CorrectaPregunta:{
        type: String
    },
    opcion3CorrectaPregunta:{
        type: String
    },
    opcion4CorrectaPregunta:{
        type: String
    }
});

const Pregunta = mongoose.model('pregunta', preguntaSchema);
export default Pregunta
