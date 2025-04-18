import { useState } from 'react';
import { Select } from 'antd';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useGetEarningQuery } from '../../../redux/analytics/analytics';

const { Option } = Select;

// const data = [
//     { name: 'Jan', pv: 2400, amt: 2400 },
//     { name: 'Feb', pv: 1398, amt: 2210 },
//     { name: 'Mar', pv: 9800, amt: 2290 },
//     { name: 'Apr', pv: 3908, amt: 2000 },
//     { name: 'May', pv: 4800, amt: 2181 },
//     { name: 'Jun', pv: 3800, amt: 2500 },
//     { name: 'Jul', pv: 4300, amt: 2100 },
//     { name: 'Aug', pv: 4300, amt: 2100 },
//     { name: 'Sep', pv: 4300, amt: 2100 },
//     { name: 'Oct', pv: 4300, amt: 2100 },
//     { name: 'Nov', pv: 4300, amt: 2100 },
//     { name: 'Dec', pv: 4300, amt: 2100 },
// ];

export default function Chart() {
    const { data, isError, isLoading } = useGetEarningQuery(undefined);
    console.log(data?.data);
    const userData = data?.data.map((item: any) => ({
        name: item.month,
        total: item.total,
        pv: 4300,
        uv: 200,
    }));
    const [selectedYear, setSelectedYear] = useState('Year');

    const handleYearChange = (value: string) => {
        setSelectedYear(value);
    };

    if (isLoading) {
        return <span className="">Loading...</span>;
    }

    if (isError) {
        return <span className="">data not found...</span>;
    }

    return (
        <div className="my-4 bg-white shadow-md rounded-lg px-3 pt-1">
            <div className="flex items-center justify-between">
                <h1 className="text-xl text-[#242731]">
                    <span className=" font-medium">Earning</span> Statics
                </h1>
                <Select value={selectedYear} onChange={handleYearChange} className="w-32 h-[40px] mt-2">
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
                    data={userData}
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
