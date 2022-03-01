import mongoose, { Schema } from "mongoose";

const personasCatedraSchema = new Schema({
  nombreCatedra: {
    type: String,
    required: true,
  },
  idCatedra: {
    type: String,
    required: true,
  },
  nombrePersona: {
    type: String,
    required: true,
  },
  idPersona: {
    type: String,
    required: true,
  },
});

const PersonasCatedra = mongoose.model("personasCatedra", personasCatedraSchema);
export default PersonasCatedra;
