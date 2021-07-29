// creo el objeto vacio con la logica del backend

const personasCtrl = {};
personasCtrl.getPrueba=(req,res)=>{ 
    res.send('Prueba desde el controlador personas');
}

export default personasCtrl;