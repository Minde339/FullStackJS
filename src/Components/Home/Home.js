import React from 'react';
import VerticalBar from '../Charts/Bar';
import HorizontalBarChart from '../Charts/HorizontalBar';
import MultiType from '../Charts/MultiType';
import Example from '../Charts/Pie';
import Polar from '../Charts/Polar';
import Polar2 from '../Charts/Polar2';
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
                <MultiType/>
                <Polar2/>
            </div>
        </div>
    )
}
