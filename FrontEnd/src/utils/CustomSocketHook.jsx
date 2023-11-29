import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const CustomSocketHook = () => {
    
    const serverUrl = 'http://localhost:3000';
    const socket = io(serverUrl);

    const [temperature, setTemperature] = useState(null);
    const [airquality, setAirQuality] = useState(null);
    const [humidity, setHumidity] = useState(null);
    const [date, setDate] = useState(null);

    useEffect(() => {
        socket.on('1/temperature', (receivedData) => {
            setTemperature(receivedData);
        });

        socket.on('1/aq', (receivedData) => {
            setAirQuality(receivedData);
        });

        socket.on('1/humidity', (receivedData) => {
            setHumidity(receivedData);
        });

        socket.on('1/date', (receivedData) => {
            setDate(receivedData);
        });

        return () => {
            socket.off('1/datos');
        };
    }, []);

    return {temperature, airquality, humidity, date};
};

export default CustomSocketHook;