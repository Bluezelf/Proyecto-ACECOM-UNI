/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from 'react';
import CustomSocketHook from '../../hooks/CustomSocketHook';
import * as echarts from 'echarts';

// configuracion de la grafica (segun la documentacion de echarts)
const getChartOption = (xAxis, series) => {
	return {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				label: {
					backgroundColor: '#283b56',
				},
			},
		},
		toolbox: {
			show: true,
			feature: {
				saveAsImage: {},
			},
		},
		dataZoom: {
			show: false,
			start: 0,
			end: 100,
		},
		grid: {
			width: '90%',
			left: '7%',
			top: '12%',
			bottom: '10%',
		},
		xAxis: [
			{
				type: 'category',
				boundaryGap: true,
				data: xAxis,
				axisLabel: {
					fontWeight: 'bold',
				},
			},
		],
		yAxis: [
			{
				type: 'value',
				scale: true,
				max: 500,
				min: 0,
				boundaryGap: [0.2, 0.2],
				splitLine: {
					show: false,
				},
				axisLabel: {
					fontWeight: 'bold',
				},
			},
		],
		series: [
			{
				name: 'Air quality',
				type: 'bar',
				barWidth: 30,
				data: series,
				symbolSize: '7',
				itemStyle: {
				normal: {
					color: function(params) {
					// Cambiar el color según el valor de la data
					var value = params.data;
					if (value < 300) {
						return '#328737';
					} else if (value < 350) {
						return '#dfb213';
					} else if (value < 400) {
						return '#de691b';
					} else {
						return '#af0505';
					}
					},
					},
				},
				lineStyle: {
					color: '#101D42',
					width: 1,
				},
			},
		],
	};
};

// componente de la grafica
const AcChart = () => {
	const { airquality } = CustomSocketHook(); // custom hook para recibir datos del socket

	const [dataSeries, setDataSeries] = useState([]); // barra de la grafica
	const [dataXAxis, setDataXAxis] = useState([]); // datos del eje x

	const myChartRef = useRef(null); // referencia persistente a la grafica

	// obtencion de la hora actual
	const getCurrentTime = () => {
		const options = { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
		return new Date().toLocaleTimeString([], options);
	};

	// inicializacion de grafica (primer renderizado)
	useEffect(() => {
		// inicializacion de grafica
		myChartRef.current = myChartRef.current ?? echarts.init(document.getElementById('chart'));

		// datos de prueba
		const mockData = {
			dataSeries: [280, 300, 350, 320, 290, 360, 400, 390, 450, 350],
			dataXAxis: [
				'12:00:00',
				'12:00:30',
				'12:01:00',
				'12:01:30',
				'12:02:00',
				'12:02:30',
				'12:03:00',
				'12:03:30',
				'12:04:00',
				'12:04:30',
			],
		};

		// configuracion de los datos de prueba
		setDataSeries(mockData.dataSeries);
		setDataXAxis(mockData.dataXAxis);

		// redimension de la grafica
		const handleResize = () => {
			myChartRef.current.resize();
		};

		// evento de redimension de la grafica
		window.addEventListener('resize', handleResize);

		// limpieza de la grafica
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	// recepion de datos
	useEffect(() => {
		if (airquality === null) return;

		// actualizacion de datos de las barras
		const newDataSeries = [...dataSeries.slice(1), airquality];
		setDataSeries(newDataSeries);

		// actualizacion de eje X
		const newDataXAxis = [...dataXAxis.slice(1), getCurrentTime()];
		setDataXAxis(newDataXAxis);
	}, [airquality]);

	// actualizacion de grafica
	useEffect(() => {
		if (myChartRef.current === null) return;

		// configuracion de la grafica
		const options = getChartOption(dataXAxis, dataSeries);

		// actualizacion de la grafica
		myChartRef.current.setOption(options);
	}, [dataSeries]);

	return <div id="chart" className="w-full h-full" />;
};

export default AcChart;