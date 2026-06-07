// src/components/admin/SalesChart.jsx
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart } from 'recharts';

const SalesChart = ({ data, type = 'bar' }) => {
  const ChartComponent = type === 'bar' ? BarChart : LineChart;

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-[#1E2A5A]">Sales Overview</h2>
        <select className="px-3 py-1 border rounded-lg text-sm">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 3 months</option>
          <option>Last year</option>
        </select>
      </div>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <ChartComponent data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="sales" fill="#FF9B50" radius={[4, 4, 0, 0]} />
          </ChartComponent>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesChart;