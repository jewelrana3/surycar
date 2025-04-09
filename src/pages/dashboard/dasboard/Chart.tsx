import { useState } from 'react';
import { Select } from 'antd';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const { Option } = Select;

const data = [
    { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
    { name: 'Aug', uv: 3490, pv: 4300, amt: 2100 },
    { name: 'Sep', uv: 3490, pv: 4300, amt: 2100 },
    { name: 'Oct', uv: 3490, pv: 4300, amt: 2100 },
    { name: 'Nov', uv: 3490, pv: 4300, amt: 2100 },
    { name: 'Dec', uv: 3490, pv: 4300, amt: 2100 },
];

export default function Chart() {
    const [selectedYear, setSelectedYear] = useState('Year');

    const handleYearChange = (value: string) => {
        setSelectedYear(value);
    };

    return (
        <div className="my-4 bg-white shadow-md rounded-lg px-3 pt-2">
            <div className="flex items-center justify-between">
                <h1 className="text-xl text-[#242731]">
                    <span className=" font-semibold">Earning</span> Statics
                </h1>
                <Select value={selectedYear} onChange={handleYearChange} className="w-32 h-[40px]">
                    <Option value="2025">2025</Option>
                    <Option value="2026">2026</Option>
                    <Option value="2027">2027</Option>
                    <Option value="2028">2028</Option>
                    <Option value="2029">2029</Option>
                    <Option value="2030">2030</Option>
                </Select>
            </div>
            <ResponsiveContainer width="100%" height={260}>
                <BarChart
                    width={10}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 10,
                        left: 10,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
