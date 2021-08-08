import Pregunta from "../models/pregunta";


const preguntasCtrl = {};
preguntasCtrl.crearPregunta = async (req, res) => {

    try {
        const {
            IDEvaluacion,
            enunciadoPregunta,
            opcion1Pregunta,
            opcion2Pregunta,
            opcion3Pregunta,
            opcion4Pregunta,
            opcion1CorrectaPregunta,
            opcion2CorrectaPregunta,
            opcion3CorrectaPregunta,
            opcion4CorrectaPregunta
        } = req.body
        //crear el nuevo objeto
        const preguntaNueva = new Pregunta({
            IDEvaluacion,
            enunciadoPregunta,
            opcion1Pregunta,
            opcion2Pregunta,
            opcion3Pregunta,
            opcion4Pregunta,
            opcion1CorrectaPregunta,
            opcion2CorrectaPregunta,
            opcion3CorrectaPregunta,
            opcion4CorrectaPregunta
        });
        await preguntaNueva.save();
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

preguntasCtrl.getListaPreguntas = async (req, res) => {
    try {
        // obtener un areglo con todas las preguntas
        const arregloPreguntas = await Pregunta.find();
        res.status(200).json(arregloPreguntas);
    } catch (error) {
        console.log(error)
        res.status(500).json({
            mensaje: "error al obtener las noticias"
        })
    }
}
preguntasCtrl.listarPreguntasEvaluacion = async (req, res) => {
    try {
        const preguntasBuscadas = await Pregunta.find({"IDEvaluacion":req.params.id})
        res.status(200).json(preguntasBuscadas)
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "error al obtener las Preguntas"
        })
    }

}
preguntasCtrl.eliminarPregunta = async (req, res) => {
    try {
        console.log(req.params.id)
        await Pregunta.findByIdAndDelete(req.params.id)
        res.status(200).json({
            mensaje: "la pregunta fue eliminada"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            mensaje: "error al eliminar la pregunta"
        })
    }

}
preguntasCtrl.editarPregunta = async (req, res) => {
    try {
        console.log(req.body)
        await Pregunta.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            mensaje:"La pregunta fue modificada"
        })
    } catch (error) {
    console.log(error)
    res.status(404).json({
        mensaje: "error al editar la pregunta"
    })
}
}
export default preguntasCtrl;