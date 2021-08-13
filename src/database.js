import mongoose from "mongoose";

//const url='mongodb://localhost:27017/sistemadeevaluaciones'
const url="mongodb+srv://elnegrochoque:elnegrochoque_11@cluster0.yy3fo.mongodb.net/proyecto4"
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})

const connection =mongoose.connection;
connection.once('open', ()=>{
    console.log('BD conectada')
})