// creo el objeto vacio con la logica del backend

const personasCtrl = {};
personasCtrl.getPrueba=(req,res)=>{ 
    res.send('Prueba desde el controlador');
}

export default personasCtrl;