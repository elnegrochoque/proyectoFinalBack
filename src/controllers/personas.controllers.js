// creo el objeto vacio con la logica del backend
import Persona from "../models/persona";
const personasCtrl = {};
personasCtrl.getListaPersonas = async (req, res) => {try {
    // obtener un areglo con las noticias
    const arregloPersonas = await Persona.find();
    res.status(200).json(arregloPersonas);
} catch (error) {
    console.log(error)
    res.status(500).json({
        mensaje: "error al obtener las noticias"
    })}
}
personasCtrl.crearPersona = async (req, res) => {

    try {
        const {
            nombrePersona,
            tipo,
            usuarioPersona,
            passwordPersona,
            UIPersona,
            DNIPersona,
            emailPersona,
            apellidoPersona

        } = req.body
        //crear el nuevo objeto
        const personaNuevo = new Persona({
            nombrePersona,
            tipo,
            usuarioPersona,
            passwordPersona,
            UIPersona,
            DNIPersona,
            emailPersona,
            apellidoPersona
        });
        await personaNuevo.save();
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
personasCtrl.obtenerPersona = async (req, res) => {
    try {

        console.log(req.params.id)
        const personaBuscada = await Persona.findById(req.params.id)

        res.status(200).json(personaBuscada)
    } catch (error) {
        console.log(error)
        res.status(404).json({
            mensaje: "error al obtener la noticia"
        })
    }

}

personasCtrl.editarPersona = async (req, res) => {
    try {
        console.log(req.body)
        await Persona.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            mensaje:"El usuario fue modificado"
        })
    } catch (error) {
    console.log(error)
    res.status(404).json({
        mensaje: "error al editar el usuario"
    })
}
}
personasCtrl.eliminarPersona = async (req, res) => {
    try {
        console.log(req.params.id)
        await Persona.findByIdAndDelete(req.params.id)
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
export default personasCtrl;