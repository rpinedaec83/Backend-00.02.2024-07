document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    if (username === 'jpaico' && password === '1717') {
        Swal.fire({
            icon: 'success',
            title: 'Acceso permitido',
            text: 'Has iniciado sesión correctamente.'
        }).then(() => {
            
            window.location.href = 'index.html';
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Nombre de usuario o contraseña incorrectos.'
        });
    }
});

if (!localStorage.getItem('loggedIn')) {
    window.location.href = 'login.html';
}