// creo el objeto vacio con la logica del backend
import PersonasCatedra from "../models/personasCatedra";
const personasCatedraCtrl = {};
personasCatedraCtrl.getListarPersonas = async (req, res) => {
  try {
    // obtener un areglo con las noticias
    const arregloPersonas = await PersonasCatedra.find();
    res.status(200).json(arregloPersonas);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "error al obtener las personas",
    });
  }
};
personasCatedraCtrl.postAgregarPersonasCatedra = async (req, res) => {
  try {
    const { nombreCatedra, idCatedra, nombrePersona, idPersona } = req.body;
    //crear el nuevo objeto
    const personaNuevaCatedra = new PersonasCatedra({
      nombreCatedra,
      idCatedra,
      nombrePersona,
      idPersona,
    });
    await personaNuevaCatedra.save();
    res.status(201).json({
      mensaje: "persona agregada",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "Ocurrio un error al agregarlo a la catedra",
    });
  }
};
personasCatedraCtrl.getObtenerPersonaCatedra = async (req, res) => {
  try {
    const personaBuscada = await PersonasCatedra.findById(req.params.id);

    res.status(200).json(personaBuscada);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "error al obtener la persona",
    });
  }
};

personasCatedraCtrl.putEditarPersonaCatedra = async (req, res) => {
  try {
    console.log(req.body);
    await PersonasCatedra.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: "La catedra fue modificada",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "error al editar la catedra",
    });
  }
};

personasCatedraCtrl.deleteEliminarPersonaCatedra = async (req, res) => {
  try {
    console.log(req.params.id);
    await PersonasCatedra.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "La catedra fue eliminada",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "error al eliminar la catedra",
    });
  }
};
export default personasCatedraCtrl;
