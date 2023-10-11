baseDatos = window.localStorage.getItem("sign_in");


if (!baseDatos) {
    cargarDatosDB()
}
function cargarDatosDB() {
    baseDatos = {
        "felipe_rivas@prueba.com": {
            password: "felipe123"
        },
        "diana_araujo@prueba.com": {
            password: "diana123"
        },
        "daniel_jojoa@prueba-com": {
            password: "daniel123"

        }
    }

}

function login() {
    
    
        let datos =  baseDatos[usuario]
        let usuario = document.getElementById("email-login").value;
        let password = document.getElementById("password-login").value;
        
        
        if (!datos) {
            alert("El usuario no existe o campo vacio");
            
        }
        
        if(datos.password!= password){
            alert("Contraseña Incorrecta o campo vacio");
            
        }
        
        return datos;
        
    
}
