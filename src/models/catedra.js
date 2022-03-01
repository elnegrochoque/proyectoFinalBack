import mongoose, { Schema } from "mongoose";

const catedraSchema = new Schema({
  nombreCatedra: {
    type: String,
    required: true,
  },
  materiaCatedra: {
    type: String,
    required: true,
  },
  idProfesor: {
    type: String,
    required: true,
  }
});

const Catedra = mongoose.model("catedra", catedraSchema);
export default Catedra;
