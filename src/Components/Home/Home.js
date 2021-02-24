import React from 'react';
import VerticalBar from '../Charts/SalesIncomeVerticalBar';
import HorizontalBarChart from '../Charts/MonthyPaymentBar';
import Example from '../Charts/SegmentPie';
import Polar from '../Charts/ServicesDoughnut';
import Polar2 from '../Charts/SizeofCompanyDoughnut';
import './Home.css';

export default function Home() {
    return (
        <div>
        <div className="charts">
            <VerticalBar />
            <Example />
            </div>
            <div className="charts">
                <HorizontalBarChart />
                <Polar/>
            </div>
            <div className="charts">
                <Polar2/>
            </div>
        </div>
    )
}
