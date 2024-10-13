// #cSpell:disable

// Si el usuario esta logueado, tomará los datos de la tabla, sino, debe loguearse
let user = JSON.parse(localStorage.getItem('login_success')) || false

// Solicitará al usuario loguearse para ingresar al hom
if(!user) {
    Swal.fire({
        icon: 'info',
        title: 'Iniciar Sesión',
        text: 'Debes de iniciar sesión para acceder a esta página',
        confirmButtonText: 'Ir a Iniciar Sesión',
        showCancelButton: false,
        allowOutsideClick: false
        // Si el usuario le da click en iniciar sesión en redireccionará al loginForm.html
    }).then((result) =>{
        if(result.isConfirmed){
            window.location.href = 'login.html'
        }
    });
}

// Creamos un opo-up <= "anuncio" para que hacer una confirmación del cierre de la sesión
let logout = document.querySelector('#logout')
logout.addEventListener('click' , () => {
    Swal.fire({
        icon: 'info',
        title: 'Cerrar Sesión',
        text: '¿Estás seguro de que quieres cerrar sesión?',
        showCancelButton: true,
        confirmButtonText: 'Si, Cerrar Sesión',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if(result.isConfirmed){
            localStorage.removeItem('login_success');
            Swal.fire({
                icon: 'success',
                title: 'Sesión Cerrada',
                text: 'Has cerrado sesión correctamente',
                confirmButtonText: 'Ok'
                // Cuando cierre sesión lo redirige al loginForm.html
            }).then(() => {
                window.location.href = 'Index.html';
            });
        }
    });
});