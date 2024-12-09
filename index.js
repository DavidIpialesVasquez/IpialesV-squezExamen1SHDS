// Protocolo de intercambio
var http = require('http');

// Creando el servidor mediante el uso del protocolo HTTP
var server = http.createServer();

// Servicio web
function mensaje(req, response) {
    // Comprobar si la solicitud es al endpoint /ipiales
    if (req.url === '/ipiales') {
        // Estado 200 satisfactorio, mensaje de tipo texto plano confirmado mediante JSON
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        // Escribo el mensaje en texto plano
        response.write('Ipiales Vásquez, 22 años, Estudiante en Software, apasionado por el baloncesto y el deporte.');
    } else {
        // Si se accede a un endpoint no definido
        response.writeHead(404, { 'Content-Type': 'text/plain' });
        response.write('Recurso no encontrado.');
    }
    // Finaliza la comunicación entre el cliente y el servidor
    response.end();
}

// Configuración del servidor
server.on('request', mensaje);
server.listen(3000, function () {
    console.log("La solicitud fue realizada mediante el puerto 3000");
    console.log("Prueba accediendo a http://localhost:3000/ipiales");
});
