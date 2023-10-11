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
function index(){
    window.location.href="./index.html";
}
async function login() {
    
    
        
        let usuario = document.getElementById("email-login").value;
        let password = document.getElementById("password-login").value;
        
        let datos = baseDatos[usuario]
        if (!datos) {
            alert("El usuario no existe");
            return false;
        }
        if(datos.password!= password){
            alert("Contraseña Incorrecta");
            return false;
        }
        return datos;
    
}
