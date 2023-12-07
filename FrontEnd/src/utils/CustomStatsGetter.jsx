import { FaTemperatureHalf } from 'react-icons/fa6';
import { GiChemicalTank, GiImpactPoint, GiPoisonGas } from 'react-icons/gi';
import { MdDateRange } from 'react-icons/md';
import { RiWaterPercentLine } from 'react-icons/ri';
import { useEffect, useState } from 'react';

const CustomStatsGetter = (temperature, humidity, date) => {
	
  const [dateFormated, setDateFormated] = useState("")

	useEffect(() =>{
		if (date === null) return;
		setDateFormated(date.slice(0,10))
	},[date])

	const stats = [
		{
			icon: <FaTemperatureHalf className="text-5xl" />,
			label: 'Temp',
			value: temperature,
			unit: '°C',
		},
		{
			icon: <GiChemicalTank className="text-5xl" />,
			label: 'H2S',
			value: 35,
			unit: 'ppm',
		},
		{
			icon: <RiWaterPercentLine className="text-5xl" />,
			label: 'Humidity',
			value: humidity,
			unit: '%',
		},
		{
			icon: <MdDateRange className="text-5xl" />,
			label: 'Date',
			value: dateFormated,
			unit: '',
		},
		{
			icon: <GiPoisonGas className="text-5xl" />,
			label: 'CO2',
			value: 40,
			unit: 'ppm',
		},
		{
			icon: <GiImpactPoint className="text-5xl" />,
			label: 'Presion',
			value: 100,
			unit: 'torr',
		},
	];

	return stats;
};

export default CustomStatsGetter;