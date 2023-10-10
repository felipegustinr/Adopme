baseDatos = localStorage.getItem("sistemaLogin")

if (!baseDatos) {
    cargarDatosDB()
}
function cargarDatosDB() {
    baseDatos = {
        "felipe_rivas@prueba.com": {
            contraseña: "felipe123"
        },
        "diana_araujo@prueba.com": {
            contraseña: "diana123"
        },
        "daniel_jojoa@prueba-com": {
            contraseña: "daniel123"

        }
    }

}
async function login() {
    let{value :datos} = preConfirm () => {
        let usuario = document.getElementById("email-login").value;
        let password = document.getElementById("password-login").value;
        datos = baseDatos[usuario]
        if (!datos) {
            alert("El usuario no existe");
            return false;
        }
        if(datos.contraseña!= contraseña){
            alert("Contraseña Incorrecta");
            return false;
        }
        return datos;
    }
}