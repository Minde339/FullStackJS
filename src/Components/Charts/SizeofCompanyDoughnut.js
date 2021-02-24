import React, {useState, useEffect} from 'react'
import { Doughnut } from 'react-chartjs-2'
import { getSizeofCompany } from '../../Services/ChartsService';

const parSmall = "sizeOfCompany=Maža"
const parMedium = "sizeofCompany=vidutinė"
const parLarge= "sizeofCompany=didelė"

const DoughnutChart = () => {
  const [value, setValue] = useState();
  useEffect(() => {
    getSizeofCompany(parLarge,
      parMedium,
      parSmall,
      setValue);

  }, [])

  const data = {
    labels: ['Didelė', 'Vidutinė', 'Maža'],
    datasets: [
      {
        label: '# of Votes',
        data: value,
        backgroundColor: [
          'rgba(255, 99, 132)',  // Green 'rgba(75, 192, 192)'
          'rgba(54, 162, 235)',  //Purple 'rgba(153, 102, 255)'
          'rgba(255, 206, 86)'   //Orange 'rgba(255, 159, 64)'
        ],
      
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1,
      },
    ],
  }
  return (
    <>
      <div className='header'>
        <h1 className='title'>Klientų dydis</h1>
      </div>
      <Doughnut data={data} />
    </>
  )
}

export default DoughnutChart