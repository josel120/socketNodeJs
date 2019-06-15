/* jshint esversion:8 */

const { io } = require('../server');

io.on('connection', (client) => {
    console.log('usuario conectado');

    client.on('disconnect', function() {
        console.log('usuario desconectado');
    });
    client.on('enviarMensaje', (message, callback) => {
        console.log(message);
        client.broadcast.emit('enviarMensaje', message);
        // if (message.usuario) {
        //     callback({
        //         resp: "TODO SALIO BIEN!"
        //     });
        // } else {
        //     callback({
        //         resp: "TODO SALIO MAL!"
        //     });
        // }
    });
    client.emit('enviarMensaje', {
        usuario: 'Admin',
        message: 'Bienvenido'
    });
});