baseDatos = window.localStorage.getItem("DB_users");


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
        "daniel_jojoa@prueba.com": {
            password: "daniel123"

        }
    }

}

function login() {  
        let usuario = document.getElementById("email-login").value;
        let password = document.getElementById("password-login").value;
        
        
        
        if (!usuario) {
            alert("Campo vacio en usuario");
        }
        if(!password){
            alert("Campo vacio en contraseña");
        }
        let datos =  baseDatos[usuario]

        if (!datos){
            alert("El usuario no existe")
        }

        if (password != datos.password) {
            alert("Contraseña incorrecta")
        } else {
            
            window.location="pets.html"
            alert("Bienvenido")
        }
        
        
    
}
