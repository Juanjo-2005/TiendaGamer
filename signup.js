// #cSpell:disable

// Llamaremos del ID del formulario del registro
let signupForm = document.querySelector("#signupForm")

signupForm.addEventListener('submit' , (e) =>{
    // Les ayuda a prevenir que la pagina se recargue de manera automatica
    e.preventDefault()

    // Obtener los valores del formulario
    let name = document.querySelector('#name').value
    let email = document.querySelector('#email').value
    let password = document.querySelector('#password').value

    // los datos se almacenaran en la tabla Users del bdd local, si no hay una tabla creada, me crearan un arreglo vacio
    let User = JSON.parse(localStorage.getItem('users')) || []

    // Buscamos en la bdd si el correo que se esta registrando ya se encuentra activo
    let isUserRegistered = User.find(user => user.email === email)

    // Si el correo ya existe, que muestre que ya se encuentra en uso
    if(isUserRegistered) {
        Swal.fire({
            icon: 'error',
            title: 'Error de datos',
            text: 'El correo ya se encuentra en uso, usa otro diferente'
        })
        return
    }

    // Almacenaremos los datos del usuario
    User.push({name, email, password})
    // convertimos los datos del nuevo usuario de String a objetos
    localStorage.setItem('users' , JSON.stringify(User))
    // Mostrar el mensaje del registro exitoso
    Swal.fire({
        icon: 'success',
        title: 'Resgistro Exitoso',
        text: 'Tu registro se ha realizado con éxito'
    }).then(() => {
        window.location.href = 'login.html'
    })
})