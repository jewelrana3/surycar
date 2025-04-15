import { Table } from 'antd';
import { useState } from 'react';
import { CiCircleInfo } from 'react-icons/ci';

import { Link } from 'react-router-dom';
import type { TableColumnsType } from 'antd';
import SearchCategory from '../../../components/shared/SearchCategory';

interface DataType {
    key: React.Key;
    no: string;
    name: string;
    date: string;
    vehiclePrice: string;
    contentPrice: string;
    boostingPrice: string;
    total?: string;
    userId?: string;
}
const data = [
    {
        key: '1',
        no: '#2472',
        name: 'Admin Asadujjaman',
        date: '2/11/12',
        vehiclePrice: 'SYP 130,019,000',
        contentPrice: 'SYP 130,019,000',
        boostingPrice: 'SYP 130,019,000',
        total: 'SYP 390,057,000',
        userId: 'U001',
    },
    {
        key: '2',
        no: '#2472',
        name: 'Admin Asadujjaman',
        date: '8/30/14',
        vehiclePrice: 'SYP 130,019,000',
        contentPrice: '--',
        boostingPrice: 'SYP 130,019,000',
        total: 'SYP 260,038,000',
        userId: 'U002',
    },
    {
        key: '3',
        no: '#2450',
        name: 'Admin Asadujjaman',
        date: '8/2/19',
        vehiclePrice: 'SYP 130,019,000',
        contentPrice: '--',
        boostingPrice: 'SYP 130,019,000',
        total: 'SYP 260,038,000',
        userId: 'U003',
    },
    {
        key: '4',
        no: '#2450',
        name: 'Dr. Anna KOWALSKA',
        date: '8/16/13',
        vehiclePrice: 'SYP 130,019,000',
        contentPrice: '--',
        boostingPrice: 'SYP 130,019,000',
        total: 'SYP 260,038,000',
        userId: 'U004',
    },
];

export default function SellerTransection() {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        onchange: onSelectChange,
        selectedRowKeys,
    };

    const columns: TableColumnsType<DataType> = [
        {
            title: 'S. No',
            dataIndex: 'no',
        },
        {
            title: 'User Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'User ID',
            dataIndex: 'userId',
            key: 'userId',
        },
        {
            title: 'Register Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Vehicles Price',
            dataIndex: 'vehiclePrice',
            key: 'vehiclePrice',
        },
        {
            title: 'Content Price',
            dataIndex: 'contentPrice',
            key: 'contentPrice',
        },
        {
            title: 'Boosting Price',
            dataIndex: 'boostingPrice',
            key: 'boostingPrice',
        },
        {
            title: 'Total',
            dataIndex: 'total',
            key: 'total',
            render: (total: string) => <span className="text-green-500">{total}</span>,
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (_: any, record: DataType) => (
                <div className="flex justify-center items-center gap-2 -ml-8" key={record.no}>
                    <Link to="/transection-details">
                        <button className="mt-1">
                            <CiCircleInfo size={25} className="text-[#6CA0DC]" />
                        </button>
                    </Link>
                </div>
            ),
        },
    ];

    return (
        <div className="bg-white rounded-lg">
            <SearchCategory />
            {/* Table with Checkbox Selection */}
            <Table
                columns={columns}
                dataSource={data}
                rowKey={(record) => `${record.key}`}
                rowSelection={rowSelection}
            />
        </div>
    );
}
