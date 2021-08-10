import Respuesta from "../models/respuesta"

const respuestasCtrl = {};
respuestasCtrl.eliminarRespuesta = async (req, res) => {
    try {
        console.log(req.params.id)
        await Respuesta.findByIdAndDelete(req.params.idRespuesta)
        res.status(200).json({
            mensaje: "la respuesta fue eliminada"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            mensaje: "error al eliminar la respuesta"
        })
    }

}
respuestasCtrl.crearRespuesta = async (req, res) => {

    try {
        const {
            IDEvaluacion,
            IDAlumno,
            IDPregunta,
            numeroPregunta,
            opcion1CorrectaRespuesta,
            opcion2CorrectaRespuesta,
            opcion3CorrectaRespuesta,
            opcion4CorrectaRespuesta
        } = req.body
        //crear el nuevo objeto
        const respuestaNueva = new Respuesta({
            IDEvaluacion,
            IDAlumno,
            IDPregunta,
            numeroPregunta,
            opcion1CorrectaRespuesta,
            opcion2CorrectaRespuesta,
            opcion3CorrectaRespuesta,
            opcion4CorrectaRespuesta
        });
        await respuestaNueva.save();
        res.status(201).json({
            mensaje: "Producto agregado a la BD"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            mensaje: "Ocurrio un error al agregar la Pregunta"
        })
        // enviar codigo de error
    }
}
respuestasCtrl.obtenerPreguntasEvaluacion = async (req, res) => {
    try {
        // obtener un areglo con todas las preguntas
        const arregloPreguntas = await Respuesta.find({
            "IDEvaluacion": req.params.idEvaluacion,
        "IDAlumno":req.params.idAlumno,"numeroPregunta":req.params.idNumeroPregunta});
        res.status(200).json(arregloPreguntas);
        } catch (error) {
        console.log(error)
        res.status(500).json({
            mensaje: "error al obtener las preguntas"
        })
    }
}

export default respuestasCtrl;