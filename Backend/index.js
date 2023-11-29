const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const { io } = require('socket.io-client')

const app = express();
const server = createServer(app);

app.set('port', process.env.PORT || 3000);

// Creación del servidor Socket.io
const ioServer = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});

const sensorId = 1;

const serverUrl = 'wss://airquality-production.up.railway.app';
const originHeader = 'http://localhost:3000';
const userId = '8e234a60-4b52-431a-8c33-98fac1bca3a9';
const queryObject = {
    id: userId,
    moduleId: 1,
    sensorId: 1
};

const externalSocket = io(serverUrl, {
    transportOptions: {
        websocket: {
            extraHeaders: {
                Origin: originHeader
            }
        }
    },
    query: queryObject
});

externalSocket.on(`${sensorId}/initialData`, (data) => {
    console.log('Data inicial:', data);
    ioServer.emit(`${sensorId}/initialData`, data);
});

externalSocket.on(`${sensorId}/aq`, (data) => {
    console.log('Air Quality:', data);
    ioServer.emit(`${sensorId}/aq`, data);
});

externalSocket.on(`${sensorId}/temperature`, (data) => {
    console.log('Temperatura (C°):', data);
    ioServer.emit(`${sensorId}/temperature`, data);
});

externalSocket.on(`${sensorId}/h2s`, (data) => {
    console.log('Sulfuro de Hidrogeno":', data);
    ioServer.emit(`${sensorId}/h2s`, data);
});

externalSocket.on(`${sensorId}/humidity`, (data) => {
    console.log('Humedad (%):', data);
    ioServer.emit(`${sensorId}/humidity`, data);
});

externalSocket.on(`${sensorId}/date`, (data) => {
    console.log('Fecha y Hora actual:', data);
    ioServer.emit(`${sensorId}/date`, data);
});

externalSocket.on('error', (error) => {
    console.error('Error de conexión:', error);
});

externalSocket.on('disconnect', () => {
    console.log('Usuario desconectado');
});

ioServer.on('connection', (socket) => {
    console.log('Usuario conectado');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor en el puerto ${PORT}`);
});