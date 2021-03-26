import React from "react";
import VerticalBar from "../Charts/SalesIncomeVerticalBar";
import HorizontalBarChart from "../Charts/MonthyPaymentBar";
import SegmentPie from "../Charts/SegmentPie";
import Polar from "../Charts/ServicesDoughnut";
import Polar2 from "../Charts/SizeofCompanyDoughnut";
import "./Home.css";
import Menu from "../../Components/NavigationHome/Menu";

export default function Home() {
  return (
    <container className="layout">
      <div className="navigation">
        <Menu />
      </div>
      <div className="charts">
        <Polar2 />
        <SegmentPie />
        <HorizontalBarChart />
        <Polar />
      </div>
    </container>
  );
}
