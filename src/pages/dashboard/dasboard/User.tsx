import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { curveCardinal } from 'd3-shape';
import { Select } from 'antd';
import { useState } from 'react';
import { useGetUserQuery } from '../../../redux/analytics/analytics';
const { Option } = Select;

// const data = [
//     { name: 'Jan', uv: 4000 },
//     { name: 'Feb', uv: 3000 },
//     { name: 'Mar', uv: 2000 },
//     { name: 'Apr', uv: 2780 },
//     { name: 'May', uv: 1890 },
//     { name: 'Jun', uv: 2390 },
//     { name: 'Jul', uv: 3490 },
//     { name: 'Aug', uv: 4000 },
//     { name: 'Sep', uv: 3100 },
//     { name: 'Oct', uv: 4200 },
//     { name: 'Nov', uv: 3800 },
//     { name: 'Dec', uv: 3500 },
// ];

const cardinal = curveCardinal.tension(0.2);

export default function User() {
    const { data, isError, isLoading } = useGetUserQuery(undefined);
    const userData = data?.data.map((item: any) => ({
        name: item.month,
        uv: item.total,
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
        <div>
            <div className="flex items-center justify-between">
                <h1 className="text-xl">
                    {' '}
                    <span className=" font-medium">User</span> Statics
                </h1>
                <Select value={selectedYear} onChange={handleYearChange} className="w-28 h-[30px]">
                    <Option value="2025">2025</Option>
                    <Option value="2026">2026</Option>
                    <Option value="2027">2027</Option>
                    <Option value="2028">2028</Option>
                    <Option value="2029">2029</Option>
                    <Option value="2030">2030</Option>
                </Select>
            </div>
            <ResponsiveContainer width="100%" height={250}>
                <AreaChart
                    width={500}
                    height={400}
                    data={userData}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
                    {/* <Area type={cardinal} dataKey="uv" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} /> */}
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}
