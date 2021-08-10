// creo el objeto vacio con la logica del backend

import Evaluacion from "../models/evaluacion";
import Pregunta from "../models/pregunta";
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
            cantidadPreguntasEvaluacion,
            fechaYHoraInicioEvaluacion,
            fechaYHoraFinEvaluacion
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
            cantidadPreguntasEvaluacion,
            fechaYHoraInicioEvaluacion,
            fechaYHoraFinEvaluacion
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
        const evaluacionBuscada = await Evaluacion.find({ "IDProfesor": req.params.id })
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
evaluacionesCtrl.editarEvaluacion = async (req, res) => {
    try {
        console.log(req.body)
        await Evaluacion.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            mensaje: "La evaluacion fue modificado"
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "error al editar el usuario"
        })
    }
}
evaluacionesCtrl.obtenerEvaluacionAlumno = async (req, res) => {
    try {
        let ahora = new Date();
        const evaluacionBuscada = await Evaluacion.find({ "_id": req.params.id })
        if (ahora.getTime() > evaluacionBuscada[0].fechaYHoraInicioEvaluacion.getTime() &&
            ahora.getTime() < evaluacionBuscada[0].fechaYHoraFinEvaluacion.getTime()) {
            res.status(200).json(true)
        } else {

            res.status(200).json(false)
        }
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "error al obtener la evaluacion"
        })
    }
}
evaluacionesCtrl.obtenerEvaluacionPreguntasAlumno = async (req, res) => {
    try {
        let ahora = new Date();
        const preguntasBuscadas = await Pregunta.find({ "IDEvaluacion": req.params.id })
        const evaluacionBuscada = await Evaluacion.find({ "_id": req.params.id })
        if (ahora.getTime() > evaluacionBuscada[0].fechaYHoraInicioEvaluacion.getTime() &&
            ahora.getTime() < evaluacionBuscada[0].fechaYHoraFinEvaluacion.getTime()) {
            preguntasBuscadas.sort(() => Math.random() > 0.5 ? 1 : -1);

            for (let index = 0; index < evaluacionBuscada[0].cantidadPreguntasEvaluacion; index++) {
                evaluacionBuscada.push(preguntasBuscadas[index])
            }   
            res.status(200).json(evaluacionBuscada)
        } else {
            res.status(200).json(false)
        }
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "error al obtener la evaluacion"
        })
    }
}
export default evaluacionesCtrl;