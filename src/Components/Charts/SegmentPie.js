import React, {useState, useEffect} from 'react'
import { Pie } from 'react-chartjs-2'
import { getSegments } from '../../Services/ChartsService';

const parSportas = "segment=Sporto Veikla"
const parFarmacija = "segment=Farmacija"
const parTechnologijos = "segment=Technologijos"
const parPramonė = "segment=Pramonė"
const parValstybinis = "segment=Valstybinis"
const parTransportas = "segment=Transportas"


const PieChart = () => {
   const [value, setValue] = useState();
  useEffect(() => {
    getSegments(parSportas,
      parFarmacija,
      parTechnologijos,
      parPramonė,
      parValstybinis,
      parTransportas,
      setValue);

  }, [])
const data = {
  labels: ['Sporto Veikla', 'Farmacija', 'Technologijos',
    'Pramonė', 'Valstybinis', 'Transportas'],
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
  return(
  <>
    <div className='header'>
      <h1 className='title'>Segmentai</h1>
    </div>
    <Pie data={data} />
    </>
  )
}

export default PieChart