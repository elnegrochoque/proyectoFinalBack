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
    const { idCatedra, idPersona } = req.body;
    //crear el nuevo objeto
    const personaNuevaCatedra = new PersonasCatedra({
      idCatedra,
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
personasCatedraCtrl.getObteneridPersonaidCatedra = async (req, res) => {
  try {
    const personaBuscada = await PersonasCatedra.find({
      idPersona: req.body.idPersona,
      idCatedra: req.body.idCatedra,
    });
    if (personaBuscada.length > 0) {
      res.status(200).json({ existe: true });
    } else {
      res.status(200).json({ existe: false });
    }
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "error al obtener la persona",
    });
  }
};
personasCatedraCtrl.putEditarPersonaCatedra = async (req, res) => {
  try {
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
personasCatedraCtrl.deleteidPersonaidCatedra = async (req, res) => {

  try {
    const cantidad = await PersonasCatedra.deleteMany({
      idCatedra: req.body.idCatedra,
      idPersona: req.body.idPersona,
    });
    res.status(200).json({
      mensaje: cantidad,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "error al eliminar la catedra",
    });
  }
};
personasCatedraCtrl.getObtenerPersonaConidCatedra = async (req, res) => {
  try {
    const personaBuscada = await PersonasCatedra.find({
      idCatedra: req.body.idCatedra,
    });

    res.status(200).json(personaBuscada);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "error al obtener la persona",
    });
  }
};
export default personasCatedraCtrl;
