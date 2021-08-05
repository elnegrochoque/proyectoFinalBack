// creo el objeto vacio con la logica del backend

import Evaluacion from "../models/evaluacion";

const evaluacionesCtrl = {};
evaluacionesCtrl.listarEvaluaciones = async (req, res) => {
    try {
        // obtener un areglo con las noticias
        const arregloEvaluaciones = await Evaluacion.find();
        res.status(200).json(arregloEvaluaciones);
    } catch (error) {
        console.log(error)
        res.status(500).json({
            mensaje: "error al obtener las evaluaciones"
        })
    }
}
evaluacionesCtrl.crearEvaluacion = async (req, res) => {
    console.log(req.body);
    try {
        const {
            IDProfesor,
            nombreEvaluacion,
            materiaEvaluacion,
            fechaInicioEvaluacion,
            horaInicioEvaluacion,
            fechaFinEvaluacion,
            horaFinEvaluacion,
            mezclarPreguntasEvaluacion,
            libreNavegacionEvaluacion,
            cantidadPreguntasEvaluacion
        } = req.body
        //crear el nuevo objeto
        const evaluacionNuevo = new Evaluacion({
            IDProfesor,
            nombreEvaluacion,
            materiaEvaluacion,
            fechaInicioEvaluacion,
            horaInicioEvaluacion,
            fechaFinEvaluacion,
            horaFinEvaluacion,
            mezclarPreguntasEvaluacion,
            libreNavegacionEvaluacion,
            cantidadPreguntasEvaluacion
        });
        await evaluacionNuevo.save();
        const evaluacionNuevaID = await Evaluacion.find({ "nombreEvaluacion": nombreEvaluacion }, { "_id": 1 })
        res.status(201).json(evaluacionNuevaID)
        res.status(200).json(evaluacionNuevaID, { mensaje: "creado" })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            mensaje: "Ocurrio un error al agregar la noticia"
        })
        // enviar codigo de error
    }

}
evaluacionesCtrl.obtenerEvaluacion = async (req, res) => {
    try {

       
        const evaluacionBuscada = await Evaluacion.findById(req.params.id)

        res.status(200).json(evaluacionBuscada)
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "error al obtener la evaluacion"
        })
    }

}
evaluacionesCtrl.listarEvaluacionesProfesor = async (req, res) => {
    try {
        const evaluacionBuscada = await Evaluacion.find({"IDProfesor":req.params.id})
        res.status(200).json(evaluacionBuscada)
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "error al obtener la evaluacion"
        })
    }

}
evaluacionesCtrl.eliminarEvaluacion = async (req, res) => {
    try {
        console.log(req.params.id)
        await Evaluacion.findByIdAndDelete(req.params.id)
        res.status(200).json({
            mensaje: "el producto fue eliminado"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            mensaje: "error eliminar la noticia"
        })
    }

}
export default evaluacionesCtrl;