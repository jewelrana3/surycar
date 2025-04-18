import { Select } from 'antd';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useGetPostQuery } from '../../../redux/analytics/analytics';
const { Option } = Select;

export default function Post() {
    const { data, isError, isLoading } = useGetPostQuery(undefined);

    const postData = data?.data?.map((item: any) => ({
        name: item?.month,
        uv: item?.total,
    }));

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
                    data={postData}
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
