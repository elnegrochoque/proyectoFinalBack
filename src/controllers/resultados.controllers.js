import Resultado from "../models/resultado";
import Persona from "../models/persona";
const resultadosCtrl = {};

resultadosCtrl.crearResultado = async (req, res) => {
  try {
    const { IDEvaluacion, IDAlumno, FechaEvaluacion, NotaEvaluacion, Foto } =
      req.body;
    //crear el nuevo objeto
    const resultadoNuevo = new Resultado({
      IDEvaluacion,
      IDAlumno,
      FechaEvaluacion,
      NotaEvaluacion,
      Foto,
    });
    await resultadoNuevo.save();

    res.status(201).json(resultadoNuevo._id);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "Ocurrio un error al crear el resultado",
    });
    // enviar codigo de error
  }
};

resultadosCtrl.obtenerUnResultado = async (req, res) => {
  try {
    const resultadoBuscado = await Resultado.findById(req.params.idResultados);

    res.status(200).json(resultadoBuscado);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "error al obtener el resultado",
    });
  }
};

resultadosCtrl.editarRresultado = async (req, res) => {
  try {
    await Resultado.findByIdAndUpdate(req.params.idResultados, req.body);
    res.status(200).json({
      mensaje: "Resultado Modificado",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "error al responder",
    });
  }
};
resultadosCtrl.obtenerResultadosEvaluacion = async (req, res) => {
  const resultadosBuscados = await Resultado.find({
    IDEvaluacion: req.params.idEvaluacion,
  });
  // console.log(resultadosBuscados[0].IDAlumno)
  // for (const i in resultadosBuscados) {
  //     console.log(resultadosBuscados[i].IDAlumno)
  //     const personasBuscadas = await Persona.findById(resultadosBuscados[0].IDAlumno)
  //     console.log(personasBuscadas)
  //     resultadosBuscados.push(personasBuscadas)
  // }
  try {
    res.status(200).json(resultadosBuscados);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "error al buscar las evaluaciones",
    });
  }
};

resultadosCtrl.getResultadoIdAlumno = async (req, res) => {
  try {
    const resultadosBuscados = await Resultado.find({
      IDAlumno: req.params.idAlumno,
    });

    res.status(200).json(resultadosBuscados);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "error al obtener el resultado",
    });
  }
};
export default resultadosCtrl;
