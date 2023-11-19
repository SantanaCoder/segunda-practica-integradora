import mongoose from "mongoose";

mongoose.connect("mongodb+srv://davisanta4040:TeTwEiTApsENE2nM@cluster0.wsqlgqw.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("Conectado a la base de datos")
})
.catch(error => {
    console.error("Error al conectarse a la base de datos, error"+error)
})