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
            opcion4CorrectaRespuesta,
            momentoInicioDeEvaluacionAlumno,
            IDResultado
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
            opcion4CorrectaRespuesta,
            momentoInicioDeEvaluacionAlumno,
            IDResultado
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
            "IDAlumno": req.params.idAlumno, "numeroPregunta": req.params.idNumeroPregunta
        });
        console.log(arregloPreguntas.length)
        console.log(arregloPreguntas[arregloPreguntas.length - 1])
        const arregloUltimaPregunta = []
        arregloUltimaPregunta.push(arregloPreguntas[arregloPreguntas.length - 1])
        res.status(200).json(arregloUltimaPregunta);
    } catch (error) {
        console.log(error)
        res.status(500).json({
            mensaje: "error al obtener las preguntas"
        })
    }
}

respuestasCtrl.editarRespuesta = async (req, res) => {
    try {
        console.log(req.body)
        await Respuesta.findByIdAndUpdate(req.params.idRespuesta, req.body);
        res.status(200).json({
            mensaje: "Respuesta Modificada"
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "error al responder"
        })
    }
}

respuestasCtrl.obtenerRespuestaResultado = async (req, res) => {
    try {

        const respuestasBuscadas = await Respuesta.find({ "IDResultado": req.params.idResultado });

        res.status(200).json(respuestasBuscadas)
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "error al obtener la noticia"
        })
    }

}
export default respuestasCtrl;