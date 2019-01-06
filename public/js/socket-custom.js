var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
})

//Escuchar informacion
socket.on('disconnect', function() {
    console.log('Se perdio conexion con el servidor');
});

//Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Jordy',
    mensaje: 'Hola Jordy'
}, (resp) => {
    console.log('Respuesta servidor: ', resp);
});

//Escuchar informacion del servidor
socket.on('enviarMensaje', (mensaje) => {
    console.log(mensaje);
})