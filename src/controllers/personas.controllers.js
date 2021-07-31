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
    console.log(req.body);
    res.send('desde crear persona')
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

export default personasCtrl;