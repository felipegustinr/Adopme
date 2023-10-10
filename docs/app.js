baseDatos=localStorage.getItem("sistemaLogin")

if(!baseDatos){
    cargarDatosDB()
}
function cargarDatosDB(){
    baseDatos = {
        "felipe_rivas@prueba.com":{
            contraseña:"felipe123"
        },
        "diana_araujo@prueba.com":{
            contraseña:"diana123"
        },
        "daniel_jojoa@prueba-com":{
            contraseña:"daniel123"
            
        }
    }
    
}
alert("Conectado");