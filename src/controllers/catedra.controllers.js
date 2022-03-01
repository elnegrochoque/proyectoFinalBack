// creo el objeto vacio con la logica del backend
import Catedra from "../models/catedra";
const catedraCtrl = {};
catedraCtrl.getListarCatedras = async (req, res) => {
  try {
    // obtener un areglo con las noticias
    const arregloCatedras = await Catedra.find();
    res.status(200).json(arregloCatedras);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "error al obtener las catedras",
    });
  }
};
catedraCtrl.postCrearCatedra = async (req, res) => {
  try {
    const { nombreCatedra, materiaCatedra, idProfesor } = req.body;
    //crear el nuevo objeto
    const catedraNueva = new Catedra({
      nombreCatedra,
      materiaCatedra,
      idProfesor,
    });
    await catedraNueva.save();
    res.status(201).json({
      mensaje: "Catedra agregada",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "Ocurrio un error al agregar la catedra",
    });
  }
};
catedraCtrl.getObtenerCatedra = async (req, res) => {
  try {
    const catedraBuscada = await Catedra.findById(req.params.id);

    res.status(200).json(catedraBuscada);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "error al obtener la catedra o catedra no encontrada",
    });
  }
};

catedraCtrl.putEditarCatedra = async (req, res) => {
  try {
    console.log(req.body);
    await Catedra.findByIdAndUpdate(req.params.id, req.body);
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
catedraCtrl.deleteEliminarCatedra = async (req, res) => {
  try {
    console.log(req.params.id);
    await Catedra.findByIdAndDelete(req.params.id);
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
export default catedraCtrl;
