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
    email: string;
    phone: string;
    car: string;
    status: string;
    date: string;
}

const data = [
    {
        key: '1',
        no: '#2472',
        name: 'Admin Asadujjaman',
        email: 'kenzi.lawson@example.com',
        phone: '225.555.0118',
        car: 'Opel Corsa',
        status: 'Active',
        date: '2/11/12',
    },
    {
        key: '2',
        no: '#2450',
        name: 'Admin Asadujjaman',
        email: 'sara.cruz@example.com',
        phone: '203.555.0106',
        car: 'Opel Corsa',
        status: 'Inactive',
        date: '8/30/14',
    },
    {
        key: '3',
        no: '#2450',
        name: 'Admin Asadujjaman',
        email: 'nathan.roberts@example.com',
        phone: '239.555.0108',
        car: 'Opel Corsa',
        status: 'Active',
        date: '8/2/19',
    },
    {
        key: '4',
        no: '#2450',
        name: 'Dr. Anna KOWALSKA',
        email: 'alma.lawson@example.com',
        phone: '270.555.0117',
        car: 'Opel Corsa',
        status: 'Inactive',
        date: '8/16/13',
    },
    {
        key: '5',
        no: '#2450',
        name: 'Dr. Michael O’CONNOR',
        email: 'tim.jennings@example.com',
        phone: '262.555.0131',
        car: 'Opel Corsa',
        status: 'Active',
        date: '5/19/12',
    },
    {
        key: '6',
        no: '#2465',
        name: 'Dr. Yasmin AL-FARSI',
        email: 'willie.jennings@example.com',
        phone: '205.555.0100',
        car: 'Opel Corsa',
        status: 'Inactive',
        date: '7/27/13',
    },
    {
        key: '7',
        no: '#2472',
        name: 'Dr. Leila BEN AMAR',
        email: 'bill.sanders@example.com',
        phone: '307.555.0133',
        car: 'Opel Corsa',
        status: 'Active',
        date: '10/6/13',
    },
    {
        key: '8',
        no: '#2465',
        name: 'Dr. Elena PETROVA',
        email: 'debra.holt@example.com',
        phone: '201.555.0124',
        car: 'Opel Corsa',
        status: 'Inactive',
        date: '9/23/16',
    },
    {
        key: '9',
        no: '#2465',
        name: 'Dr. Sergei IVANOV',
        email: 'curtis.weaver@example.com',
        phone: '704.555.0127',
        car: 'Opel Corsa',
        status: 'Active',
        date: '12/10/13',
    },
    {
        key: '10',
        no: '#2472',
        name: 'Dr. Sofia OLIVEIRA',
        email: 'michelle.rivera@example.com',
        phone: '671.555.0110',
        car: 'Opel Corsa',
        status: 'Inactive',
        date: '5/30/14',
    },
    {
        key: '11',
        no: '#2472',
        name: 'Dr. Ahmed KHAN',
        email: 'felicia.reid@example.com',
        phone: '603.555.0123',
        car: 'Opel Corsa',
        status: 'Active',
        date: '4/4/18',
    },
];

export default function BuyerRegistration() {
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
            title: 'S.No',
            dataIndex: 'no',
        },
        {
            title: 'Registration By',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Contact No',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Post S. No',
            dataIndex: 'no',
            key: 'no',
            render: (no: string) => {
                return <span>#{no}</span>;
            },
        },
        {
            title: 'Car Name',
            dataIndex: 'car',
            key: 'car',
        },
        {
            title: 'Register Date',
            dataIndex: 'date',
            key: 'date',
        },

        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (_: any, record: DataType) => (
                <div className="flex justify-center items-center gap-2 -ml-8" key={record.no}>
                    <Link to="/all-details">
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
