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
}}
evaluacionesCtrl.crearEvaluacion = async (req, res) => {
    console.log(req.body);
    res.send('desde crear evaluacion')
    try {
        const {
            nombreEvaluacion
        } = req.body
        //crear el nuevo objeto
        const evaluacionNuevo = new Evaluacion({
            nombreEvaluacion
        });
        await evaluacionNuevo.save();
        res.status(201).json({
            mensaje: "Producto agregado a la BD"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            mensaje: "Ocurrio un error al agregar la noticia"
        })
        // enviar codigo de error
    }

    }

export default evaluacionesCtrl;