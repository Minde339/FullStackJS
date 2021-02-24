import React, {useState, useEffect} from 'react'
import { HorizontalBar } from 'react-chartjs-2'
import { getMonthlyPayments } from '../../Services/ChartsService';

const parless10 = "monthlyPayment=20"
const parless20 = "monthlyPayment=20"
const parless50 = "monthlyPayment=50"
const parless100 = "monthlyPayment=100"
const parless200 = "monthlyPayment=200"
const parmore250 = "monthlyPayment=250"

const HorizontalBarChart = () => {
  const [value, setValue] = useState();
  useEffect(() => {
    getMonthlyPayments(parmore250,
      parless200,
      parless100,
      parless50,
      parless20,
      parless10,
      setValue);

  }, [])
  const data = {
  labels: ['250€>', '200€>', '100€>', '50€>', '20€>', '10€>'],
  datasets: [
    {
      data: value,
      backgroundColor: [
        'rgba(255, 99, 132)',
        'rgba(54, 162, 235)',
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
        <h1 className='title'>Klientai pagal Mėnesinį mokestį</h1>
      </div>
      <HorizontalBar data={data} />
    </>
  )
}

export default HorizontalBarChart