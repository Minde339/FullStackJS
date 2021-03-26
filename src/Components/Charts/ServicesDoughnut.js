import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { getClientServices } from "../../Services/ChartsService";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

const parameterInt = "services=internetas";
const parameterTV = "services=tv";
const parameterIntTV = "services=internetas/tv";
const parameterPhone = "services=telefonija";
const parameterWifi = "services=Wifi";

const useStyles = makeStyles({
  root: {
    width: `30%`,
  },
});

const DoughnutChart = () => {
  const [value, setValue] = useState();
  const classes = useStyles();
  useEffect(() => {
    getClientServices(
      parameterInt,
      parameterTV,
      parameterIntTV,
      parameterPhone,
      parameterWifi,
      setValue
    );
  }, []);

  const data = {
    labels: ["Internetas", "Televizija", "Internetas/TV", "Telefonija", "Wifi"],
    datasets: [
      {
        label: "# of Votes",
        data: value,
        backgroundColor: [
          "rgba(255, 99, 132)",
          "rgba(54, 162, 235)",
          "rgba(255, 206, 86)",
          "rgba(75, 192, 192)",
          "rgba(153, 102, 255)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <Card className={classes.root}>
      <Doughnut data={data} />
      <h2>Klientų paslaugos</h2>
    </Card>
  );
};

export default DoughnutChart;
