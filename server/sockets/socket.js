const { io } = require('../server')

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a la aplicacion'
    })


    client.on('disconnect', function() {
        console.log('Usuario desconectado');
    })

    //Escuchar cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log("Escuchando al cliente: ");
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        
        /* if (data.usuario) {
             callback({
                 resp: 'Se recibio el mensaje'
             });
        } else {
             callback({
                 resp: 'No se recibio el mensaje'
             });
        } */
    })

})