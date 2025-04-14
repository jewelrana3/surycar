import { Select } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const { Option } = Select;
const data = [
    { name: 'Jan', uv: 4000 },
    { name: 'Feb', uv: 3000 },
    { name: 'Mar', uv: 2000 },
    { name: 'Apr', uv: 2780 },
    { name: 'May', uv: 1890 },
    { name: 'Jun', uv: 2390 },
    { name: 'Jul', uv: 3490 },
    { name: 'Aug', uv: 4000 },
    { name: 'Sep', uv: 3100 },
    { name: 'Oct', uv: 4200 },
    { name: 'Nov', uv: 3800 },
    { name: 'Dec', uv: 3500 },
];

export default function Post() {
    return (
        <div>
            <div className="flex items-center justify-between">
                <h1 className="text-xl">
                    {' '}
                    <span className=" font-medium">Post</span> Statics
                </h1>
                <Select defaultValue="Year" className="w-28 h-[30px]">
                    <Option value="2025">2025</Option>
                    <Option value="2026">2026</Option>
                    <Option value="2027">2027</Option>
                    <Option value="2028">2028</Option>
                    <Option value="2029">2029</Option>
                    <Option value="2030">2030</Option>
                </Select>
            </div>
            <ResponsiveContainer width="100%" height={250}>
                <LineChart
                    width={500}
                    height={200}
                    data={data}
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
                    <Line connectNulls type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
