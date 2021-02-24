import React, {useState, useEffect} from 'react'
import { Bar } from 'react-chartjs-2'
import { getSalesIncome } from '../../Services/ChartsService';

const parless10k = "salesIncome=10"
const parless50k = "salesIncome=50"
const parless100k = "salesIncome=100"
const parless1m = "salesIncome=1m"
const parless5m = "salesIncome=5m"
const parmore10m = "salesIncome=10m"

const VerticalBar = () => {
  const [value, setValue] = useState();
  useEffect(() => {
    getSalesIncome(parmore10m,
      parless5m,
      parless1m,
      parless100k,
      parless50k,
      parless10k,
      setValue);

  }, [])
  const data = {
  labels: ['10M€>', '5M€>', '1M€>', '100tūkst€>', '50tūkst€>', '10tūkst€>'],
  datasets: [
    {
      data: value,
      backgroundColor: [
        'rgba(255, 99, 132)',
        'rgba(54, 162, 232)',
        'rgba(255, 206, 86)',
        'rgba(75, 192, 192)',
        'rgba(153, 102, 255)',
        'rgba(255, 159, 64)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
}

   return (
    <>
      <div className='header'>
        <h1 className='title'>Klientai pagal Pardavimų apyvarta</h1>
      </div>
      <Bar data={data} />
    </>
  )
}

export default VerticalBar