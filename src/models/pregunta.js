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
        type: Boolean
    },
    opcion2CorrectaPregunta:{
        type: Boolean
    },
    opcion3CorrectaPregunta:{
        type: Boolean
    },
    opcion4CorrectaPregunta:{
        type: Boolean
    }
});

const Pregunta = mongoose.model('pregunta', preguntaSchema);
export default Pregunta
