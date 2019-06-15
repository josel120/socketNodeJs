var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});
socket.on('disconnect', function() {
    console.log('servidor desconectado');
});
socket.emit('enviarMensaje', {
    usuario: 'jose',
    message: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});
socket.on('enviarMensaje', function(message) {
    console.log(message);
});