import mongoose, { Schema } from "mongoose";

const catedraSchema = new Schema({
  nombreCatedra: {
    type: String,
    required: true,
  },
  materiaCatedra: {
    type: String,
  },
  idProfesor: {
    type: String,
  }
});

const Catedra = mongoose.model("catedra", catedraSchema);
export default Catedra;