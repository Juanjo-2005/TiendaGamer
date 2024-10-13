// #cSpell:disable

// Asignar los datos del formulario a una variable
let loginForm = document.querySelector('#loginForm')

// Asignar un evento para enviar una información
loginForm.addEventListener('submit', (e) => {
    e.preventDefault()

    // Asignaremos los datos que ingresemos en los campos a las variables
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value

    // Obtener los datos de la tabla para validar el inicio de sesión
    let Users = JSON.parse(localStorage.getItem('users')) || []
    // Buscaremos y compararemos si el correo y la clave se encuentra resgistrados en la bdd
    let validUser = Users.find(user => user.email === email && user.password === password)

    // Comprobamos si los datos concuerdan con lo que esta registrando en la base de datos, si no, me lanza un error
    if(!validUser){
        Swal.fire({
            icon: 'error',
            title: 'Error de Datos',
            text: 'El usuario y/o contraseña son incorrectos'
        })
        return
    }
    Swal.fire({
        icon: 'success',
        title: 'Inicio de Sesion Exitoso',
        text: `Bienvenido ${validUser.name}`
    })
    //
    localStorage.setItem('login_success', JSON.stringify(validUser));
    
    //Redirige al usuario al home (página principal)
    window.location.href = 'index.html'
})