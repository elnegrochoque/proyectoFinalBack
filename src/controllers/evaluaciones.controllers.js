// creo el objeto vacio con la logica del backend

const evaluacionesCtrl = {};
evaluacionesCtrl.getPrueba=(req,res)=>{ 
    res.send('Prueba desde el controlador evaluaciones');
}

export default evaluacionesCtrl;