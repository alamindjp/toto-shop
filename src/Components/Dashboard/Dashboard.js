import React, { useEffect, useState } from 'react';
import './Dashboard.css'
import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
        fetch('data.json').then(res => res.json()).then(data => setdata(data))
    }, [])
    return (
        <div className='container'>
            <div className='rechart'>
                <LineChart width={550} height={250} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis dataKey="investment" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sell" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                    <Line type="monotone" dataKey="investment" stroke="#82c" />
                </LineChart>
            </div>
            <div className='rechart'>
                <PieChart width={550} height={250}>
                    <Pie data={data} dataKey="sell" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                    <Pie data={data} dataKey="revenue" nameKey="name" cx="50%" cy="50%" innerRadius={55} outerRadius={65} fill="#82ca9d" />
                    <Tooltip />
                    <Pie data={data} dataKey="investment" nameKey="name" cx="50%" cy="50%" innerRadius={70} outerRadius={80} fill="#82ca" label />
                </PieChart>
            </div>
            <div className='rechart'>
                <BarChart width={550} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis dataKey="investment" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sell" fill="#82ca9d" />
                    <Bar dataKey="revenue" fill="#8884d8" />
                    <Bar dataKey="investment" fill="#888" />
                </BarChart>
            </div>
            <div className='rechart'>
                <ComposedChart width={550} height={250} data={data}>
                    <XAxis dataKey="month" />
                    <YAxis dataKey="investment" />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Area type="monotone" dataKey="revenue" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="sell" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="investment" stroke="#ff7300" />
                </ComposedChart>
            </div>
        </div>
    );
};

export default Dashboard;