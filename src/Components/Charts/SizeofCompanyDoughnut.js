import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { getSizeofCompany } from "../../Services/ChartsService";
import Card from "@material-ui/core/Card";

const parSmall = "sizeOfCompany=Maža";
const parMedium = "sizeOfCompany=Vidutinė";
const parLarge = "sizeOfCompany=Didelė";

const DoughnutChart = () => {
  const [value, setValue] = useState();
  useEffect(() => {
    getSizeofCompany(parLarge, parMedium, parSmall, setValue);
  }, []);

  const data = {
    labels: ["Didelė", "Vidutinė", "Maža"],
    datasets: [
      {
        label: "# of Votes",
        data: value,
        backgroundColor: [
          "rgba(255, 99, 132)", // Green 'rgba(75, 192, 192)'
          "rgba(54, 162, 235)", //Purple 'rgba(153, 102, 255)'
          "rgba(255, 206, 86)", //Orange 'rgba(255, 159, 64)'
        ],

        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Card>
      <Doughnut data={data} />
      <h2>Klientų dydis</h2>
    </Card>
  );
};

export default DoughnutChart;
