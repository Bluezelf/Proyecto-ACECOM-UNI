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

const SENSOR_ID = 1;
const INITIAL_DATA = 'initialData'
const AIR_QUALITY = 'aq'
const TEMPERATURE = 'temperature'
const CARBON_DIOXIDE = 'co2'
const HUMIDITY = 'humidity'
const PRESSURE = 'pressure'
const DATE = 'date'

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

externalSocket.on(`${SENSOR_ID}/${INITIAL_DATA}`, (data) => {
    console.log('Initial Data:', data);
    ioServer.emit(`${SENSOR_ID}/${INITIAL_DATA}`, data);
});

externalSocket.on(`${SENSOR_ID}/${AIR_QUALITY}`, (data) => {
    console.log('Air Quality:', data);
    ioServer.emit(`${SENSOR_ID}/${AIR_QUALITY}`, data);
});

externalSocket.on(`${SENSOR_ID}/${TEMPERATURE}`, (data) => {
    console.log('Temperature (C°):', data);
    ioServer.emit(`${SENSOR_ID}/${TEMPERATURE}`, data);
});

externalSocket.on(`${SENSOR_ID}/${CARBON_DIOXIDE}`, (data) => {
    console.log('Carbon dioxide:', data);
    ioServer.emit(`${SENSOR_ID}/${CARBON_DIOXIDE}`, data);
});

externalSocket.on(`${SENSOR_ID}/${HUMIDITY}`, (data) => {
    console.log('Humidity (%):', data);
    ioServer.emit(`${SENSOR_ID}/${HUMIDITY}`, data);
});

externalSocket.on(`${SENSOR_ID}/${PRESSURE}`, (data) => {
    console.log('Pressure (?):', data);
    ioServer.emit(`${SENSOR_ID}/${PRESSURE}`, data);
});

externalSocket.on(`${SENSOR_ID}/${DATE}`, (data) => {
    console.log('Current date and hour:', data);
    ioServer.emit(`${SENSOR_ID}/${DATE}`, data);
});

externalSocket.on('error', (error) => {
    console.error('Error Connection:', error);
});

externalSocket.on('disconnect', () => {
    console.log('User disconnected');
});

ioServer.on('connection', (socket) => {
    console.log('User connected');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
});