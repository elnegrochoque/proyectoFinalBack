import moongose, { Schema } from moongose;

const personaSchema = new Schema({
    tipo: {
        type: String,
        required: true
    },
    usuarioPersona: {
        unique: true,
        type: String,
        required: true
    },
    passwordPersona: {
        type: String,
        required: true
    },
    UIPersona: {
        type: Number,
        required: true
    },
    DNIPersona: {
        type: Number,
        min: 0, max: 999999999,
        unique: true,
        required: true
    },
    emailPersona: {
        type: String,
        required: true
    },
    nombrePersona: {
        type: String,
        required: true
    },
    apellidoPersona: {
        type: String,
        required: true
    }
});

const Persona = moongose.model('persona', personaSchema);
export default Persona
