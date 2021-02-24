import React, {useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { getClientServices } from '../../Services/ChartsService';

const parameterInt = "services=internetas"
const parameterTV = "services=tv"
const parameterIntTV = "services=internetas/tv"
const parameterPhone = "services=telefonija"
const parameterWifi = "services=Wifi"



const DoughnutChart = () => {
  
  const [value, setValue] = useState();
  useEffect(() => {
    getClientServices(parameterInt,
      parameterTV,
      parameterIntTV,
      parameterPhone,
      parameterWifi,
      setValue);

  }, [])

  const data = {
  labels: ['Internetas', 'Televizija', 'Internetas/TV', 'Telefonija', 'Wifi'],
  datasets: [
    {
      label: '# of Votes',
      data: value,
      backgroundColor: [
        'rgba(255, 99, 132)',
        'rgba(54, 162, 235)',
        'rgba(255, 206, 86)',
        'rgba(75, 192, 192)',
        'rgba(153, 102, 255)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1,
    },
  ],
}
  return (
  <>
    <div className='header'>
        <h1 className='title'>Klientų paslaugos</h1>
    </div>
    <Doughnut data={data} />
  </>
)
}

export default DoughnutChart