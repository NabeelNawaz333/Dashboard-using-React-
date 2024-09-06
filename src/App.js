import React from 'react';
import Sidebar from './sidebar';
import './App.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Jan', TeamA: 40, TeamB: 24, TeamC: 24 },
  { name: 'Feb', TeamA: 30, TeamB: 13, TeamC: 22 },
  { name: 'Mar', TeamA: 20, TeamB: 98, TeamC: 22 },
  { name: 'Apr', TeamA: 27, TeamB: 39, TeamC: 20 },
  { name: 'May', TeamA: 18, TeamB: 48, TeamC: 21 },
  { name: 'Jun', TeamA: 23, TeamB: 38, TeamC: 25 },
  { name: 'Jul', TeamA: 34, TeamB: 43, TeamC: 21 },
];

const pieData = [
  { name: 'Asia', value: 400 },
  { name: 'America', value: 300 },
  { name: 'Europe', value: 300 },
  { name: 'Africa', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const renderCustomLabel = ({ percent, name }) => {
  return `${name} ${(percent * 100).toFixed(0)}%`;
};

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
        <h1>&emsp;&emsp;&emsp;&emsp;Hi, Welcome Back</h1>
        <div className="stats-grid">
          <div className="stats-box blue">
            <h2>714k</h2>
            <p>Weekly Sales</p>
          </div>
          <div className="stats-box light-blue">
            <h2>2k</h2>
            <p>New Users</p>
          </div>
          <div className="stats-box yellow">
            <h2>1k</h2>
            <p>Item Orders</p>
          </div>
          <div className="stats-box red">
            <h2>234</h2>
            <p>Bug Reports</p>
          </div>
        </div>
        <div className="charts-grid">
          <div className="line-chart">
            <h3>Website Visits</h3>
            <LineChart
              width={600}
              height={300}
              data={data}
              margin={{
                top: 5, right: 30, left: 20, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="TeamA" stroke="#8884d8" />
              <Line type="monotone" dataKey="TeamB" stroke="#82ca9d" />
              <Line type="monotone" dataKey="TeamC" stroke="#ffc658" />
            </LineChart>
          </div>
          <div className="pie-chart">
            <h3>Current Visits</h3>
            <PieChart width={400} height={400}>
              <Pie
                data={pieData}
                cx="50%" 
                cy="50%"
                innerRadius={70}
                outerRadius={120}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
                label={renderCustomLabel}
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
