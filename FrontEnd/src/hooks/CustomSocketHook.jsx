import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const serverUrl = 'http://localhost:3000';
const socket = io(serverUrl);
const SENSOR_ID = 1

const CustomSocketHook = () => {
    const [temperature, setTemperature] = useState(null);
    const [airquality, setAirQuality] = useState(null);
    const [humidity, setHumidity] = useState(null);
    const [date, setDate] = useState(null);

    useEffect(() => {
        socket.on(`${SENSOR_ID}/temperature`, (receivedData) => {
            setTemperature(receivedData);
        });

        socket.on(`${SENSOR_ID}/aq`, (receivedData) => {
            setAirQuality(receivedData);
        });

        socket.on(`${SENSOR_ID}/humidity`, (receivedData) => {
            setHumidity(receivedData);
        });

        socket.on(`${SENSOR_ID}/date`, (receivedData) => {
            setDate(receivedData);
        });

        return () => {
            socket.off(`${SENSOR_ID}/datos`);
        };
    }, []);

    return {temperature, airquality, humidity, date};
};

export default CustomSocketHook;